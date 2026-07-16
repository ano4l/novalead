import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "NovaLeads Business Enterprise (Pty) Ltd terms governing your use of our products and services including SiteRent, Auris, and Bizstack.",
};

export default function TermsOfServicePage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms of Service"
      intro="Last updated: 15 July 2026"
    >
      <section className="container pb-20">
        <article className="nova-card rounded-[2rem] p-7 md:p-10 max-w-4xl mx-auto">
          <p className="text-lg leading-8 text-[#061327]/80 font-medium mb-8">
            These Terms of Service (“Terms”) govern your use of the products and services provided by NovaLeads Business Enterprise (Pty) Ltd (“NovaLeads”, “we”, “us”, “our”), including SiteRent, Auris, and Bizstack. By subscribing to or using our services, you agree to these Terms.
          </p>

          <div className="space-y-10 text-[#061327]/76 leading-8">
            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">01</span>Who we are
              </h2>
              <p>
                NovaLeads Business Enterprise (Pty) Ltd is a company registered in South Africa (registration number 2026/116254/07), providing done-for-you websites and business automation services to small and medium businesses. You can reach us at <a href="mailto:support@novaleadsystems.com" className="text-primary hover:underline font-medium">support@novaleadsystems.com</a> or <a href="mailto:crisnovaleads@gmail.com" className="text-primary hover:underline font-medium">crisnovaleads@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">02</span>Our services
              </h2>
              <p className="mb-4">We provide the following products, each subject to its own scope and pricing:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>SiteRent</strong> — a Website-as-a-Service product providing a professionally built, hosted, and maintained website on a recurring monthly subscription.
                </li>
                <li>
                  <strong>Auris</strong> — an AI receptionist service that answers and handles calls on your behalf, provided on a recurring monthly subscription.
                </li>
                <li>
                  <strong>Bizstack</strong> — a custom business automation package (which may include WhatsApp automation, point-of-sale, and lead capture), scoped and priced per business, typically comprising a once-off implementation fee and a monthly retainer.
                </li>
              </ul>
              <p className="mt-4">
                The exact features, scope, and price applicable to you are those presented at sign-up or agreed with you in writing.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">03</span>Subscriptions, billing, and payment
              </h2>
              <p>
                Our subscriptions are billed monthly in South African Rand (ZAR) and charged at the start of each billing cycle. Payments are processed by our third-party payment providers. You authorise us to collect the recurring fee for your chosen product until you cancel. You are responsible for keeping your payment details current.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">04</span>Cancellation and refunds
              </h2>
              <p>
                You may cancel at any time, and refunds are handled in accordance with our{" "}
                <Link href="/refund-policy" className="text-primary hover:underline font-medium">
                  Refund &amp; Cancellation Policy
                </Link>
                , which forms part of these Terms.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">05</span>Your responsibilities
              </h2>
              <p>
                To deliver our services, we rely on information and materials you provide (such as business details, images, and content). You confirm that you have the right to use and share anything you provide to us, and that it is accurate and lawful. You agree not to use our services for any unlawful, fraudulent, or abusive purpose.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">06</span>Delivery and availability
              </h2>
              <p>
                We aim to deliver and maintain our services reliably, including our stated turnaround times where applicable. While we work to keep services available at all times, we do not guarantee uninterrupted or error-free operation, and we may carry out maintenance or updates from time to time.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">07</span>Intellectual property
              </h2>
              <p>
                We retain ownership of our platforms, systems, templates, and underlying technology. Content and materials you supply remain yours. While your subscription is active, you are granted the right to use the website, systems, and services we provide to you.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">08</span>Data protection
              </h2>
              <p>
                We process personal information in accordance with the Protection of Personal Information Act, 2013 (POPIA), and our{" "}
                <Link href="/privacy-policy" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </Link>
                . You are responsible for ensuring that any personal information you pass to us for processing has been collected lawfully.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">09</span>Limitation of liability
              </h2>
              <p>
                To the fullest extent permitted by law, NovaLeads is not liable for any indirect, incidental, or consequential loss arising from your use of our services. Nothing in these Terms excludes any liability that cannot be excluded under South African law, including under the Consumer Protection Act, 2008.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">10</span>Suspension and termination
              </h2>
              <p>
                We may suspend or terminate services for non-payment, breach of these Terms, or unlawful use. You may end your use of our services by cancelling in line with our Refund &amp; Cancellation Policy.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">11</span>Changes to these Terms
              </h2>
              <p>
                We may update these Terms from time to time. Where changes are material, we will take reasonable steps to notify you. Continued use of our services after changes take effect constitutes acceptance of the updated Terms.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">12</span>Governing law
              </h2>
              <p>
                These Terms are governed by the laws of the Republic of South Africa, and any disputes are subject to the jurisdiction of the South African courts.
              </p>
            </div>
          </div>

          <div className="contact mt-12 p-6 rounded-2xl border border-[#061327]/10 bg-slate-50/60 text-sm space-y-2 text-[#061327]/80">
            <p className="font-sentient text-base text-[#061327] tracking-[-0.02em] mb-2 font-semibold">NovaLeads Business Enterprise (Pty) Ltd</p>
            <p><strong>Email:</strong> support@novaleadsystems.com or crisnovaleads@gmail.com</p>
            <p><strong>Registration number:</strong> 2026/116254/07</p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://novaleadsystems.com" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                novaleadsystems.com
              </a>
            </p>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
