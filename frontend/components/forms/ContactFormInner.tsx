import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ContactSchema,
  ContactFormData,
} from "@/app/lib/validation/contact-form-data";
import InputField from "../ui/InputField";
import { TRANSPORT_TYPES } from "@/data/transport-types";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactFormInner() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "bot"
  >("idle");

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clean up
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  /**
   * Extracts a string value from {@link FormData}
   * @param value The {@link FormData} value to extract
   * @returns The string value, or an empty string if null or not a string
   */
  function getString(value: FormDataEntryValue | null): string {
    return typeof value === "string" ? value : "";
  }

  /**
   * Validates a form field using Zod schema.
   * Clears the field error if valid, otherwise it sets it
   * @param name The field name
   * @param value The current field value to be validated
   */
  function validateField(name: string, value: string) {
    const fieldSchema =
      ContactSchema.shape[name as keyof typeof ContactSchema.shape];

    if (!fieldSchema) return;

    const result = fieldSchema.safeParse(value);

    setErrors((prev) => {
      const newErrors = { ...prev };

      if (result.success) {
        delete newErrors[name];
      } else {
        newErrors[name] = result.error.issues[0].message;
      }

      return newErrors;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!executeRecaptcha) return;
    const token = await executeRecaptcha("contact_form");

    const formData = new FormData(form);

    const payload: ContactFormData = {
      fullname: getString(formData.get("fullname")),
      email: getString(formData.get("email")),
      phone: getString(formData.get("phone")),
      transportationType: getString(formData.get("transportationType")),
      route: getString(formData.get("route")),
      description: getString(formData.get("description")),
      recaptchaToken: token,
    };

    const result = ContactSchema.safeParse(payload);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as string;
        fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      return;
    }

    // Update error & status state
    setErrors({});
    setStatus("loading");

    try {
      const res = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!res.ok) {
        const data = await res.json();

        if (data.code === "RECAPTCHA_FAILED") {
          setStatus("bot");
        } else {
          setStatus("error");
        }
        timerRef.current = setTimeout(() => setStatus("idle"), 5000);
        return;
      }

      setStatus("success");
      form.reset();
      timerRef.current = setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <h5 className="mb-8 text-4xl font-bold text-center capitalize">
        φόρμα προσφοράς
      </h5>

      {/* Success message */}
      {status === "success" && (
        <p className="w-full px-3 py-2 mb-8 text-sm text-center text-green-800 bg-green-300">
          Το αίτημα στάλθηκε επιτυχώς.
        </p>
      )}

      {/* Error message */}
      {status === "error" && (
        <p className="w-full px-3 py-2 mb-8 text-sm text-center text-red-800 bg-red-300">
          Κάτι πήγε στραβά. Δοκιμάστε ξανά ή επικοινωνήστε μαζί μας απευθείας.
        </p>
      )}

      {/* CAPTCHA error message */}
      {status === "bot" && (
        <p className="w-full px-3 py-2 mb-8 text-sm text-center text-red-800 bg-red-300">
          Η επαλήθευση απέτυχε. Παρακαλώ δοκιμάστε ξανά.
        </p>
      )}

      {/* Form */}
      <form onSubmit={onSubmit} className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-wrap justify-between gap-6 md:gap-4">
          <div className="flex-1">
            {/* Fullname */}
            <InputField
              label="ονοματεπωνυμο"
              name="fullname"
              placeholder="π.χ. Ιωάννης Παπαδόπουλος"
              required={true}
              error={errors.fullname}
              onChange={(e) => validateField("fullname", e.target.value)}
              onBlur={(e) => validateField("fullname", e.target.value)}
            />
          </div>
          <div className="flex-1">
            {/* Email */}
            <InputField
              label="email"
              name="email"
              type="email"
              placeholder="π.χ. ioannis.papadopoulos@gmail.com"
              required={true}
              error={errors.email}
              onChange={(e) => validateField("email", e.target.value)}
              onBlur={(e) => validateField("email", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-6 md:gap-4">
          <div className="flex-1">
            {/* Route */}
            <InputField
              label="απο - προς"
              name="route"
              placeholder="π.χ. Αθήνα - Πάτρα"
              required={true}
              error={errors.route}
              onChange={(e) => validateField("route", e.target.value)}
              onBlur={(e) => validateField("route", e.target.value)}
            />
          </div>
          <div className="flex-1">
            {/* Phone */}
            <InputField
              label="τηλεφωνο"
              name="phone"
              placeholder="Για να εποικινωνήσουμε μαζί σας"
              error={errors.phone}
              onChange={(e) => validateField("phone", e.target.value)}
              onBlur={(e) => validateField("phone", e.target.value)}
            />
          </div>
        </div>

        {/* Transportation type */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="transportation-type"
            className="text-sm uppercase md:text-base"
          >
            <span className="text-red-500">*</span> τυπος μεταφορας
          </label>

          <select
            name="transportationType"
            id="transportation-type"
            defaultValue=""
            onChange={(e) =>
              validateField("transportationType", e.target.value)
            }
            onBlur={(e) => validateField("transportationType", e.target.value)}
            className={`border text-sm px-3 py-2.5 placeholder:text-body focus:ring-2 focus:outline-none ${
              errors.transportationType
                ? "border-red-500 focus:ring-red-500"
                : "border-ruler focus:border-primary-300 focus:ring-primary-300"
            }`}
          >
            <option value="" disabled>
              Eπιλέξτε τον τύπο μεταφοράς
            </option>

            {TRANSPORT_TYPES.map((type) => (
              <option value={type.value} key={type.value}>
                {type.option}
              </option>
            ))}
          </select>

          {errors.transportationType && (
            <p className="text-xs text-red-500">{errors.transportationType}</p>
          )}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="description"
            className="text-sm uppercase md:text-base"
          >
            <span className="text-red-500">*</span> λεπτομεριες φορτιου
          </label>

          <textarea
            name="description"
            rows={5}
            id="description"
            placeholder="Περιγράψτε το φορτίο, διαστάσεις, βάρος..."
            onChange={(e) => validateField("description", e.target.value)}
            onBlur={(e) => validateField("description", e.target.value)}
            className={`border resize-none text-sm px-3 py-2.5 placeholder:text-body focus:ring-2 focus:outline-none focus:bg-white/20 ${
              errors.description
                ? "border-red-500 focus:ring-red-500"
                : "border-ruler focus:border-primary-300 focus:ring-primary-300"
            }`}
          />

          {errors.description && (
            <p className="text-xs text-red-500">{errors.description}</p>
          )}
        </div>

        {/* Submit button */}
        <button
          disabled={status === "loading"}
          type="submit"
          className="w-full px-2 py-4 font-medium text-white uppercase transition-colors shadow-sm drop-shadow-md hover:bg-foreground bg-foreground/90 hover:cursor-pointer"
        >
          {status === "loading" ? "αποστολή..." : "ζητηστε προσφορα"}
        </button>

        <p className="text-xs text-foreground/40 text-center">
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy" className="underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </form>
    </>
  );
}
