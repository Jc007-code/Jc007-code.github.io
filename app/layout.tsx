import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteContent } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jc007-code.github.io"),
  title: { default: `${siteContent.name} | ${siteContent.role}`, template: `%s | ${siteContent.name}` },
  description: siteContent.description,
  openGraph: {
    title: `${siteContent.name} | ${siteContent.role}`,
    description: siteContent.description,
    url: "https://jc007-code.github.io",
    siteName: "Jonathan Cagle Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="top-ornament" aria-hidden="true" />
        <div className="shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
