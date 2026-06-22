import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FluidCTA } from "@/components/fluid-cta";
import { Pill } from "@/components/pill";
import { novaProducts } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Powered by Nova product systems including SiteRent, BizStack, and Auris.",
};

const productSystem = [
  {
    step: "01",
    title: "Package the need",
    body: "Turn a recurring business problem into a focused product offer.",
  },
  {
    step: "02",
    title: "Build the layer",
    body: "Create the website, ERP, AI editing, POS, or workflow layer around it.",
  },
  {
    step: "03",
    title: "Keep improving",
    body: "Use feedback, usage, and growth goals to make the product sharper.",
  },
] as const;

const productFit = [
  "Lead capture",
  "Website rental",
  "AI editing",
  "Inventory flow",
  "Sales visibility",
  "Optional POS",
] as const;

export default function ProductsPage() {
  return (
    <main className="relative z-10 min-h-svh bg-white pt-36 text-[#061327]">
      <section className="container grid gap-12 pb-20 pt-12 md:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
        <div>
          <Pill>Powered by Nova</Pill>
          <h1 className="mt-7 max-w-[10ch] font-sentient text-6xl leading-[0.9] tracking-[-0.08em] md:text-8xl lg:text-[8rem]">
            Product systems for growth.
          </h1>
          <p className="mt-7 max-w-[620px] text-lg leading-8 text-[#061327]/64">
            Powered by Nova is the product layer behind NovaLeads: products we
            build, operate, and improve for businesses that need practical
            growth infrastructure.
          </p>
        </div>

        <div className="nova-card powered-nova-orbit relative overflow-hidden rounded-[2rem] p-5 md:p-7">
          <div className="relative z-10 rounded-[1.5rem] border border-[#061327]/10 bg-white p-6">
            <Image
              src="/poweredbynova.jpeg"
              alt="Powered by Nova products: SiteRent and BizStack"
              width={860}
              height={430}
              priority
              className="mx-auto max-h-72 w-full object-contain"
            />
          </div>
          <div className="relative z-10 mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {productFit.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#061327]/10 bg-white/78 px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#061327]/64"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#061327]/10 bg-white/86 py-20 backdrop-blur-md md:py-28">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <Pill>Nova products</Pill>
              <h2 className="mt-6 max-w-[11ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] md:text-7xl">
                Built to rent, run, and scale.
              </h2>
            </div>
            <p className="max-w-[460px] text-base leading-8 text-[#061327]/62">
              Each product is designed to remove one growth bottleneck without
              forcing the business into a heavy custom build from day one.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {novaProducts.map((product, index) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="product-story-card nova-card group min-h-[520px] rounded-[2rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/45 md:p-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#061327]/42">
                    0{index + 1} / {product.eyebrow}
                  </p>
                  <span className="rounded-full border border-[#0057B8]/25 bg-[#0057B8]/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-[#0057B8]">
                    Live layer
                  </span>
                </div>
                <h3 className="mt-12 font-sentient text-6xl leading-none tracking-[-0.08em] md:text-7xl">
                  {product.name}
                </h3>
                <div className="mt-8 flex min-h-44 items-center justify-center rounded-[1.5rem] border border-[#061327]/10 bg-white p-5">
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    width={product.imageWidth}
                    height={product.imageHeight}
                    className="max-h-36 w-full object-contain"
                  />
                </div>
                <p className="mt-8 max-w-[54ch] text-lg leading-8 text-[#061327]/66">
                  {product.body}
                </p>
                <div className="mt-10 grid gap-3">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-between rounded-2xl border border-[#061327]/12 bg-white/72 px-5 py-4"
                    >
                      <span className="text-[#061327]/76">{feature}</span>
                      <span className="h-2 w-14 rounded-full bg-[linear-gradient(90deg,#0057B8,#E1262D)]" />
                    </div>
                  ))}
                </div>
                <span className="mt-10 inline-block font-mono text-xs uppercase text-primary opacity-70 transition group-hover:opacity-100">
                  Open product
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Pill>How it works</Pill>
            <h2 className="mt-6 max-w-[10ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] md:text-7xl">
              From service insight to software layer.
            </h2>
          </div>
          <div className="grid gap-4">
            {productSystem.map((item) => (
              <article
                key={item.step}
                className="nova-card grid gap-5 rounded-[2rem] p-7 md:grid-cols-[92px_1fr] md:p-9"
              >
                <span className="font-sentient text-5xl tracking-[-0.08em] text-primary/80">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-sentient text-4xl tracking-[-0.07em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[54ch] text-base leading-7 text-[#061327]/62">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-24 text-center">
        <div className="nova-card rounded-[2rem] p-8 md:p-12">
          <Pill>Next product move</Pill>
          <h2 className="mx-auto mt-6 max-w-[12ch] font-sentient text-5xl leading-[0.95] tracking-[-0.08em] md:text-7xl">
            Map the product layer your business needs.
          </h2>
          <p className="mx-auto mt-6 max-w-[620px] text-base leading-8 text-[#061327]/62">
            Start with the audit and we will identify whether SiteRent,
            BizStack, Auris, or a custom Nova-built layer is the right next move.
          </p>
          <div className="mt-9">
            <FluidCTA label="Start product audit" />
          </div>
        </div>
      </section>
    </main>
  );
}
