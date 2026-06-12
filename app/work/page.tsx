import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { clients } from "@/lib/site-content";

export default function WorkPage() {
  return (
    <PageShell
      eyebrow="People worked with"
      title="Brands moving into what is next."
      intro="A focused view of the businesses NovaLeads has supported and the kind of work delivered."
    >
      <section className="container pb-20">
        <div className="grid gap-5 md:grid-cols-2">
          {clients.map((client) => (
            <article key={client.name} className="nova-card rounded-[2rem] p-6">
              <div className="flex min-h-80 items-center justify-center rounded-[1.5rem] bg-white p-8">
                <Image
                  src={client.image}
                  alt={`${client.name} logo`}
                  width={640}
                  height={420}
                  className="max-h-64 w-full object-contain"
                />
              </div>
              <div className="mt-6">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
                  {client.name}
                </p>
                <h2 className="mt-3 font-sentient text-5xl italic tracking-[-0.08em] text-primary">
                  {client.work}
                </h2>
                <p className="mt-4 text-base leading-7 text-[#061327]/62">
                  {client.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
