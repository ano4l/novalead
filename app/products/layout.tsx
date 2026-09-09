import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Powered by Nova product systems including SiteRent, BizStack, and Auris.",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
