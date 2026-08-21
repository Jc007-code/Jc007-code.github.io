import Link from "next/link";
import { navigation } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Jonathan Cagle home">
        <span className="brand-mark">JC</span>
        <span>Jonathan Cagle</span>
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.slice(1).map(([label, href]) => (
          <Link key={href} href={href}>{label}</Link>
        ))}
      </nav>
    </header>
  );
}
