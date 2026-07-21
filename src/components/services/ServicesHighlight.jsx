import icon1 from "../../assets/Iconos/Ferrari1.png";
import icon2 from "../../assets/Iconos/Ferrari2.png";
import icon3 from "../../assets/Iconos/Ferrari3.png";
import icon4 from "../../assets/Iconos/Ferrari4.png";
import icon5 from "../../assets/Iconos/Ferrari5.png";
import icon6 from "../../assets/Iconos/Ferrari6.png";
import icon7 from "../../assets/Iconos/Ferrari7.png";
import icon8 from "../../assets/Iconos/Ferrari8.png";

import img1 from "../../assets/images/Ferrari1.webp";
import img2 from "../../assets/images/Ferrari2.webp";
import img3 from "../../assets/images/Ferrari3.webp";
import img4 from "../../assets/images/Ferrari4.webp";
import img5 from "../../assets/images/Ferrari5.webp";
import img6 from "../../assets/images/Ferrari6.webp";
import img7 from "../../assets/images/Ferrari7.webp";
import img8 from "../../assets/images/Ferrari8.webp";

const services = [
  {
    title: "AngioTAC de Arterias Coronarias",
    desc: "Es un examen que mira las arterias del corazón. Sirve para ver si están tapadas o estrechas, lo que ayuda a prevenir infartos sin necesidad de procedimientos invasivos.",
    icon: icon1,
    image: img1,
  },
  {
    title: "AngioTAC de Corazón y Grandes Vasos (Mapeo)",
    desc: "Es un estudio completo del corazón y sus principales vasos sanguíneos. Permite ver su forma y funcionamiento para detectar problemas de manera precisa.",
    icon: icon2,
    image: img2,
  },
  {
    title: "Score de Calcio Coronario",
    desc: "Es una prueba que mide cuánto calcio (depósitos) hay en las arterias del corazón. Entre más calcio, mayor riesgo de enfermedad cardíaca. Sirve para prevenir antes de que aparezcan síntomas.",
    icon: icon3,
    image: img3,
  },
  {
    title: "AngioTAC Protocolo TAVI",
    desc: "Es un estudio especializado para personas que pueden necesitar cambiar una válvula del corazón sin cirugía abierta. Ayuda a planear el procedimiento de forma segura y precisa.",
    icon: icon4,
    image: img4,
  },
  {
    title: "AngioTAC Coronarias",
    desc: "Es una imagen muy detallada de las arterias del corazón. Se usa para ver si hay bloqueos o problemas en la circulación con gran precisión.",
    icon: icon5,
    image: img5,
  },
  {
    title: "AngioTAC Aorta Torácica",
    desc: "Examina la arteria principal del pecho (aorta). Sirve para detectar problemas como dilataciones o rupturas que pueden ser graves si no se tratan.",
    icon: icon6,
    image: img6,
  },
  {
    title: "AngioTAC Aorta Abdominal y Miembros Inferiores",
    desc: "Revisa la circulación en el abdomen y las piernas.Ayuda a identificar problemas de flujo sanguíneo que pueden causar dolor o dificultad para caminar.",
    icon: icon7,
    image: img7,
  },
  {
    title: "Tomosíntesis",
    desc: "Es un tipo avanzado de mamografía.Toma varias imágenes del seno desde diferentes ángulos para detectar el cáncer de forma más clara y temprana. especialmente si tienes protesis.",
    icon: icon8,
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
        <br></br>
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