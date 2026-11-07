const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

type Grecaptcha = {
    ready: (callback: () => void) => void;
    execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
    interface Window {
        grecaptcha?: Grecaptcha;
    }
}

let loadPromise: Promise<Grecaptcha> | null = null;

/**
 * Injects the reCAPTCHA script once and resolves when recaptcha is read
 * Safe to call multiple times, the same promise is returned
 */
export function loadRecaptcha(): Promise<Grecaptcha> {
    if (loadPromise) return loadPromise;

    loadPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`
        script.async = true;

        script.onload = () => {
            const grecaptcha = window.grecaptcha

            if (!grecaptcha) {
                loadPromise = null;
                reject(new Error("reCAPTCHA is unavailable"));
                return;
            }

            grecaptcha.ready(() => resolve(grecaptcha));
        }

        script.onerror = () => {
            // Allow a retry on the next call
            loadPromise = null;
            reject(new Error("reCAPTCHA failed to load"));
        };

        document.head.appendChild(script);
    })

    return loadPromise
}

/**
 * Returns a reCAPTCHA v3 token for the given action, loading the script first if needed
 * @param action The action name verified on the server
 */
export async function getRecaptchaToken(action: string): Promise<string> {
    const grecaptcha = await loadRecaptcha();
    return grecaptcha.execute(SITE_KEY, {action})
}