import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactSchema } from "@/app/lib/validation/contact-form-data";
import { TRANSPORT_TYPES } from "@/data/transport-types";

import ContactNotification from "@/components/emails/ContactNotification";
import ContactConfirmation from "@/components/emails/ContactConfirmation";

const resend = new Resend(process.env.RESEND_API_KEY);
const receivers = process.env.CONTACT_FORM_RECEIVERS?.split(",") || [
  "info@grigorakis-logistics.gr",
];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success)
      return NextResponse.json({ message: "Invalid Input" }, { status: 400 });

    const data = result.data;

    const transportLabel =
      TRANSPORT_TYPES.find((t) => t.value === data.transportationType)
        ?.option ?? data.transportationType;

    const { data: emailData, error } = await resend.emails.send({
      from: "Contact <contact@grigorakis-logistics.gr>",
      to: receivers,
      replyTo: data.email,
      subject: "Νέο αίτημα επικοινωνίας",
      react: ContactNotification({ data, transportLabel }),
    });

    if (error) {
      return NextResponse.json({ message: error }, { status: 400 });
    }

    const { error: confirmError } = await resend.emails.send({
      from: "Γρηγοράκης Logistics <contact@grigorakis-logistics.gr>",
      to: data.email,
      subject: "Λάβαμε το αίτημα σας",
      react: ContactConfirmation({
        fullname: data.fullname,
        transportationType: transportLabel,
        route: data.route,
      }),
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
