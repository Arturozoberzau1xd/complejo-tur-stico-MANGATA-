import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import { gallery } from "@/data/site";

export default function Gallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <SectionTitle
          eyebrow="Galería"
          title="Momentos que se sienten como una pausa"
          description="Agrega aquí fotos reales de las cabañas, interiores, exteriores, fogatas y paisajes cercanos."
        />

        <div className="gallery__grid">
          {gallery.map((image) => (
            <div className="gallery__item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}