import { useRef, useEffect } from "react";

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

function OurSpecialists() {
  const specialistCarouselRef = useRef(null);
  const isScrollingRef = useRef(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = specialistCarouselRef.current;
    let animationFrameId;

    const autoScroll = () => {
      if (container && !isScrollingRef.current && !isHoveredRef.current) {
        container.scrollLeft += 1;

        const jumpDistance = container.scrollWidth / 2;

        if (container.scrollLeft >= jumpDistance) {
          container.scrollLeft = 0; 
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  
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
  ];

  const duplicatedSpecialists = [...specialists, ...specialists];

  const handleScroll = (direction) => {
    const container = specialistCarouselRef.current;
    if (container) {
      isScrollingRef.current = true;

      const jumpDistance = container.scrollWidth / 2;
      const scrollAmount = 340; 

      if (direction === "left") {
        if (container.scrollLeft <= 10) {
          container.scrollLeft = jumpDistance;
        }
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        if (container.scrollLeft >= jumpDistance - scrollAmount) {
          container.scrollLeft = container.scrollLeft - jumpDistance;
        }
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };

  return (
    <section className="specialists">
      <div className="specialists__container">

        <div className="specialists__header">
          <h2 className="specialists__title">
            Nuestros <span className="text-gradient-blue">Especialistas</span>
          </h2>
          <p className="specialists__description">
            Contamos con un equipo médico de primer nivel, altamente calificado y comprometido con brindarte un diagnóstico preciso y una atención con calidez humana.
          </p>
          <div className="specialists__line section-line-blue"></div>
        </div>

        <div 
          className="specialists__carousel-container"
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
        >
          
          <button 
            className="specialist-nav-btn specialist-nav-btn--left" 
            onClick={() => handleScroll("left")}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="specialists__carousel-wrapper" ref={specialistCarouselRef}>
            <div className="specialists__carousel">
              {duplicatedSpecialists.map((doctor, index) => (
                <article 
                  key={`${doctor.id}-${index}`} 
                  className="specialists__card"
                >
                  <div className="specialists__image-box">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="specialists__img" 
                    />
                    <div className="specialists__badge">
                      {doctor.experience}
                    </div>
                  </div>

                  <div className="specialists__card-body">
                    <h3 className="specialists__card-name">{doctor.name}</h3>
                    <div className="specialists__card-divider"></div>
                    <p className="specialists__card-specialty">{doctor.specialty}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button 
            className="specialist-nav-btn specialist-nav-btn--right" 
            onClick={() => handleScroll("right")}
            aria-label="Siguiente"
          >
            ›
          </button>

        </div>

      </div>
    </section>
  );
}

export default OurSpecialists;