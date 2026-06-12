import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const items = [
    { name: "Services", href: "/services/lead-generation" },
    { name: "Products", href: "/products" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  return (
    <div className="fixed left-0 top-0 z-50 w-full pt-5 md:pt-8">
      <header className="container flex items-center justify-between rounded-full border border-[#061327]/10 bg-white/72 py-3 shadow-[0_18px_60px_rgba(0,32,92,0.09)] backdrop-blur-xl">
        <Link href="/" className="inline-flex items-center">
          <Logo className="h-10 w-10 rounded-lg p-0 md:h-11 md:w-11" />
          <span className="ml-3 font-sentient text-3xl tracking-[-0.06em] text-[#061327] md:text-4xl">
            NovaLeads
          </span>
        </Link>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-x-10 lg:flex">
          {items.map((item) => (
            <Link
              className="inline-block font-mono text-sm uppercase text-[#061327]/58 transition-colors duration-150 ease-out hover:text-[#061327]"
              href={item.href}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Link
          className="hidden font-mono text-sm uppercase text-primary transition-colors duration-150 ease-out hover:text-primary/80 lg:inline-flex"
          href="/contact"
        >
          Contact
        </Link>
        <MobileMenu />
      </header>
    </div>
  );
};
