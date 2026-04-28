import { z } from "zod";

export const ContactSchema = z.object({
  fullname: z
    .string()
    .min(5, "Το όνομα πρέπει να έχει τουλάχιστον 5 χαρακτήρες"),
  email: z.string().email("Μη έγκυρη διεύθυνση email"),
  phone: z
    .string()
    .regex(/^\d+$/, "Το τηλέφωνο πρέπει να περιέχει μόνο αριθμούς")
    .min(10, "Το τηλέφωνο πρέπει να έχει τουλάχιστον 10 ψηφία")
    .optional()
    .or(z.literal("")),
  transportationType: z.string().min(1, "Επιλέξτε τύπο μεταφοράς"),
  route: z.string().min(3, "Συμπληρώστε διαδρομή"),
  description: z
    .string()
    .min(10, "Περιγράψτε το φορτίο (τουλάχιστον 10 χαρακτήρες)"),
  recaptchaToken: z.string().min(1, "reCAPTCHA απαιτείται"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;
