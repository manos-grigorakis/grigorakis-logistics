"use client";

import {useConsent} from "@/components/providers/ConsentProvider";
import {GoogleAnalytics} from "@next/third-parties/google";
import {Analytics} from "@vercel/analytics/next";
import {SpeedInsights} from "@vercel/speed-insights/next";

export function AnalyticsLoader() {
    const {consent, ready} = useConsent()

    // Dont load analytics without consent
    if (!ready || consent !== "accepted") return null;

    return (
        <>
            {/* Analytics */}
            {process.env.NODE_ENV === "production" && (
                <GoogleAnalytics gaId="G-YL947VHQXY"/>
            )}

            <Analytics/>
            <SpeedInsights/>
        </>
    )
}