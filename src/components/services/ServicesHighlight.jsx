import icon1 from "../../assets/Iconos/Ferrari1.png";
import icon2 from "../../assets/Iconos/Ferrari2.png";
import icon3 from "../../assets/Iconos/Ferrari3.png";
import icon4 from "../../assets/Iconos/Ferrari4.png";
import icon5 from "../../assets/Iconos/Ferrari5.png";
import icon6 from "../../assets/Iconos/Ferrari6.png";
import icon7 from "../../assets/Iconos/Ferrari7.png";

import img1 from "../../assets/images/Ferrari1.png";
import img2 from "../../assets/images/Ferrari2.png";
import img3 from "../../assets/images/Ferrari3.png";
import img4 from "../../assets/images/Ferrari4.png";
import img5 from "../../assets/images/Ferrari5.png";
import img6 from "../../assets/images/Ferrari6.png";
import img7 from "../../assets/images/Ferrari7.png";
import img8 from "../../assets/images/Ferrari8.png";

const services = [
  {
    title: "AngioTAC de Arterias Coronarias",
    desc: "Protege tu corazón con tecnología de vanguardia. Un estudio rápido y no invasivo que permite visualizar tus arterias con total precisión para detectar obstrucciones a tiempo y prevenir riesgos cardíacos, sin necesidad de procedimientos complejos.",
    icon: icon1,
    image: img1,
  },
  {
    title: "AngioTAC de Corazón y Grandes Vasos (Mapeo)",
    desc: "La visión más completa de tu anatomía cardíaca. Evaluamos con máxima precisión el corazón y los grandes vasos sanguíneos para entender su funcionamiento estructural y detectar cualquier anomalía con tecnología de última generación.",
    icon: icon2,
    image: img2,
  },
  {
    title: "Score de Calcio Coronario",
    desc: "Detecta el riesgo cardiovascular de forma silenciosa. A través de un escaneo preciso, determinamos el nivel de calcificación en tus arterias coronarias para establecer un plan de prevención personalizado y efectivo contra enfermedades del corazón.",
    icon: icon3,
    image: img3,
  },
  {
    title: "AngioTAC Protocolo TAVI",
    desc: "Estudio especializado de alta resolución para la planificación de reemplazo valvular. Evaluamos integralmente el corazón, la aorta y los accesos vasculares, proporcionando las medidas y especificaciones exactas necesarias para un procedimiento mínimamente invasivo y seguro.",
    icon: icon4,
    image: img4,
  },
  {
    title: "AngioTAC Coronarias",
    desc: "Visualiza la salud de tu corazón con claridad absoluta. Nuestro diagnóstico avanzado utiliza imágenes de alta definición para evaluar el estado real de tus arterias coronarias, permitiendo identificar anomalías con una precisión milimétrica.",
    icon: icon5,
    image: img5,
  },
  {
    title: "AngioTAC Aorta Torácica",
    desc: "Evaluación especializada de la arteria más importante de tu tórax. Este estudio de alta resolución permite identificar de manera precisa aneurismas, disecciones y otras anomalías, proporcionando información vital para la prevención y el tratamiento oportuno.",
    icon: icon6,
    image: img6,
  },
  {
    title: "AngioTAC Aorta Abdominal y Miembros Inferiores",
    desc: "Recupera la seguridad en tu movilidad con un diagnóstico integral de tu circulación. Evaluamos a detalle la aorta abdominal y el flujo sanguíneo hacia tus piernas para detectar obstrucciones o problemas circulatorios, permitiendo un tratamiento efectivo para mejorar tu bienestar vascular.",
    icon: icon7,
    image: img7,
  },
  {
    title: "Tomosíntesis",
    desc: "...IA",
    icon: icon7,
    image: img8,
  },
];

function ServicesHighlight() {
  return (
    <section className="services-highlight" id="servicios">
      <div className="services-highlight__container">

        {/* HEADER */}
        <div className="services-highlight__header">
          <h2 className="services-highlight__title">
            Estudios <span className="text-gradient-blue">Especializados</span>
          </h2>

          <p className="services-highlight__description">
            Ofrecemos estudios diagnósticos de alta complejidad únicos en la región,
            respaldados por tecnología de punta y especialistas altamente calificados.
          </p>
        </div>

        {/* GRID */}
        <div className="services-highlight__grid">
          {services.map((item, index) => (
            <article
              key={item.id}
              className="service-card-flip"
            >
              <div className="service-card-flip__inner">

                {/* FRONT */}
                <div
                  className={`service-card service-card--front ${
                    index % 2 === 0 ? "service-card--blue" : ""
                  }`}
                >
                  <div className="service-card__icon">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <div className="service-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>

                {/* BACK */}
                <div className="service-card service-card--back">
                  <img src={item.image} alt={item.title} />
                </div>

              </div>
            </article>
            ))}
        </div>

        <div className="services-hero__actions">
            <a href="#especialidad" className="btn-base btn-primary-blue">
              Ver más servicios
            </a>
          </div>

      </div>
    </section>
  );
}

export default ServicesHighlight;