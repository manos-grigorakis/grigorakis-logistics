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

// Remove GA4 cookies
const clearAnalyticsCookies = () => {
    const cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {
        const name = cookie.trim().split("=")[0];

        if (name === "_ga" || name.startsWith("_ga_")) {
            document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
            document.cookie = `${name}=; Max-Age=0; Path=/; Domain=grigorakis-logistics.gr; SameSite=Lax`;
        }
    })
}

const ConsentContext = createContext<ConsentContextType | null>(null);

export function ConsentProvider({children}: { children: ReactNode }) {
    const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    const [settingsOpen, setSettingsOpen] = useState(false);

    const ready = snapshot !== "loading";
    const consent = ready ? snapshot : null;

    // Save consent and notify subscribers
    const setConsent = (value: Exclude<ConsentStatus, null>) => {
        const previousConsent = localStorage.getItem(STORAGE_KEY);

        // Reload when analytics consent is revoked
        if (previousConsent === 'accepted' && value === 'rejected') {
            localStorage.setItem(STORAGE_KEY, value);

            // Disable GA4
            Object.assign(window, {"ga-disable-G-YL947VHQXY": true});

            clearAnalyticsCookies()
            window.location.reload()
            return
        }

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