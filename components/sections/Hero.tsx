import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__badge">Huasca de Ocampo, Hidalgo</span>

        <h1>Complejo turistico MANGATA</h1>

        <p>
          Vive una escapada tranquila entre naturaleza, chimenea, noches de
          fogata y el encanto único de Huasca de Ocampo.
        </p>

        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
              siteConfig.whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar por WhatsApp
          </a>

          <a className="btn btn--secondary" href="#cabanas">
            Ver cabañas
          </a>
        </div>

        <div className="hero__stats">
          <article>
            <strong>13</strong>
            <span>Tipos de cabaña</span>
          </article>
          <article>
            <strong>24/7</strong>
            <span>Ambiente privado</span>
          </article>
          <article>
            <strong>100%</strong>
            <span>Experiencia natural</span>
          </article>
        </div>
      </div>
    </section>
  );
}