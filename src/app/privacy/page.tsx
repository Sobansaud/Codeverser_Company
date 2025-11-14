import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CodeVerser",
  description: "Learn how CodeVerser collects, uses, and protects your personal information. Read our comprehensive privacy policy.",
};

export default function PrivacyPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Introduction</h2>
          <p className="text-muted-foreground mb-6">
            CodeVerser ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p className="text-muted-foreground mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company information</li>
            <li>Project details and requirements</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates and marketing communications (with your consent)</li>
            <li>Protect against fraudulent or illegal activity</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="text-muted-foreground mb-6">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies and Tracking</h2>
          <p className="text-muted-foreground mb-6">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p className="text-muted-foreground mb-6">
            We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="text-muted-foreground mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none space-y-2 text-muted-foreground mb-6">
            <li>Email: codeverse627@gmail.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Tech Street, San Francisco, CA 94105</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
