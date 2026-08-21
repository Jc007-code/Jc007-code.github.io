import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jc007-code.github.io"),
  title: { default: "Jonathan Cagle | Applied Computing", template: "%s | Jonathan Cagle" },
  description: "Jonathan Cagle's portfolio in software development, cybersecurity, systems, and automation.",
  openGraph: {
    title: "Jonathan Cagle | Applied Computing",
    description: "Software, cybersecurity, systems, and automation—built with purpose.",
    url: "https://jc007-code.github.io",
    siteName: "Jonathan Cagle Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
