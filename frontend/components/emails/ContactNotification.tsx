import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Row,
  Column,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

import { ContactNotificationProps } from "@/app/types/contact-notification-props";

export default function ContactNotification({
  data,
  transportLabel,
}: ContactNotificationProps) {
  return (
    <Html lang="el">
      <Head />
      <Preview>Νέο αίτημα από {data.fullname}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#d94a1f",
                foreground: "#0d0d0f",
                background: "#f2ede4",
              },
            },
          },
        }}
      >
        <Body className="p-8 m-0 bg-background">
          <Container className="max-w-xl mx-auto bg-white">
            {/* Header */}
            <Section className="px-10 text-center bg-foreground py-7">
              {/* <Img src="https://grigorakis-logistics.gr/logo.png" width="160" alt="Γρηγοράκης Logistics" /> */}
              <Text className="m-0 text-xl font-bold tracking-widest text-white">
                ΓΡΗΓΟΡΑΚΗΣ
              </Text>
              <Text className="text-primary text-xs tracking-widest m-0 mt-0.5">
                LOGISTICS
              </Text>
            </Section>

            {/* Accent bar */}
            <Section className="bg-primary h-0.5 m-0" />

            {/* Body */}
            <Section className="px-10 pt-10 pb-6">
              <Heading className="m-0 mb-2 text-xl font-bold text-foreground">
                Νέο αίτημα επικοινωνίας
              </Heading>
              <Text className="m-0 mb-6 text-xs tracking-widest text-gray-400 uppercase">
                Υποβλήθηκε μέσω της φόρμας επικοινωνίας
              </Text>

              {/* Contact details */}
              <Section className="px-6 py-5 mb-6 bg-background">
                <Text className="m-0 mb-3 text-xs tracking-widest text-gray-400 uppercase">
                  Στοιχεία επικοινωνίας
                </Text>

                <Hr className="my-2 border-gray-200" />
                <Row>
                  <Column className="w-2/5 text-xs text-gray-400">
                    Ονοματεπώνυμο
                  </Column>
                  <Column className="text-xs font-semibold text-foreground">
                    {data.fullname}
                  </Column>
                </Row>

                <Hr className="my-2 border-gray-200" />
                <Row>
                  <Column className="w-2/5 text-xs text-gray-400">Email</Column>
                  <Column className="text-xs font-semibold">
                    <a
                      href={`mailto:${data.email}`}
                      className="no-underline text-primary"
                    >
                      {data.email}
                    </a>
                  </Column>
                </Row>

                <Hr className="my-2 border-gray-200" />
                <Row>
                  <Column className="w-2/5 text-xs text-gray-400">
                    Τηλέφωνο
                  </Column>
                  <Column className="text-xs font-semibold text-foreground">
                    {data.phone || "—"}
                  </Column>
                </Row>
              </Section>

              {/* Shipment details */}
              <Section className="px-6 py-5 mb-6 bg-background">
                <Text className="m-0 mb-3 text-xs tracking-widest text-gray-400 uppercase">
                  Στοιχεία μεταφοράς
                </Text>

                <Hr className="my-2 border-gray-200" />
                <Row>
                  <Column className="w-2/5 text-xs text-gray-400">
                    Τύπος μεταφοράς
                  </Column>
                  <Column className="text-xs font-semibold text-foreground">
                    {transportLabel}
                  </Column>
                </Row>

                <Hr className="my-2 border-gray-200" />
                <Row>
                  <Column className="w-2/5 text-xs text-gray-400">
                    Διαδρομή
                  </Column>
                  <Column className="text-xs font-semibold text-foreground">
                    {data.route}
                  </Column>
                </Row>
              </Section>

              {/* Description */}
              <Section className="px-6 py-5 bg-background">
                <Text className="m-0 mb-3 text-xs tracking-widest text-gray-400 uppercase">
                  Λεπτομέρειες φορτίου
                </Text>
                <Hr className="my-2 border-gray-200" />
                <Text className="m-0 mt-2 text-xs leading-6 text-foreground">
                  {data.description}
                </Text>
              </Section>
            </Section>

            {/* Footer */}
            <Hr className="mx-10 my-0 border-gray-100" />
            <Section className="px-10 py-6 text-center">
              <Text className="m-0 mb-1 text-xs font-bold tracking-widest text-foreground">
                ΓΡΗΓΟΡΑΚΗΣ LOGISTICS
              </Text>
              <Text className="m-0 text-xs text-gray-400">
                Αυτό το email δημιουργήθηκε αυτόματα από τη φόρμα επικοινωνίας.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
