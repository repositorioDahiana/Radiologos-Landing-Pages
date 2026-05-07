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
    desc: "Cuidamos el motor de tu vida. Evaluamos el ritmo, la estructura y el flujo sanguíneo de tu corazón para detectar a tiempo arritmias, riesgos de infarto o insuficiencias, combinando experiencia médica con la tecnología más avanzada." 
  },
  { 
    id: 2, 
    title: "Colposcopia", 
    icon: consultaIcon, 
    desc: "Un paso adelante en tu bienestar. La colposcopia es una evaluación profunda y delicada clave para la detección temprana de anomalías en el cuello uterino, garantizando una prevención efectiva y segura para la salud de la mujer." 
  },
  { 
    id: 3, 
    title: "Doppler", 
    icon: dopplerIcon, 
    desc: "La ciencia de tu circulación en movimiento. Con el estudio Doppler analizamos el flujo sanguíneo para identificar várices, trombosis u obstrucciones arteriales, permitiendo un diagnóstico preciso de tu salud vascular periférica." 
  },
  { 
    id: 4, 
    title: "Ecografía", 
    icon: ecoIcon, 
    desc: "Claridad y seguridad en cada imagen. La ecografía es un procedimiento cómodo y no invasivo que nos permite evaluar tus órganos internos, músculos y articulaciones con total nitidez, garantizando un diagnóstico preciso y confiable sin exposición a radiación." 
  },
  { 
    id: 5, 
    title: "Fluoroscopia", 
    icon: flurosIcon, 
    desc: "Imágenes en movimiento para diagnósticos complejos. A diferencia de una placa fija, la fluoroscopia nos permite observar el funcionamiento real de tus sistemas internos, facilitando procedimientos guiados con absoluta precisión." 
  },
  { 
    id: 6, 
    title: "Intervencionismo", 
    icon: intervIcon, 
    desc: "Mínima invasión, máxima efectividad. Realizamos tratamientos avanzados mediante pequeñas punciones guiadas por imagen, lo que significa menos dolor, menores riesgos y una recuperación mucho más rápida para el paciente." 
  },
  { 
    id: 7, 
    title: "Laboratorio", 
    icon: labIcon, 
    desc: "La certeza que tu salud necesita. Analizamos muestras biológicas con tecnología automatizada para obtener datos químicos y biológicos exactos de tu organismo, siendo la base fundamental para confirmar diagnósticos y monitorear tu bienestar." 
  },
  { 
    id: 8, 
    title: "Mamografía", 
    icon: mamografiaIcon, 
    desc: "Tu mejor defensa es la detección temprana. La mamografía de alta resolución usa dosis mínimas de rayos X para ver el tejido mamario a detalle, permitiendo identificar nódulos mucho antes de que sean palpables. Es un estudio rápido y vital para actuar a tiempo, cuando los tratamientos son más efectivos." 
  },
  { 
    id: 9, 
    title: "Rayos X", 
    icon: rayosIcon, 
    desc: "Resultados inmediatos para diagnósticos rápidos. La radiografía digital utiliza una mínima dosis de radiación para capturar imágenes nítidas de tus huesos y pulmones en segundos. Es la herramienta esencial para detectar fracturas, neumonías o problemas estructurales de forma efectiva y segura."
  },
  { 
    id: 10, 
    title: "Resonancia Convencional", 
    icon: resonanIcon, 
    desc: "Precisión milimétrica sin radiación. Este estudio utiliza imanes potentes y ondas de radio para obtener imágenes de alta definición de tus órganos, músculos y articulaciones. Es la tecnología más avanzada para visualizar tejidos blandos con una claridad que permite diagnósticos médicos exactos y seguros." 
  },
  { 
    id: 11, 
    title: "Resonancia Especial", 
    icon: resonanciaIcon, 
    desc: "Diagnóstico profundo para casos complejos. Mediante protocolos avanzados y tecnología de imanes de alta potencia, realizamos estudios especializados en neurología, cardiología y oncología. Es la herramienta definitiva para analizar funciones y estructuras específicas con un nivel de detalle superior al convencional." },
  {
    id: 12, 
    title: "Sedación", 
    icon: sedacionIcon, 
    desc: "Tu tranquilidad es nuestra prioridad. Contamos con un servicio de sedación clínica supervisada, donde se administran medicamentos para asegurar que tus estudios o procedimientos se realicen sin dolor, sin ansiedad y en un estado de relajación total. Es el apoyo ideal para garantizar una experiencia cómoda y segura bajo monitoreo constante de expertos." 
  },
  { 
    id: 13, 
    title: "Terapia", 
    icon: terapiaIcon, 
    desc: "Recupera tu movilidad y bienestar. Nuestra unidad de terapia especializada consiste en un conjunto de técnicas y ejercicios físicos diseñados para rehabilitar funciones del cuerpo, aliviar dolores crónicos y acelerar la recuperación tras lesiones o cirugías. Es el acompañamiento profesional necesario para restaurar tu calidad de vida y funcionalidad física." 
  },
  { id: 14, 
    title: "Tomografía", 
    icon: tacIcon, 
    desc: "Una visión tridimensional completa de tu cuerpo. La Tomografía Computarizada (TAC) utiliza un equipo de rayos X giratorio para capturar múltiples imágenes que se combinan en un mapa 3D. Es la herramienta clave para evaluar órganos internos, huesos y tejidos con un nivel de detalle y rapidez que permite diagnósticos médicos de alta precisión." 
  },
  { 
    id: 15, 
    title: "Tomografía Multicorte", 
    icon: tacdIcon, 
    desc: "Velocidad y resolución extrema en segundos. Esta tecnología avanzada de TAC de múltiples cortes captura cientos de imágenes en un solo giro, permitiendo visualizar órganos en movimiento (como el corazón) y vasos sanguíneos con una nitidez insuperable. Es el estándar de oro para diagnósticos críticos que requieren el máximo nivel de detalle anatómico." 
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