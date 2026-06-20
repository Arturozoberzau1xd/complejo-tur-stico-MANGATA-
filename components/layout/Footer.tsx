import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>{siteConfig.name}</h3>
        <p>{siteConfig.location}</p>
      </div>

      <p>
        © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}