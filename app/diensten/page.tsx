import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Diensten" };

export default function ServicesPage() {
  return (
    <div className="wrap">
      <h1>Diensten</h1>
      <div className="grid">
        {site.services.map((service) => (
          <article key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
