import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <strong>{site.name}</strong>
      <span>
        {site.email} · {site.phone}
      </span>
    </footer>
  );
}
