import Link from "next/link";
import { siteContent } from "@/data/site";

export function SiteFooter() {
  return (
    <footer>
      <p>{siteContent.footerNote}</p>
      <div>
        <Link href={siteContent.githubUrl}>GitHub</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
