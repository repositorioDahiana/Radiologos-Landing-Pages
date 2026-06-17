import doc1 from "../../assets/images/Doctor1.png";
import doc2 from "../../assets/images/Doctor2.png";
import doc3 from "../../assets/images/Doctor3.png";
import doc4 from "../../assets/images/Doctor4.png";
import doc5 from "../../assets/images/Doctor5.png";
import doc6 from "../../assets/images/Doctor6.png";
import doc7 from "../../assets/images/Doctor7.png";
import doc8 from "../../assets/images/Doctor8.png";
import doc9 from "../../assets/images/Doctor9.png";
import doc10 from "../../assets/images/Doctor13.png";
import doc11 from "../../assets/images/Doctor11.png";
import doc12 from "../../assets/images/Doctor12.jpg";
import doc13 from "../../assets/images/Doctor10.png";
import doc14 from "../../assets/images/Doctor14.png";

const specialists = [
  {
    id: 1,
    name: "Dr. Carlos Felipe Hurtado",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc1,
  },
  {
    id: 2,
    name: "Dr. Juan Pablo Camacho Calderón",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc2,
  },
  {
    id: 3,
    name: "Dra. Diana Cristina Ramírez Mesías",
    specialty: "Médico Internista / Cardióloga",
    experience: "Cardióloga",
    image: doc3,
  },
  {
    id: 4,
    name: "Dr. Carlos Andres Montoya Hidalgo",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc4,
  },
  {
    id: 5,
    name: "Dra. Diana Marcela Montoya",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc5,
  },
  {
    id: 6,
    name: "Dra. Paula Ximena Burbano Gutiérrez",
    specialty: "Médico Internista / Cardióloga",
    experience: "Cardióloga",
    image: doc6,
  },
  {
    id: 7,
    name: "Dra. Ana Carolina Torres",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc7,
  },
  {
    id: 8,
    name: "Dr. Juan Mauricio Cárdenas Castellanos",
    specialty: "Médico Internista / Cardiólogo",
    experience: "Cardiólogo",
    image: doc8,
  },
  {
    id: 9,
    name: "Dr. Andrés Felipe Usma",
    specialty: "Médico General / Apoyo Sedaciones y Contraste",
    experience: "Médico General",
    image: doc9,
  },
  {
    id: 10,
    name: "Dr Oscar Vallejo Giraldo",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc10,
  },
  {
    id: 11,
    name: "Dra. Sandra Lorena Díaz Guerrero",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc11,
  },
  {
    id: 12,
    name: "Dr. Juan Pablo Arismendi Muñoz",
    specialty: "Médico Radiólogo",
    experience: "Radiólogo",
    image: doc12,
  },
  {
    id: 13,
    name: "Dra. Laura Melina López",
    specialty: "Médico Ginecólogo",
    experience: "Ginecóloga",
    image: doc13,
  },
  {
      id: 14,
      name: "Dr. Luis Fernando Grisales",
      specialty: "Médico Radiólogo / Director Científico Fellow",
      experience: "Radiólogo",
      image: doc14,
    },
];

function SpecialistsGrid() {
  return (
    <section className="specialists-grid" id="equipo">
      <div className="specialists-grid__container">

        {/* HEADER - RESTAURADO EXACTAMENTE COMO LO TENÍAS */}
        <div className="specialists-grid__header">
          <h2 className="specialists-grid__title">
            Conoce a Nuestros{" "}
            <span className="text-gradient-blue">Especialistas</span>
          </h2>

          <p className="specialists-grid__description">
            Médicos radiólogos y especialistas altamente calificados,
            comprometidos con la excelencia diagnóstica.
          </p>
        </div>

        {/* GRID DE 4 COLUMNAS */}
        <div className="specialists-grid__content">
          {specialists.map((doc) => (
            <article key={doc.id} className="specialist-card">

              <div className="specialist-card__image">
                <img src={doc.image} alt={doc.name} loading="lazy" />
              </div>

              <div className="specialist-card__info">
                <h3 className="specialist-card__name">{doc.name}</h3>
                
                <span className="specialist-card__specialty">
                  {doc.specialty}
                </span>

                <div className="specialist-card__badge-exp">
                  <span>{doc.experience}</span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialistsGrid;