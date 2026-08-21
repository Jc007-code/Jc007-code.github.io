import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <p>Built with Next.js, TypeScript, and curiosity.</p>
      <div>
        <Link href="https://github.com/Jc007-code">GitHub</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
}
