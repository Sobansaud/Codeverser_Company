import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch | CodeVerser",
  description: "Contact CodeVerser for AI solutions, custom SaaS development, and software consulting. Get a response within 24 hours. Call +1 (555) 123-4567 or email us.",
  openGraph: {
    title: "Contact Us - Get in Touch | CodeVerser",
    description: "Contact CodeVerser for AI solutions, custom SaaS development, and software consulting.",
    type: "website",
    url: "https://codeverser.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
