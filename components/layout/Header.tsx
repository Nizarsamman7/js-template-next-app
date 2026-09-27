import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="header">
      <Link className="logo" href="/">
        {site.name}
      </Link>
      <nav>
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
