import Link from "next/link";
import { navigation, siteContent } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Jonathan Cagle home">
        <span className="brand-mark">{siteContent.initials}</span>
        <span className="brand-copy">
          <strong>{siteContent.name}</strong>
          <small>{siteContent.role}</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.slice(1).map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
