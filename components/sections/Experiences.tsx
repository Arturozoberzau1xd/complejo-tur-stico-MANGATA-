import SectionTitle from "@/components/ui/SectionTitle";
import { experiences } from "@/data/site";

export default function Experiences() {
  return (
    <section id="experiencias" className="section experiences">
      <div className="container experiences__grid">
        <SectionTitle
          eyebrow="Experiencias"
          title="Más que hospedaje, una escapada completa"
          description="Haz que tu visita a Huasca sea memorable con actividades ideales para descansar, convivir y disfrutar el entorno."
        />

        <div className="experiences__list">
          {experiences.map((item, index) => (
            <article key={item.title} className="experience-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}