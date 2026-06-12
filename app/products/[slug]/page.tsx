import { notFound } from "next/navigation";
import Image from "next/image";
import { PageShell } from "@/components/page-shell";
import { getNovaProduct, novaProducts } from "@/lib/site-content";

export function generateStaticParams() {
  return novaProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getNovaProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <PageShell
      eyebrow="Powered by Nova"
      title={product.name}
      intro={product.short}
    >
      <section className="container pb-20">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="nova-card rounded-[2rem] p-7 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
              Product layer
            </p>
            <h2 className="mt-5 font-sentient text-4xl tracking-[-0.07em] md:text-5xl">
              What it does
            </h2>
            <p className="mt-6 max-w-[64ch] text-lg leading-9 text-[#061327]/68">
              {product.body}
            </p>
          </article>

          <aside className="nova-card rounded-[2rem] p-7 md:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
              Product features
            </p>
            <div className="mt-6 grid gap-3">
              {product.features.map((item) => (
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

        <div className="nova-card mt-5 overflow-hidden rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[1.5rem] border border-[#061327]/10 bg-white p-5">
              <Image
                src="/poweredbynova.jpeg"
                alt="Powered by Nova product logos"
                width={720}
                height={360}
                className="mx-auto max-h-56 w-full object-contain"
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/46">
                Growth path
              </p>
              <h3 className="mt-5 max-w-[13ch] font-sentient text-4xl leading-[0.98] tracking-[-0.07em] md:text-5xl">
                Built to plug into the Nova growth system.
              </h3>
              <p className="mt-5 max-w-[56ch] text-base leading-8 text-[#061327]/62">
                The product sits beside the wider NovaLeads work: lead
                generation, web and software development, AI receptionist
                services, branding, strategy, and automation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
