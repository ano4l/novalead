import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const items = ["Services", "Process", "Results", "FAQ"];

  return (
    <div className="fixed left-0 top-0 z-50 w-full pt-5 md:pt-8">
      <header className="container flex items-center justify-between rounded-full border border-white/10 bg-black/34 px-5 py-3 backdrop-blur-md md:px-6">
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="size-2.5 rounded-full bg-primary shadow-glow shadow-primary/50" />
          <span className="font-sentient text-xl md:text-2xl tracking-[-0.05em]">
            NovaLeads
          </span>
        </Link>
        <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
          {items.map((item) => (
            <Link
              className="uppercase inline-block font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>
        <Link
          className="uppercase max-lg:hidden inline-flex h-12 items-center rounded-full bg-white px-5 text-[11px] tracking-[0.24em] text-black transition-transform duration-200 ease-out hover:-translate-y-0.5"
          href="/#contact"
        >
          Book Call
        </Link>
        <MobileMenu />
      </header>
    </div>
  );
};
