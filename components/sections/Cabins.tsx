"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { cabins, siteConfig } from "@/data/site";

export default function Cabins() {
  const [activeFilter, setActiveFilter] = useState("parejas");
  
  // Estados para la ventana emergente de imágenes (Lightbox)
  const [isOpen, setIsOpen] = useState(false);
  const [currentCabinImages, setCurrentCabinImages] = useState<string[]>([]);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [cabinTitle, setCabinTitle] = useState("");

  // Abrir la ventana con las fotos de la cabaña seleccionada
  const openLightbox = (images: string[], title: string) => {
    setCurrentCabinImages(images);
    setCabinTitle(title);
    setCurrentImgIndex(0);
    setIsOpen(true);
  };

  // Navegación de fotos dentro de la ventana emergente
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % currentCabinImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + currentCabinImages.length) % currentCabinImages.length);
  };

  const filteredCabins = cabins.filter((cabin) => {
    if (activeFilter === "todas") return true;
    if (activeFilter === "parejas") return cabin.id <= 3;
    if (activeFilter === "familiares") return cabin.id === 4 || cabin.id === 5 || cabin.id === 6;
    if (activeFilter === "grupos") return cabin.id >= 7;
  });

  return (
    <section id="cabanas" className="section cabins" style={{ padding: "5rem 0" }}>
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        
        <SectionTitle
          eyebrow="Tu refugio en el bosque"
          title="Descubre nuestras cabañas"
          description="Contamos con espacios diseñados a la medida de tu plan. Explora nuestras opciones destacadas o mira el catálogo completo."
        />

        {/* --- PESTAÑAS DE FILTRO --- */}
        <div className="cabins-filters" style={{
          display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.75rem",
          marginBottom: "3.5rem", margin: "0 auto 3.5rem auto", width: "fit-content"
        }}>
          {[
            { id: "parejas", label: "✨ Parejas (Destacadas)" },
            { id: "familiares", label: "🏡 Familiares" },
            { id: "grupos", label: "👥 Grupos Grandes" },
            { id: "todas", label: "🌲 Ver Todas (" + cabins.length + ")" }
          ].map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: "0.6rem 1.4rem", borderRadius: "4px",
                  border: isSelected ? "1px solid #4a5d3b" : "1px solid rgba(255,255,255,0.15)",
                  cursor: "pointer", fontSize: "0.95rem", fontWeight: "600", transition: "all 0.2s ease",
                  backgroundColor: isSelected ? "rgba(74, 93, 59, 0.25)" : "transparent", color: "inherit",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* --- GRID DE TARJETAS --- */}
        <div className="cabins-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2.5rem",
        }}>
          {filteredCabins.map((cabin) => (
            <article 
              className="cabin-card-premium" 
              key={cabin.id}
              style={{
                borderRadius: "8px", overflow: "hidden", display: "flex", flexDirection: "column",
                border: "1px solid #36442a", backgroundColor: "rgba(20, 15, 10, 0.4)", backdropFilter: "blur(4px)"
              }}
            >
              {/* Contenedor de Imagen de Portada */}
              <div 
                onClick={() => openLightbox(cabin.images, cabin.title)}
                style={{ position: "relative", width: "100%", height: "230px", cursor: "pointer" }}
              >
                <Image
                  src={cabin.images && cabin.images.length > 0 ? cabin.images[0] : "/images/placeholder.jpg"}
                  alt={cabin.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Etiqueta de Capacidad */}
                <span style={{
                  position: "absolute", bottom: "1rem", left: "1rem",
                  backgroundColor: "rgba(43, 54, 34, 0.9)", color: "#fff",
                  padding: "0.3rem 0.7rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "500",
                }}>
                  👥 {cabin.people}
                </span>

                {/* Botón flotante para avisar que hay más fotos (Ideal para celular) */}
                <span style={{
                  position: "absolute", top: "1rem", right: "1rem",
                  backgroundColor: "rgba(0, 0, 0, 0.6)", color: "#fff",
                  padding: "0.4rem 0.6rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "600",
                  display: "flex", alignItems: "center", gap: "4px", backdropFilter: "blur(2px)"
                }}>
                  📸 {cabin.images ? cabin.images.length : 0} fotos
                </span>
              </div>

              {/* Contenido */}
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem", fontWeight: "600", color: "inherit" }}>
                  {cabin.title}
                </h3>
                
                <p style={{ fontSize: "0.95rem", opacity: 0.8, lineHeight: "1.6", marginBottom: "1.5rem", flexGrow: 1 }}>
                  {cabin.description}
                </p>

                <ul style={{ 
                  listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "grid", 
                  gridTemplateColumns: "1fr 1fr", gap: "0.5rem", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "1.2rem"
                }}>
                  {cabin.features.slice(0, 4).map((feature) => (
                    <li key={feature} style={{ fontSize: "0.85rem", opacity: 0.9, display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ color: "#617a4f" }}>✓</span> {feature}
                    </li>
                  ))}
                  {cabin.features.length > 4 && (
                    <li style={{ fontSize: "0.85rem", opacity: 0.5, fontStyle: "italic" }}>
                      + {cabin.features.length - 4} más
                    </li>
                  )}
                </ul>

                {/* Footer */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem",
                  marginTop: "auto", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "1rem"
                }}>
                  <div>
                    <span style={{ display: "block", fontSize: "0.75rem", opacity: 0.6, textTransform: "uppercase" }}>Noche</span>
                    <span style={{ fontSize: "1.25rem", fontWeight: "700" }}>{cabin.price.split(" ")[0]}</span>
                  </div>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Hola, me interesa la ${cabin.title}. ¿Podrían decirme si está disponible para la fecha que deseo?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      border: "1px solid #4a5d3b", color: "inherit", padding: "0.6rem 1.2rem",
                      borderRadius: "4px", fontSize: "0.9rem", fontWeight: "600", textDecoration: "none",
                      backgroundColor: "rgba(74, 93, 59, 0.1)", transition: "all 0.2s ease"
                    }}
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- VENTANA EMERGENTE (MODAL LIGHTBOX) --- */}
      {isOpen && currentCabinImages.length > 0 && (
        <div 
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.93)", display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center", zIndex: 9999, padding: "1rem"
          }}
        >
          {/* Botón de cerrar */}
          <button 
            onClick={() => setIsOpen(false)}
            style={{
              position: "absolute", top: "20px", right: "20px", backgroundColor: "rgba(255,255,255,0.2)",
              color: "white", border: "none", borderRadius: "50%", width: "40px", height: "40px",
              fontSize: "1.2rem", cursor: "pointer", fontWeight: "bold"
            }}
          >
            ✕
          </button>

          {/* Título de la cabaña arriba */}
          <h4 style={{ color: "#fff", marginBottom: "1rem", fontSize: "1.2rem", fontWeight: "500" }}>
            {cabinTitle} ({currentImgIndex + 1} / {currentCabinImages.length})
          </h4>

          {/* Contenedor principal de la imagen actual */}
          <div style={{ position: "relative", width: "100%", maxWidth: "800px", height: "65vh" }}>
            <Image
              src={currentCabinImages[currentImgIndex]}
              alt={`Foto ${currentImgIndex + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />

            {/* Flecha Izquierda */}
            <button 
              onClick={prevImage}
              style={{
                position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)", color: "white", border: "none",
                padding: "1rem 0.7rem", cursor: "pointer", borderRadius: "4px", fontSize: "1.2rem"
              }}
            >
              ❮
            </button>

            {/* Flecha Derecha */}
            <button 
              onClick={nextImage}
              style={{
                position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
                backgroundColor: "rgba(0,0,0,0.5)", color: "white", border: "none",
                padding: "1rem 0.7rem", cursor: "pointer", borderRadius: "4px", fontSize: "1.2rem"
              }}
            >
              ❯
            </button>
          </div>

          {/* Texto de ayuda inferior */}
          <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem", fontSize: "0.85rem" }}>
            Toca fuera de la imagen o la ✕ para salir
          </p>
        </div>
      )}
    </section>
  );
}