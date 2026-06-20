import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <section className="section about">
      <div className="container about__grid">
        <div>
          <SectionTitle
            eyebrow="Descanso con estilo"
            title="Un refugio cálido entre bosque, silencio y naturaleza"
            description="Diseñamos una experiencia pensada para parejas, familias y viajeros que buscan desconectarse de la rutina sin perder comodidad."
          />

          <div className="about__text">
            <p>
              Nuestras cabañas combinan acabados rústicos, tonos cálidos,
              espacios privados y una atmósfera elegante para que cada estancia
              se sienta especial desde la llegada.
            </p>

            <p>
              Ya sea para una escapada romántica, un fin de semana familiar o
              una visita a los atractivos turísticos de Huasca, aquí encontrarás
              un lugar cómodo para descansar.
            </p>
          </div>
        </div>

        <div className="about__card">
          <span>Experiencia recomendada</span>
          <h3>Fin de semana con fogata</h3>
          <p>
            Reserva una noche especial con fogata, bebidas calientes y un
            ambiente íntimo rodeado de naturaleza.
          </p>
        </div>
      </div>
    </section>
  );
}