"use client";

import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { siteNavigation } from "@/lib/site-content";

interface MobileMenuProps {
  className?: string;
}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "group p-2 text-[#061327] transition-colors lg:hidden",
            className
          )}
          aria-label="Open menu"
        >
          <Menu className="group-[[data-state=open]]:hidden" size={24} />
          <X className="hidden group-[[data-state=open]]:block" size={24} />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <div
          data-overlay="true"
          className="fixed inset-0 z-30 bg-white/86 backdrop-blur-sm"
        />

        <Dialog.Content
          onInteractOutside={(e) => {
            if (
              e.target instanceof HTMLElement &&
              e.target.dataset.overlay !== "true"
            ) {
              e.preventDefault();
            }
          }}
          className="fixed top-0 left-0 w-full z-40 py-28 md:py-40"
        >
          <Dialog.Title className="sr-only">Menu</Dialog.Title>

          <nav className="flex flex-col space-y-6 container mx-auto">
            {siteNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
              className="py-2 font-sentient text-4xl tracking-[-0.06em] text-[#061327] transition-colors duration-150 ease-out hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-6">
              <Link
                href="/contact"
                onClick={handleLinkClick}
                className="inline-block font-mono text-xl uppercase text-primary transition-colors duration-150 ease-out hover:text-primary/80"
              >
                Contact
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
