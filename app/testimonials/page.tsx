import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { VideoTestimonialPanel } from "@/components/video-testimonial-panel";
import { clients, featuredTestimonialVideo } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Client feedback, project notes, and outcomes from businesses NovaLeads has supported.",
};

export default function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Testimonials"
      title="Proof from the work."
      intro="A dedicated place for client feedback, project notes, and outcomes from businesses NovaLeads has supported."
    >
      <section className="container pb-8">
        <VideoTestimonialPanel video={featuredTestimonialVideo} />
      </section>

      <section className="container pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {clients.map((client) => (
            <article key={client.name} className="nova-card rounded-[2rem] p-7">
              <div className="flex min-h-64 items-center justify-center rounded-[1.5rem] bg-white p-7">
                <Image
                  src={client.image}
                  alt={`${client.name} logo`}
                  width={640}
                  height={420}
                  className="max-h-52 w-full object-contain"
                />
              </div>
              <p className="mt-7 font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/44">
                {client.name}
              </p>
              <h2 className="mt-3 font-sentient text-5xl italic tracking-[-0.08em] text-primary">
                {client.work}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#061327]/66">
                {client.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
