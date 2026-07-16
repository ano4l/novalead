import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "NovaLeads Business Enterprise (Pty) Ltd is committed to protecting your personal information in line with POPIA.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="Last updated: 15 July 2026"
    >
      <section className="container pb-20">
        <article className="nova-card rounded-[2rem] p-7 md:p-10 max-w-4xl mx-auto">
          <p className="text-lg leading-8 text-[#061327]/80 font-medium mb-8">
            NovaLeads Business Enterprise (Pty) Ltd (“NovaLeads”, “we”, “us”, “our”) is committed to protecting your personal information. This policy explains what information we collect, how we use it, and your rights, in line with the Protection of Personal Information Act, 2013 (POPIA).
          </p>

          <div className="space-y-10 text-[#061327]/76 leading-8">
            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">01</span>Who we are
              </h2>
              <p>
                NovaLeads Business Enterprise (Pty) Ltd is a company registered in South Africa (registration number 2026/116254/07), providing done-for-you websites and business automation services. We act as the responsible party for the personal information described in this policy. You can reach us at <a href="mailto:support@novaleadsystems.com" className="text-primary hover:underline font-medium">support@novaleadsystems.com</a> or <a href="mailto:crisnovaleads@gmail.com" className="text-primary hover:underline font-medium">crisnovaleads@gmail.com</a>.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">02</span>Information we collect
              </h2>
              <p className="mb-4">Depending on how you interact with us, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Contact and account information</strong> — name, business name, email address, phone number, and details you provide when enquiring, signing up, or communicating with us.
                </li>
                <li>
                  <strong>Business content</strong> — information, images, and materials you provide so we can build and run your website or systems.
                </li>
                <li>
                  <strong>Billing information</strong> — details needed to process your subscription. Card and payment details are handled directly by our payment providers; we do not store full card numbers.
                </li>
                <li>
                  <strong>Usage and technical information</strong> — basic information about how you use our website and services, such as pages visited and device or browser information, collected through cookies and similar technologies.
                </li>
                <li>
                  <strong>Information processed on your behalf</strong> — where our services (such as Auris or Bizstack) handle enquiries or bookings from your own customers, we process that information on your behalf as an operator.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">03</span>How we use your information
              </h2>
              <p className="mb-4">We use personal information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, deliver, and maintain our products and services;</li>
                <li>Set up and manage your account and subscription;</li>
                <li>Process payments and send billing communications;</li>
                <li>Respond to enquiries and provide support;</li>
                <li>Improve our services and website;</li>
                <li>Send service-related or, where you have agreed, marketing communications; and</li>
                <li>Comply with our legal and regulatory obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">04</span>Lawful basis
              </h2>
              <p>
                We process personal information where it is necessary to provide our services to you, to comply with the law, to pursue our legitimate business interests in a way that does not override your rights, or on the basis of your consent where required.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">05</span>Sharing your information
              </h2>
              <p>
                We do not sell your personal information. We share it only with trusted third parties who help us operate, including hosting and infrastructure providers, payment processors, and communication and automation platforms. These parties are required to protect your information and use it only for the purposes we specify. We may also disclose information where required by law or to protect our legal rights.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">06</span>Where your information is processed
              </h2>
              <p>
                Some of our service providers may process information outside South Africa. Where this happens, we take reasonable steps to ensure your information is protected in line with POPIA’s requirements for cross-border transfers.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">07</span>How long we keep it
              </h2>
              <p>
                We keep personal information only for as long as necessary to provide our services, meet our legal and accounting obligations, and resolve disputes. When information is no longer needed, we delete or de-identify it.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">08</span>How we protect your information
              </h2>
              <p>
                We take reasonable technical and organisational measures to protect personal information against loss, unauthorised access, and misuse. No system is completely secure, but we work to safeguard the information entrusted to us.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">09</span>Your rights
              </h2>
              <p className="mb-4">Under POPIA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ask what personal information we hold about you and request access to it;</li>
                <li>Request correction or deletion of your personal information;</li>
                <li>Object to processing in certain circumstances;</li>
                <li>Withdraw consent where processing is based on consent; and</li>
                <li>Lodge a complaint with the Information Regulator.</li>
              </ul>
              <p className="mt-4">To exercise any of these rights, contact us using the details below.</p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">10</span>Cookies
              </h2>
              <p>
                Our website uses cookies and similar technologies to make the site work, remember your preferences, and understand how it is used. You can control cookies through your browser settings; disabling some cookies may affect how the site functions.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">11</span>Changes to this policy
              </h2>
              <p>
                We may update this policy from time to time. The “last updated” date at the top shows when it was last revised. Where changes are material, we will take reasonable steps to notify you.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">12</span>Complaints
              </h2>
              <p>
                If you have a concern about how we handle your personal information, please contact us first so we can address it. You also have the right to complain to the Information Regulator of South Africa (<a href="mailto:inforeg@justice.gov.za" className="text-primary hover:underline font-medium">inforeg@justice.gov.za</a>).
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
