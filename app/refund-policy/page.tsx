import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "NovaLeads Business Enterprise (Pty) Ltd refund and cancellation terms across SiteRent, Auris, and Bizstack subscriptions.",
};

export default function RefundPolicyPage() {
  return (
    <PageShell
      eyebrow="Refunds"
      title="Refund &amp; Cancellation Policy"
      intro="Last updated: 15 July 2026"
    >
      <section className="container pb-20">
        <article className="nova-card rounded-[2rem] p-7 md:p-10 max-w-4xl mx-auto">
          <p className="text-lg leading-8 text-[#061327]/80 font-medium mb-8">
            NovaLeads Business Enterprise (Pty) Ltd (“NovaLeads”, “we”, “us”, “our”) operates the SiteRent, Auris, and Bizstack products. This policy explains how cancellations and refunds work across all of our subscriptions and services.
          </p>

          <div className="space-y-10 text-[#061327]/76 leading-8">
            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">01</span>Subscriptions and billing
              </h2>
              <p>
                Our products are provided as recurring monthly subscriptions billed in South African Rand (ZAR). You are charged at the start of each billing cycle for the month ahead. By subscribing, you authorise us to collect the recurring fee through our payment provider until you cancel.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">02</span>Cancellation
              </h2>
              <p className="mb-4">
                You may cancel your subscription at any time. To cancel, contact us at <a href="mailto:support@novaleadsystems.com" className="text-primary hover:underline font-medium">support@novaleadsystems.com</a> or <a href="mailto:crisnovaleads@gmail.com" className="text-primary hover:underline font-medium">crisnovaleads@gmail.com</a> or use the cancellation option in your account. When you cancel:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your service remains active until the end of your current paid billing cycle.</li>
                <li>Your subscription will not renew for the following cycle, and you will not be charged again.</li>
                <li>There is no cancellation fee and no fixed-term contract.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">03</span>Refunds
              </h2>
              <p>
                Because our services are delivered on a monthly basis and work is performed during each cycle, fees already paid for the current or past billing cycles are non-refundable, except where required by South African law (including the Consumer Protection Act, 2008) or as set out below. We do not provide pro-rata refunds for unused days in a cycle after cancellation.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">04</span>Accidental renewal (goodwill exception)
              </h2>
              <p>
                If you intended to cancel but were charged for a renewal in error, contact us within <strong>72 hours</strong> of the charge and we will refund that renewal in full, provided no new work has been delivered for that cycle.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">05</span>Setup and implementation fees
              </h2>
              <p>
                Where a product includes a once-off implementation, build, or setup fee (such as Bizstack), that fee covers build and onboarding work carried out for your business. Once implementation work has begun, the setup fee is non-refundable. Any recurring retainer that follows is governed by sections 2–4 above. The specific setup fee and monthly retainer for custom builds are agreed with you in writing before work begins.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">06</span>Plan changes
              </h2>
              <p>
                You may upgrade or downgrade your plan. Upgrades take effect immediately, with any price difference applied to your next billing cycle. Downgrades take effect from the start of your next billing cycle.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">07</span>Failed payments
              </h2>
              <p>
                If a recurring payment fails, we may retry the charge and will notify you. Access to the service may be suspended until payment is successfully collected.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">08</span>Non-refundable third-party charges
              </h2>
              <p>
                Bank charges, international transaction fees, or payment-processing fees applied by third parties are not refundable by us.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">09</span>How refunds are processed
              </h2>
              <p>
                Approved refunds are returned to your original payment method where possible. Once processed, refunds may take up to 10 business days to reflect, depending on your bank.
              </p>
            </div>

            <div>
              <h2 className="font-sentient text-2xl text-[#061327] tracking-[-0.04em] mb-4 flex items-center">
                <span className="text-primary font-mono text-lg mr-3">10</span>Your statutory rights
              </h2>
              <p>
                Nothing in this policy limits or excludes any rights you have under the South African Consumer Protection Act, 2008, or other applicable law.
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
