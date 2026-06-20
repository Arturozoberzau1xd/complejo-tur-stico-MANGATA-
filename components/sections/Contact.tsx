"use client";

import { siteConfig } from "@/data/site";

export default function Contact() {
  const whatsappUrl = `https://wa.me/${
    siteConfig.whatsappNumber
  }?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__box">
        <div>
          <span className="contact__eyebrow">Reserva tu estancia</span>
          <h2>¿Listo para escaparte a Huasca?</h2>
          <p>
            Escríbenos por WhatsApp para consultar disponibilidad, precios,
            promociones de temporada y paquetes especiales. ¡Te esperamos en el bosque!
          </p>
        </div>

        <div className="contact__info">
          <div className="contact__details">
            <p>
              <strong>Ubicación:</strong> {siteConfig.address}
            </p>
            <p>
              <strong>Teléfono:</strong> {siteConfig.phone}
            </p>
            <p>
              <strong>Email:</strong> {siteConfig.email}
            </p>
          </div>

          {/* NUEVO: Bloque de Redes Sociales */}
          <div className="contact__socials">
            <span className="contact__socials-title">Síguenos en nuestras redes:</span>
            <div className="contact__socials-links">
              {/* Facebook */}
              <a 
                href={siteConfig.socials?.facebook || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook de Cabañas Mangata"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span>Facebook</span>
              </a>

              {/* Instagram */}
              <a 
                href={siteConfig.socials?.instagram || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram de Cabañas Mangata"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                <span>Instagram</span>
              </a>

              {/* TikTok */}
              <a 
                href={siteConfig.socials?.tiktok || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="TikTok de Cabañas Mangata"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                <span>TikTok</span>
              </a>
            </div>
          </div>

          <a
            className="btn btn--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "12px", display: "inline-flex", justifyContent: "center" }}
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}