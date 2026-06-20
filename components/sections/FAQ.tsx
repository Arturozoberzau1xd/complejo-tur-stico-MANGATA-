"use client";

import SectionTitle from "@/components/ui/SectionTitle";

export default function FAQ() {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        
        <SectionTitle
          eyebrow="Planea tu estancia"
          title="Información Importante y Reservaciones"
          description="Todo lo que necesitas saber antes de empacar tus maletas y los pasos para asegurar tu cabaña."
        />

        {/* Reutilizamos el comportamiento de grid responsivo nativo de tu CSS */}
        <div className="about__grid" style={{ marginTop: "52px", alignItems: "start" }}>
          
          {/* COLUMNA IZQUIERDA: POLÍTICAS */}
          <div className="faq-card-rules">
            <h3 style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: "28px", 
              marginBottom: "24px", 
              color: "var(--lime-light)",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              📋 Tómalo en cuenta...
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "var(--text-soft)", fontSize: "15px" }}>
              <div>
                <strong>⏰ Horarios:</strong><br />
                <span style={{ opacity: 0.85 }}>Check-in: 12:00 PM a 3:00 PM | Check-out: 12:00 del día</span>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                <strong>🪵 Servicios Extras:</strong><br />
                <span style={{ opacity: 0.85 }}>• Carga de leña (chimenea/fogata): $150<br />• Persona adicional: $250 por noche</span>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                <strong>🐾 Mascotas:</strong><br />
                <span style={{ opacity: 0.85 }}>¡Bienvenidos lomitos! Sin costo extra.</span>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "16px" }}>
                <strong>⚠️ Cambios de fecha:</strong>
                <p style={{ opacity: 0.85, marginTop: "4px", fontSize: "14px", lineHeight: "1.5" }}>
                  No hay cancelaciones ni reembolsos. Cambios con mínimo 24 hrs de anticipación.
                </p>
                <p style={{ color: "var(--muted)", fontSize: "13px", fontStyle: "italic", marginTop: "4px" }}>
                  *Para el 24 o 31 de Diciembre el cambio debe ser con una semana de anticipación, sujeto a disponibilidad y liquidando el total.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: TIMELINE */}
          <div style={{ padding: "10px" }}>
            <h3 style={{ 
              fontFamily: 'Georgia, serif', 
              fontSize: "28px", 
              marginBottom: "32px", 
              color: "var(--cream)"
            }}>
              🌲 Pasos Para Reservar
            </h3>

            <div className="faq-timeline">
              <div className="faq-timeline-item">
                <div className="faq-timeline-dot" />
                <h4>1. Consulta Disponibilidad</h4>
                <p>Escríbenos para confirmar si las fechas en las que deseas escapar al bosque están libres.</p>
              </div>

              <div className="faq-timeline-item">
                <div className="faq-timeline-dot" />
                <h4>2. Anticipo del 50%</h4>
                <p>Para congelar tu fecha y asegurar tu cabaña, requerimos el depósito o transferencia de la mitad del monto total.</p>
              </div>

              <div className="faq-timeline-item">
                <div className="faq-timeline-dot" />
                <h4>3. Envía tu Comprobante</h4>
                <p>Toma foto o captura de tu transferencia y envíala por WhatsApp al 5581877829 incluyendo tu nombre completo.</p>
              </div>

              <div className="faq-timeline-item">
                <div className="faq-timeline-dot" style={{ backgroundColor: "var(--gold-light)" }} />
                <h4 style={{ color: "var(--gold-light)" }}>4. ¡Confirmación Inmediata!</h4>
                <p>Validamos tu depósito y te hacemos llegar tu recibo oficial de reservación. ¡Prepara tus maletas!</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}