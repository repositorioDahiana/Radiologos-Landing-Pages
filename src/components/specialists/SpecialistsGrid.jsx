import doc1 from "../../assets/images/Doctor1.webp";
import doc2 from "../../assets/images/Doctor2.webp";
import doc3 from "../../assets/images/Doctor3.webp";
import doc4 from "../../assets/images/Doctor4.webp";
import doc5 from "../../assets/images/Doctor5.webp";
import doc6 from "../../assets/images/Doctor6.webp";
import doc7 from "../../assets/images/Doctor7.webp";
import doc8 from "../../assets/images/Doctor8.webp";
import doc9 from "../../assets/images/Doctor9.webp";
import doc10 from "../../assets/images/Doctor13.webp";
import doc11 from "../../assets/images/Doctor11.webp";
import doc12 from "../../assets/images/Doctor12.webp";
import doc13 from "../../assets/images/Doctor10.webp";
import doc14 from "../../assets/images/Doctor14.webp";
import doc15 from "../../assets/images/Doctor15.webp";
import doc16 from "../../assets/images/Doctor16.webp";

const specialists = [
  {
    id: 1,
    name: "Dr. Carlos Felipe Hurtado",
    specialty: "Médico Especialista en Radiología Intervencionista",
    experience: "Radiólogo Intervencionista",
    image: doc1,
  },
  {
    id: 2,
    name: "Dr. Juan Pablo Camacho Calderón",
    specialty: "Médico Especialista en Radiología Intervencionista",
    experience: "Radiólogo Intervencionista",
    image: doc2,
  },
  {
    id: 3,
    name: "Dra. Diana Cristina Ramírez Mesías",
    specialty: "Médica Especialista en Medicina Internista / Subespecialista en Cardiología",
    experience: "Especialista en Medicina Internista",
    image: doc3,
  },
  {
    id: 4,
    name: "Dr. Carlos Andres Montoya Hidalgo",
    specialty: "Médico Especialista en Radiología Intervencionista",
    experience: "Radiólogo Intervencionista",
    image: doc4,
  },
  {
    id: 5,
    name: "Dra. Diana Marcela Montoya",
    specialty: "Medica Especialista en  Radiología, Fellow  en patología mamaria",
    experience: "Radiólogo",
    image: doc5,
  },
  {
    id: 6,
    name: "Dra. Paula Ximena Burbano Gutiérrez",
    specialty: "Especialista en Medicina Internista /Subespecialista en Cardiología",
    experience: "Especialista en Medicina Internista",
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
    specialty: "Médico Especialista en Medicina Internista /Subespecialista en Cardiología",
    experience: "Especialista en Medicina Internista",
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
    specialty: "Médico Especialista en Radiología, Fellow Ecocardiografía FetalFellow neurosonografia-fetal",
    experience: "Radiólogo",
    image: doc10,
  },
  {
    id: 11,
    name: "Dra. Sandra Lorena Díaz Guerrero",
    specialty: "Médica especialista en radiología , Fellow en mama ",
    experience: "Radiólogo",
    image: doc11,
  },
  {
    id: 12,
    name: "Dr. Juan Pablo Arismendi Muñoz",
    specialty: "Médico Especialista en Radiología ",
    experience: "Radiólogo",
    image: doc12,
  },
  {
    id: 13,
    name: "Dra. Laura Melina López",
    specialty: "Médica Especialista en Ginecología y Obstetricia",
    experience: "Ginecóloga",
    image: doc13,
  },
  {
      id: 14,
      name: "Dr. Luis Fernando Grisales",
      specialty: "Director Científico Médico Especialista en radiología , Fellow en Próstata ",
      experience: "Radiólogo",
      image: doc14,
    },
  {
    id: 15,
    name: "Dr. Jairo Leon Acevedo",
    specialty: "Médico Internista / Especialista en Cardióloga / Subespecialista en diagnostico no invasivo",
    experience: "Cardiólogo",
    image: doc15,
  },
  {
    id: 16,
    name: "Dr. Alonso Gómez García",
    specialty: "Médico Especialista en Pediatría, subespecialista en Cardiología pediátrica hemodinamia en cardiopatías congénitas",
    experience: "Cardiólogo Pediátria",
    image: doc16,
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