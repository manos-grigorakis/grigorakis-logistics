import { ContactConfirmationProps } from "@/app/types/contact-confirmation-props";
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
  Img,
} from "@react-email/components";

export default function ContactConfirmation({
  fullname,
  transportationType,
  route,
}: ContactConfirmationProps) {
  return (
    <Html lang="el">
      <Head />
      <Preview>Λάβαμε το αίτημα σας — Γρηγοράκης Logistics</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                primary: "#125aa2",
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
            <Section className="px-10 text-center bg-white py-7">
              {/* Logo */}
              <Img
                src="https://grigorakis-logistics.gr/logo.png"
                width="160"
                alt="Γρηγοράκης Logistics"
                className="mx-auto mb-4"
              />
              <Text className="m-0 text-xl font-bold tracking-widest text-foreground">
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
              <Heading className="m-0 mb-6 text-xl font-bold text-foreground">
                Λάβαμε το αίτημα σας
              </Heading>

              <Text className="m-0 mb-4 text-sm leading-7 text-gray-600">
                Αγαπητέ/ή {fullname},
              </Text>

              <Text className="m-0 mb-4 text-sm leading-7 text-gray-600">
                Σας ευχαριστούμε για το ενδιαφέρον σας. Το αίτημα σας ελήφθη
                επιτυχώς και η ομάδα μας θα επικοινωνήσει μαζί σας εντός{" "}
                <strong>1 εργάσιμης ημέρας</strong> με αναλυτική προσφορά.
              </Text>

              {/* Summary box */}
              <Section className="px-6 py-5 my-6 bg-background">
                <Text className="m-0 mb-3 text-xs tracking-widest text-gray-400 uppercase">
                  Συνοψη αιτηματος
                </Text>
                <Hr className="my-2 border-gray-200" />
                <Row>
                  <Column className="w-1/2 text-xs text-gray-400">
                    Τύπος μεταφοράς
                  </Column>
                  <Column className="text-xs font-semibold text-foreground">
                    {transportationType}
                  </Column>
                </Row>
                <Hr className="my-2 border-gray-200" />
                <Row>
                  <Column className="w-1/2 text-xs text-gray-400">
                    Διαδρομή
                  </Column>
                  <Column className="text-xs font-semibold text-foreground">
                    {route}
                  </Column>
                </Row>
              </Section>

              <Text className="m-0 text-sm leading-7 text-gray-600">
                Για οποιαδήποτε άμεση ανάγκη, μπορείτε να επικοινωνήσετε μαζί
                μας στο{" "}
                <a
                  href="mailto:contact@grigorakis-logistics.gr"
                  className="no-underline text-primary"
                >
                  contact@grigorakis-logistics.gr
                </a>
                .
              </Text>
            </Section>

            {/* Footer */}
            <Hr className="mx-10 my-0 border-gray-100" />
            <Section className="px-10 py-6 text-center">
              <Text className="m-0 mb-1 text-xs font-bold tracking-widest text-foreground">
                ΓΡΗΓΟΡΑΚΗΣ LOGISTICS
              </Text>
              <Text className="m-0 mb-1 text-xs text-gray-400">
                Ασπρόπυργος, Θέση Κουταλά 19300 &nbsp;·&nbsp; ΔΕΥ–ΠΑΡ
                08:00–20:00
              </Text>
              <Text className="m-0 text-xs text-gray-400">
                contact@grigorakis-logistics.gr
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
