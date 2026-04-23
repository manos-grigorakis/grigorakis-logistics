import { Resend } from "resend";

import { EmailTemplate } from "@/components/contact-email-template";
import { NextResponse } from "next/server";
import { ContactSchema } from "@/app/lib/validation/contact-form-data";

const resend = new Resend(process.env.RESEND_API_KEY);
const receivers = process.env.CONTACT_FORM_RECEIVERS?.split(",") || [
  "info@grigorakis-logistics.gr",
];

// TODO: Replace emails with templates
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success)
      return NextResponse.json({ message: "Invalid Input" }, { status: 400 });

    const data = result.data;

    const { data: emailData, error } = await resend.emails.send({
      from: "Contact <contact@grigorakis-logistics.gr>",
      to: receivers,
      replyTo: data.email,
      subject: "Νέο αίτημα επικοινωνίας",
      html: `
        <p><strong>Όνομα:</strong> ${data.fullname}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Τηλέφωνο:</strong> ${data.phone}</p>
        <p><strong>Μεταφορά:</strong> ${data.transportationType}</p>
        <p><strong>Διαδρομή:</strong> ${data.route}</p>
        <p><strong>Μήνυμα:</strong></p>
        <p>${data.description}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const { error: confirmError } = await resend.emails.send({
      from: "Γρηγοράκης Logistics <contact@grigorakis-logistics.gr>",
      to: data.email,
      subject: "Λάβαμε το αίτημα σας",
      html: `<p>${data.fullname}</p>`,
    });

    if (confirmError) console.error("Confirmation email failed:", confirmError);

    return NextResponse.json({ message: emailData }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
