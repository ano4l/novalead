import Link from "next/link";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const items = ["Services", "Process", "Results", "FAQ"];

  return (
    <div className="fixed left-0 top-0 z-50 w-full pt-5 md:pt-8">
      <header className="container flex items-center justify-between rounded-full border border-white/14 bg-[rgba(8,25,72,0.6)] px-5 py-3 shadow-[0_20px_60px_rgba(8,25,72,0.18)] backdrop-blur-xl md:px-6">
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
          className="uppercase max-lg:hidden inline-flex h-12 items-center rounded-full bg-primary px-5 text-[11px] tracking-[0.24em] text-white transition-transform duration-200 ease-out hover:-translate-y-0.5"
          href="/#contact"
        >
          Book Audit
        </Link>
        <MobileMenu />
      </header>
    </div>
  );
};
