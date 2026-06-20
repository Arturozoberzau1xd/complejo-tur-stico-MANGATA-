"use client";

import SectionTitle from "@/components/ui/SectionTitle";

export default function LocationSection() {
  // Enlace directo para abrir en la app de Google Maps o navegador basado en tu iframe
  const googleMapsUrl = "https://maps.google.com/?q=Complejo+Turístico+Mangata+Huasca+de+Ocampo";

  return (
    <section id="ubicacion" className="section location" style={{ padding: "5rem 0" }}>
      <div className="container" style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 1rem" }}>
        
        <SectionTitle
          eyebrow="¿Cómo llegar?"
          title="Nuestra Ubicación en el Bosque"
          description="Encuéntranos en el corazón de Huasca de Ocampo, Hidalgo. El escape perfecto muy cerca de la CDMX."
        />

        {/* --- CONTENEDOR EN DOS COLUMNAS --- */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          marginTop: "3rem",
          alignItems: "center"
        }}>
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN Y BOTÓN */}
          <div style={{
            borderRadius: "12px",
            border: "1px solid #36442a", // Verde pantanoso
            backgroundColor: "rgba(20, 15, 10, 0.4)", // Fondo madera translúcido
            padding: "2.5rem",
            backdropFilter: "blur(4px)"
          }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: "700", marginBottom: "1rem", color: "inherit" }}>
              🌲 Complejo Turístico Mangata
            </h3>
            
            <p style={{ fontSize: "1rem", opacity: 0.85, lineHeight: "1.6", marginBottom: "1.5rem" }}>
              Estamos ubicados en la mística naturaleza de <strong>Huasca de Ocampo, Hidalgo</strong>, rodeados de densos árboles, aire limpio y muy cerca de los puntos de interés más icónicos del primer Pueblo Mágico de México:
            </p>

            <ul style={{ 
              listStyle: "none", 
              padding: 0, 
              margin: "0 0 2rem 0", 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "0.8rem",
              fontSize: "0.95rem"
            }}>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#617a4f" }}>📍</span> Prismas Basálticos</li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#617a4f" }}>📍</span> Peña del Aire</li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#617a4f" }}>📍</span> Bosque de las Truchas</li>
              <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><span style={{ color: "#617a4f" }}>📍</span> Centro de Huasca</li>
            </ul>

            {/* BOTÓN DE REDIRECCIÓN A GOOGLE MAPS */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "0.9rem 1.5rem",
                borderRadius: "6px",
                backgroundColor: "rgba(74, 93, 59, 0.2)", // Fondo verde musgo sutil
                border: "1px solid #4a5d3b", // Borde verde encendido
                color: "#fff",
                fontSize: "1rem",
                fontWeight: "600",
                textDecoration: "none",
                textAlign: "center",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(74, 93, 59, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(74, 93, 59, 0.2)";
              }}
            >
              🗺️ Abrir en Google Maps / GPS
            </a>
          </div>

          {/* COLUMNA DERECHA: IFRAME DEL MAPA INTERACTIVO */}
          <div style={{
            borderRadius: "12px",
            border: "1px solid #36442a", // Enmarcado verde pantanoso
            overflow: "hidden",
            height: "400px",
            position: "relative",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.7719760667661!2d-98.52480281569599!3d20.2373390173327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d103da0470b6f1%3A0xe29e9a3bdcc20476!2sComplejo%20Tur%C3%ADstico%20Mangata!5e1!3m2!1ses-419!2smx!4v1781903221411!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
}