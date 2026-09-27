import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Over ons" };

export default function AboutPage() {
  return (
    <div className="wrap">
      <h1>Over ons</h1>
      <p>
        {site.name} in {site.city}. Vervang deze tekst door het verhaal van het bedrijf. De map
        structuur volgt een business-site: pagina&apos;s direct onder `app/`.
      </p>
    </div>
  );
}
