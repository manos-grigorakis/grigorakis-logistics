"use client";

import Link from "next/link";
import {LuCookie, LuMinus} from "react-icons/lu";
import {useState} from "react";
import {useConsent} from "@/components/providers/ConsentProvider";

export function CookieBanner() {
    const [minimized, setMinimized] = useState(false);
    const {consent, setConsent, ready, settingsOpen, closeSettings} = useConsent();

    const isMinimized = minimized && !settingsOpen;

    const handleAccept = () => {
        setConsent("accepted");
    }

    const handleReject = () => {
        setConsent("rejected");
    }

    // Wait for stored consent and hide banner if already answered
    if (!ready || (consent !== null && !settingsOpen)) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:bottom-6 md:w-95">
            {
                isMinimized ? (
                    <button type="button" onClick={() => setMinimized(false)} aria-label="Εμφάνιση ρυθμίσεων cookies"
                            className="ml-auto flex size-12 hover:cursor-pointer items-center justify-center border border-ruler bg-white text-foreground shadow-lg transition-colors hover:bg-gray-100">
                        <LuCookie className="size-6"/>
                    </button>
                ) : (
                    <div className="border border-ruler bg-white p-6 text-foreground shadow-xl">
                        <div className="mb-4 flex items-start justify-between">
                            <div className="flex items-center gap-2">
                                <LuCookie className="size-6 text-primary-600"/>
                                <h3 className="text-lg font-semibold">Ρυθμίσεις Cookies</h3>
                            </div>

                            <button type="button" onClick={() => {
                                if (settingsOpen) {
                                    closeSettings()
                                } else {
                                    setMinimized(true);
                                }
                            }}
                                    aria-label="Ελαχιστοποίηση banner cookies"
                                    className="flex size-8 items-center hover:cursor-pointer justify-center transition-colors hover:bg-gray-100">
                                <LuMinus className="size-5"/>
                            </button>
                        </div>

                        <p className="mb-4 text-sm leading-relaxed text-foreground/70">
                            Χρησιμοποιούμε προαιρετικά cookies ανάλυσης για
                            να κατανοούμε την επισκεψιμότητα και να βελτιώνουμε
                            τις υπηρεσίες μας.
                        </p>

                        <Link href="/privacy-policy"
                              className="mb-5 inline-block text-xs text-foreground/60 underline underline-offset-2 hover:text-foreground">
                            Πολιτική Απορρήτου
                        </Link>

                        <div className="grid grid-cols-2 gap-3">
                            <button type="button" onClick={handleReject}
                                    className="border border-foreground px-4 py-3 text-sm hover:cursor-pointer font-medium transition-colors hover:bg-gray-100">
                                Απόρριψη
                            </button>

                            <button
                                type="button"
                                onClick={handleAccept}
                                className="bg-primary-600 px-4 py-3 text-sm font-medium hover:cursor-pointer text-white transition-colors hover:bg-primary-700"
                            >
                                Αποδοχή
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}