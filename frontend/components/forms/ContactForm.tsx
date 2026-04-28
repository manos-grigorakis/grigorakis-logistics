import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactFormInner from "./ContactFormInner";

export default function ContactForm() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
    >
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  );
}
