import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="wrap">
      <p>{site.city}</p>
      <h1>{site.name}</h1>
      <p>{site.description}</p>
      <p>
        <Link href="/diensten">Bekijk diensten</Link>
      </p>
    </div>
  );
}
