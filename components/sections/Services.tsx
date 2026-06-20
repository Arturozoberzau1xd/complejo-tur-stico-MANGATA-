"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";

const servicesData = [
  {
    id: "glamping",
    icon: "⛺",
    title: "Áreas de Glamping y Zonas Verdes",
    shortDesc: "Disfruta de la naturaleza con total comodidad. Incluye regaderas con agua caliente.",
    image: "/images/cabanas/lol.jpg", // <-- Agrega tu foto aquí
    details: (
      <div style={{ fontSize: "0.95rem" }}>
        <p style={{ marginBottom: "0.8rem", opacity: 0.9 }}>Espacios exclusivos en medio del bosque equipados con servicios de primera:</p>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <li>🟢 <strong>Para 2 personas:</strong> $1,200 / noche</li>
          <li>🟢 <strong>Para 4 personas:</strong> $1,800 / noche</li>
          <li>🟢 <strong>Para 6 personas:</strong> $2,300 / noche</li>
        </ul>
      </div>
    )
  },
  {
    id: "decoracion",
    icon: "✨",
    title: "Paquete de Decoración Romántica",
    shortDesc: "Sorprende a tu pareja con una atmósfera mágica e inolvidable en tu cabaña.",
    image: "/images/cabanas/decoracion.jpg", // <-- Agrega tu foto aquí
    details: (
      <div style={{ fontSize: "0.95rem" }}>
        <p style={{ fontWeight: "600", color: "#617a4f", marginBottom: "0.3rem" }}>¿Qué incluye?</p>
        <p style={{ opacity: 0.85, marginBottom: "0.8rem" }}>Velas térmicas, pétalos de rosa artificiales, arreglo floral elegante e inciensos aromáticos.</p>
        <p style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.5rem" }}>Precio: $1,200</p>
        <span style={{ fontSize: "0.8rem", opacity: 0.6, display: "block", fontStyle: "italic", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "0.5rem" }}>
          ⚠️ Nota: Se debe solicitar obligatoriamente al momento de realizar la reservación.
        </span>
      </div>
    )
  },
  {
    id: "cena",
    icon: "🍝",
    title: "Cena Romántica en la Cabaña",
    shortDesc: "Una velada perfecta con menú gourmet directo en la calidez de tu chimenea.",
    image: "/images/cabanas/cenaromantica.jpg", // <-- Agrega tu foto aquí
    details: (
      <div style={{ fontSize: "0.95rem" }}>
        <p style={{ fontWeight: "600", color: "#617a4f", marginBottom: "0.3rem" }}>Menú & Ambientación:</p>
        <p style={{ opacity: 0.85, marginBottom: "0.8rem" }}>Pasta o Lasagna, Pizza artesanal, Botella de vino, decoración especial con pétalos y velas junto a la chimenea.</p>
        <p style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.4rem" }}>Precio: $2,350</p>
        <div style={{ padding: "0.6rem", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "4px", fontSize: "0.85rem" }}>
          🕒 <strong>Servicio:</strong> 7:00 PM a 9:00 PM<br/>
          📌 Solicitar al reservar.
        </div>
      </div>
    )
  },
  {
    id: "snacks",
    icon: "🍷",
    title: "Tabla de Embutidos y Snacks",
    shortDesc: "El complemento ideal para pasar la tarde disfrutando del clima boscoso.",
    image: "/images/cabanas/snacks.jpg", // <-- Agrega tu foto aquí
    details: (
      <div style={{ fontSize: "0.95rem" }}>
        <p style={{ fontWeight: "600", color: "#617a4f", marginBottom: "0.3rem" }}>¿Qué incluye?</p>
        <p style={{ opacity: 0.85, marginBottom: "0.8rem" }}>Fina selección de embutidos, snacks variados y una botella de vino tinto. Porción para 2 a 4 personas.</p>
        <p style={{ fontSize: "1.1rem", fontWeight: "700", marginBottom: "0.4rem" }}>Precio: $980</p>
        <div style={{ padding: "0.6rem", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "4px", fontSize: "0.85rem" }}>
          🕒 <strong>Servicio:</strong> 2:00 PM a 8:00 PM<br/>
          📌 Solicitar al reservar.
        </div>
      </div>
    )
  },
  {
    id: "eventos",
    icon: "🪵",
    title: "Eventos Sociales y Ceremonias",
    shortDesc: "Celebra momentos importantes rodeado de la magia de nuestro bosque encantado.",
    image: "/images/cabanas/partys.jpg", // <-- Agrega tu foto aquí
    details: (
      <div style={{ fontSize: "0.95rem" }}>
        <p style={{ opacity: 0.85, marginBottom: "0.8rem" }}>Ofrecemos banquetes y logística completa para todo tipo de reuniones:</p>
        <ul style={{ paddingLeft: "1.2rem", margin: "0 0 1rem 0" }}>
          <li>Fiestas y Cumpleaños</li>
          <li>Eventos recreativos y corporativos</li>
          <li>Ceremonias espirituales</li>
        </ul>
        <p style={{ fontSize: "0.85rem", fontStyle: "italic", opacity: 0.7 }}>Cotiza con nuestros asesores para un presupuesto a la medida.</p>
      </div>
    )
  }
];

export default function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicios" className="section services" style={{ padding: "5rem 0" }}>
      <div className="container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        
        <SectionTitle
          eyebrow="Experiencias exclusivas"
          title="Servicios y Paquetes Adicionales"
          description="Mejora tu estadía en Huasca de Ocampo. Haz clic en cualquier servicio para conocer los detalles e imágenes."
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginTop: "2rem" }}>
          {servicesData.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <article
                key={item.id}
                style={{
                  borderRadius: "8px",
                  border: "1px solid #36442a", // Mismo verde pantanoso
                  backgroundColor: "rgba(20, 15, 10, 0.4)", // Mismo fondo madera translúcido
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                {/* CABECERA (Siempre visible) */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    userSelect: "none"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
                    <span style={{ fontSize: "2rem", lineHeight: "1" }}>{item.icon}</span>
                    <div>
                      <h3 style={{ fontSize: "1.25rem", margin: "0 0 0.2rem 0", fontWeight: "600", color: "inherit" }}>
                        {item.title}
                      </h3>
                      {!isExpanded && (
                        <p style={{ fontSize: "0.9rem", margin: 0, opacity: 0.7, maxWidth: "550px" }}>
                          {item.shortDesc}
                        </p>
                      )}
                    </div>
                  </div>
                  <span style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                    fontSize: "1.2rem",
                    opacity: 0.6
                  }}>
                    ▼
                  </span>
                </div>

                {/* CONTENIDO DESPLEGABLE CON IMAGEN (Dos columnas en pantallas grandes) */}
                {isExpanded && (
                  <div style={{
                    padding: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap", // Para que en celulares se baje el texto automáticamente
                    gap: "1.5rem"
                  }}>
                    {/* Contenedor de la foto */}
                    <div style={{ 
                      position: "relative", 
                      width: "280px", 
                      height: "180px", 
                      borderRadius: "6px", 
                      overflow: "hidden",
                      flexShrink: 0,
                      margin: "0 auto" // Centrado si baja en móviles
                    }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="280px"
                      />
                    </div>

                    {/* Contenedor del texto descriptivo */}
                    <div style={{ flex: "1 1 300px" }}>
                      {item.details}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}