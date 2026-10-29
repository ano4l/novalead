import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { LanguageProvider } from "@/components/language-provider";

function getMetadataBase() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (explicitUrl) {
    return new URL(explicitUrl);
  }

  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }

  return new URL("http://localhost:3000");
}

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "NovaLeads Systems | Unlock Your Future Growth",
    template: "%s | NovaLeads",
  },
  description:
    "AI, software and growth systems for South African businesses and institutions. Explore Nova Intelligence, LawOS and BizStack.",
  icons: {
    icon: "/novaleads.jpeg",
    shortcut: "/novaleads.jpeg",
    apple: "/novaleads.jpeg",
  },
  openGraph: {
    title: "NovaLeads",
    description:
      "Lead generation, web, software, AI reception, brand, strategy, and automation built as one growth system.",
    siteName: "NovaLeads",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Header />
          <div id="main-content" tabIndex={-1}>{children}</div>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
