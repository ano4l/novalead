import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { getService, services } from "@/lib/site-content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <PageShell
      eyebrow={service.eyebrow}
      title={service.title}
      intro={service.short}
    >
      <section className="container pb-20">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="nova-card rounded-[2rem] p-7 md:p-10">
            <h2 className="font-sentient text-4xl tracking-[-0.07em] md:text-5xl">
              What this means
            </h2>
            <p className="mt-6 max-w-[64ch] text-lg leading-9 text-[#061327]/68">
              {service.body}
            </p>
          </article>
          <aside className="nova-card rounded-[2rem] p-7 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
              Outcomes
            </p>
            <div className="mt-6 grid gap-3">
              {service.outcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#061327]/12 bg-white/70 px-5 py-4 text-lg text-[#061327]/78"
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
