import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CodeVerser",
  description: "Read CodeVerser's terms of service. Learn about the terms and conditions for using our software development services.",
};

export default function TermsPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8">
          Terms of Service
        </h1>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-muted-foreground mb-6">
            By accessing or using CodeVerser's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Use License</h2>
          <p className="text-muted-foreground mb-4">
            Permission is granted to temporarily access the materials on CodeVerser's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or proprietary notations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Services</h2>
          <p className="text-muted-foreground mb-6">
            CodeVerser provides software development, AI integration, and consulting services. All services are provided "as is" and we reserve the right to modify or discontinue services at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Project Agreements</h2>
          <p className="text-muted-foreground mb-6">
            Specific project terms, deliverables, timelines, and pricing will be outlined in separate project agreements or statements of work. These project-specific agreements supplement and do not replace these Terms of Service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">
            Unless otherwise specified in a project agreement, all intellectual property rights in deliverables created by CodeVerser shall transfer to the client upon full payment. CodeVerser retains the right to use generic methodologies, techniques, and knowledge gained during projects.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Payment Terms</h2>
          <p className="text-muted-foreground mb-4">
            Payment terms will be specified in project agreements. Generally:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Invoices are due within 30 days of issuance</li>
            <li>Late payments may incur interest charges</li>
            <li>We reserve the right to suspend services for non-payment</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Confidentiality</h2>
          <p className="text-muted-foreground mb-6">
            Both parties agree to keep confidential information disclosed during the course of engagement strictly confidential and use it only for the purposes of the project.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">
            In no event shall CodeVerser or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if we have been notified of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Indemnification</h2>
          <p className="text-muted-foreground mb-6">
            You agree to indemnify and hold CodeVerser harmless from any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of our services or violation of these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
          <p className="text-muted-foreground mb-6">
            Either party may terminate the service relationship at any time with written notice. Upon termination, you must cease all use of our services and destroy any materials obtained from our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
          <p className="text-muted-foreground mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
          <p className="text-muted-foreground mb-6">
            CodeVerser reserves the right to revise these Terms of Service at any time. By continuing to use our services after changes are posted, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
          <p className="text-muted-foreground mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <ul className="list-none space-y-2 text-muted-foreground mb-6">
            <li>Email: codeverse627@gmail.com</li>
            <li>Phone: +92 329 9274846</li>
            <li>Address: Karachi, Pakistan</li>
            <li>Working Hours: Open 24/7 - Every Day</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
