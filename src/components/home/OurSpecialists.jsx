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
        
        const firstSetItem = container.children[0];
        const secondSetItem = container.children[8];
        const jumpDistance = secondSetItem ? secondSetItem.offsetLeft - firstSetItem.offsetLeft : container.scrollWidth / 2;

        if (container.scrollLeft >= jumpDistance) {
          container.scrollLeft -= jumpDistance;
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
  ];

  const duplicatedSpecialists = [...specialists, ...specialists];

  const handleScroll = (direction) => {
    const container = specialistCarouselRef.current;
    if (container) {
      isScrollingRef.current = true;
      
      // Dynamic calculation of one set's width
      const firstSetItem = container.children[0];
      const secondSetItem = container.children[specialists.length];
      const jumpDistance = secondSetItem ? secondSetItem.offsetLeft - firstSetItem.offsetLeft : container.scrollWidth / 2;
      
      const scrollAmount = 340; // Approximate card width + gap for responsive design
      
      if (direction === "left" && container.scrollLeft < scrollAmount) {
        container.scrollLeft += jumpDistance;
      } else if (direction === "right" && container.scrollLeft >= jumpDistance) {
        container.scrollLeft -= jumpDistance;
      }
      
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 600);
    }
  };




  return (
    <section className="specialists">
      <div className="specialists__container">

        {/* HEADER USANDO TUS LLAMADOS DE DISEÑO */}
        <div className="specialists__header">
          <h2 className="specialists__title">
            Nuestros <span className="text-gradient-blue">Especialistas</span>
          </h2>
          <p className="specialists__description">
            Contamos con un equipo médico de primer nivel, altamente calificado y comprometido con brindarte un diagnóstico preciso y una atención con calidez humana.
          </p>
          <div className="specialists__line section-line-blue"></div>
        </div>

        {/* CONTENEDOR INTERMEDIO DEL CARRUSEL (FLECHAS + TRACK) */}
        <div className="specialists__carousel-wrapper">
          
          <button 
            className="specialist-nav-btn specialist-nav-btn--left" 
            onClick={() => handleScroll("left")}
            aria-label="Anterior"
          >
            ‹
          </button>

          <div className="specialists__carousel" ref={specialistCarouselRef}>
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

                {/* CUERPO LIMPIO: Información esencial sin botones molestos */}
                <div className="specialists__card-body">
                  <h3 className="specialists__card-name">{doctor.name}</h3>
                  <div className="specialists__card-divider"></div>
                  <p className="specialists__card-specialty">{doctor.specialty}</p>
                </div>
              </article>
            ))}
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