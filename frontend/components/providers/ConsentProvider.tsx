"use client";

import {createContext, ReactNode, useContext, useState, useSyncExternalStore} from "react";

type ConsentStatus = "accepted" | "rejected" | null;
type ConsentSnapshot = ConsentStatus | "loading";

type ConsentContextType = {
    consent: ConsentStatus;
    setConsent: (value: Exclude<ConsentStatus, null>) => void;
    ready: boolean;
    settingsOpen: boolean;
    openSettings: () => void;
    closeSettings: () => void;
}

const STORAGE_KEY = "analytics-consent"
const CHANGE_EVENT = "analytics-consent-change"

// Read consent from localStorage
const getSnapshot = (): ConsentSnapshot => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored === "accepted" || stored === "rejected") {
        return stored;
    }

    return null;
}

// Return initial state during SSR
const getServerSnapshot = (): ConsentSnapshot => "loading";

// Subscribe to consent changes
const subscribe = (callback: () => void) => {
    window.addEventListener("storage", callback)
    window.addEventListener(CHANGE_EVENT, callback)

    return () => {
        window.removeEventListener("storage", callback)
        window.removeEventListener(CHANGE_EVENT, callback)
    }
}

const ConsentContext = createContext<ConsentContextType | null>(null);

export function ConsentProvider({children}: { children: ReactNode }) {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    const [settingsOpen, setSettingsOpen] = useState(false);

    const ready = snapshot !== "loading";
    const consent = ready ? snapshot : null;

    // Save consent and notify subscribers
    const setConsent = (value: Exclude<ConsentStatus, null>) => {
        localStorage.setItem(STORAGE_KEY, value);
        window.dispatchEvent(new Event(CHANGE_EVENT))
        setSettingsOpen(false);
    }

    // Open cookie settings
    const openSettings = () => setSettingsOpen(true);
    const closeSettings = () => setSettingsOpen(false);


    // Share consent state with children
    return (
        <ConsentContext.Provider value={{consent, setConsent, ready, settingsOpen, openSettings, closeSettings}}>
            {children}
        </ConsentContext.Provider>
    )
}

// Access consent context from any child component
export function useConsent() {
    const context = useContext(ConsentContext);

    if (!context) throw new Error("useConsent must be used within ConsentProvider");
    return context;
}