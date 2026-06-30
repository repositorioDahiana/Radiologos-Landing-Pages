import cardioIcon from "../../assets/Iconos/especialidad1.png";
import consultaIcon from "../../assets/Iconos/especialidad2.png";
import dopplerIcon from "../../assets/Iconos/especialidad3.png";
import ecoIcon from "../../assets/Iconos/especialidad4.png";
import flurosIcon from "../../assets/Iconos/especialidad5.png";
import intervIcon from "../../assets/Iconos/especialidad6.png";
import labIcon from "../../assets/Iconos/especialidad7.png";
import mamografiaIcon from "../../assets/Iconos/especialidad8.png";
import rayosIcon from "../../assets/Iconos/especialidad9.png";
import resonanIcon from "../../assets/Iconos/especialidad10.png";
import resonanciaIcon from "../../assets/Iconos/resonancia.png";
import sedacionIcon from "../../assets/Iconos/especialidad12.png";
import terapiaIcon from "../../assets/Iconos/especialidad13.png";
import tacIcon from "../../assets/Iconos/especialidad14.png";
import tacdIcon from "../../assets/Iconos/especialidad15.png";

const specialties = [
  { 
    id: 1, 
    title: "Cardiología", 
    icon: cardioIcon, 
    desc: "Se encarga de cuidar el corazón. Aquí revisan cómo está funcionando, si late bien y si la sangre circula correctamente, para prevenir o detectar problemas como infartos o fallas cardíacas." 
  },
  { 
    id: 2, 
    title: "Colposcopia", 
    icon: consultaIcon, 
    desc: "Es un examen para observar con detalle el cuello del útero. Sirve para detectar a tiempo cambios o lesiones que podrían convertirse en cáncer, ayudando a tratarlo cuando aún es prevenible." 
  },
  { 
    id: 3, 
    title: "Doppler", 
    icon: dopplerIcon, 
    desc: "Es un tipo de estudio que mira cómo circula la sangre por las venas y arterias. Permite ver si hay obstrucciones, coágulos o mala circulación." 
  },
  { 
    id: 4, 
    title: "Ecografía", 
    icon: ecoIcon, 
    desc: "Es una imagen que se obtiene con ondas de sonido (no usa radiación).Se utiliza para ver órganos, músculos o incluso bebés durante el embarazo de forma segura." 
  },
  { 
    id: 5, 
    title: "Fluoroscopia", 
    icon: flurosIcon, 
    desc: "Es como una “radiografía en video”.Permite ver el interior del cuerpo en movimiento, lo que ayuda a guiar procedimientos médicos con mucha precisión." 
  },
  { 
    id: 6, 
    title: "Intervencionismo", 
    icon: intervIcon, 
    desc: "Son procedimientos médicos poco invasivos (sin cirugía abierta).Se hacen con pequeñas punciones, lo que reduce el dolor y permite una recuperación más rápida." 
  },
  { 
    id: 7, 
    title: "Laboratorio", 
    icon: labIcon, 
    desc: "Aquí analizan muestras como sangre u orina. Estos exámenes ayudan a saber cómo está el cuerpo por dentro y detectar enfermedades." 
  },
  { 
    id: 8, 
    title: "Mamografía", 
    icon: mamografiaIcon, 
    desc: "Es un examen de las mamas. Sirve para detectar el cáncer de mama de forma temprana, muchas veces antes de que se sienta algún síntoma." 
  },
  { 
    id: 9, 
    title: "Rayos X", 
    icon: rayosIcon, 
    desc: "Es una imagen rápida del interior del cuerpo usando radiación.Se usa sobre todo para ver huesos, detectar fracturas o problemas en los pulmones."
  },
  { 
    id: 10, 
    title: "Resonancia Convencional", 
    icon: resonanIcon, 
    desc: "Es una imagen muy detallada del cuerpo sin usar radiación. Ayuda a ver órganos y tejidos con gran claridad, como el cerebro o músculos." 
  },
  { 
    id: 11, 
    title: "Resonancia Especial", 
    icon: resonanciaIcon, 
    desc: "Es una resonancia más avanzada. Se utiliza para estudios más específicos o complejos, por ejemplo del corazón o del cerebro." 
  },
  {
    id: 12, 
    title: "Sedación", 
    icon: sedacionIcon, 
    desc: "Es el uso de medicamentos para relajar al paciente. Se emplea para que algunos procedimientos sean más tranquilos, cómodos y sin dolor." 
  },
  { 
    id: 13, 
    title: "Terapia", 
    icon: terapiaIcon, 
    desc: "Incluye ejercicios y tratamientos físicos. Ayuda a recuperar movimiento, aliviar dolor y mejorar la calidad de vida." 
  },
  { id: 14, 
    title: "Tomografía", 
    icon: tacIcon, 
    desc: "Es un estudio que toma muchas imágenes del cuerpo y las combina. Permite ver el interior con gran detalle para detectar enfermedades o lesiones." 
  },
  { 
    id: 15, 
    title: "Tomografía Multicorte", 
    icon: tacdIcon, 
    desc: "Es una tomografía más rápida y detallada. Toma muchas imágenes en poco tiempo, lo que permite diagnósticos más precisos." 
  },
];


function SpecialtiesGrid() {
  return (
    <section className="specialties" id="especialidad">
      <div className="specialties__container">

        {/* HEADER */}
        <div className="specialties__header">
          <h2 className="specialties__title">
            Nuestras <span className="text-gradient-blue">Especialidades</span>
          </h2>

          <p className="specialties__description">
            Contamos con un portafolio integral de servicios médicos especializados,
            diseñados para ofrecer diagnósticos precisos y oportunos.
          </p>
        </div>

        {/* GRID */}
        <div className="specialties__grid">
          {specialties.map((item) => (
            <article key={item.id} className="specialty-card">

              <div className="specialty-card__icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialtiesGrid;