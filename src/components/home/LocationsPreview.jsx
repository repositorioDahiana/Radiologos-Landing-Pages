import { useMemo, useState } from "react";

import losRosalesImg from "../../assets/images/ImgRosales.png";
import comfamiliarImg from "../../assets/images/Fondo.jpg";
import sanRafaelImg from "../../assets/images/ImgEseCentro.png";
import centroMedicoImg from "../../assets/images/ImgCentroCorazon.png";
import pinaresImg from "../../assets/images/ImgPlus.png";
import ubicacionIcon from "../../assets/Iconos/ubicacion.png";
import relojIcon from "../../assets/Iconos/reloj.png";
import ImgCentroMujer from "../../assets/images/ImgCentroMujer.png";
import Ubicacion1 from "../../assets/images/ImgSanRafael.png";
import Ubicacion2 from "../../assets/images/EseSanJuaquin.png";
import centroCartagoImg from "../../assets/images/CentroCartago.png";
import mariscalCartagoImg from "../../assets/images/Mariscal.png";
import ArmeniaImg from "../../assets/images/Armenia.png";

function LocationsPreview() {
  const [activeCity, setActiveCity] = useState("Pereira");

  const headquarters = [
    {
      id: 1,
      city: "Pereira",
      image: losRosalesImg,
      title: "Radiólogos Asociados Sede Clínica Los Rosales",
      address: "Carrera 9 No. 25-59 Torre C piso 1",
      schedule1: "Ambulatorios (L-S): 7:00 a.m. – 6:00 p.m.",
      schedule2: "Hospitalarios: 24 x 7",
      featured: false,
    },
    {
      id: 2,
      city: "Pereira",
      image: comfamiliarImg,
      title: "Radiólogos Asociados Sede Clínica Comfamiliar",
      address: "Avenida Circunvalar No. 3-01 Torre B Piso 2",
      schedule1: "L-V: 6:00 a.m. – 9:00 p.m.",
      schedule2: "S: 6:00 a.m. – 6:00 p.m.",
      featured: false,
    },
    {
      id: 3,
      city: "Pereira",
      image: Ubicacion1,
      title: "Radiólogos Asociados Sede Clínica San Rafael Megacentro",
      address: "Carrera 19 No. 12-32 Primer piso",
      schedule1: "Ambulatorios (L-S): 7:00 a.m. – 6:00 p.m.",
      schedule2: "Hospitalarios: 24 x 7",
      featured: true,
    },
    {
      id: 4,
      city: "Pereira",
      image: centroMedicoImg,
      title: "Radiólogos Asociados Sede Centro Médico para el Corazón",
      address: "Carrera 9 No. 25-25 Torre C Piso 4 Clínica Rosales",
      schedule1: "L-V: 6:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },
    {
      id: 5,
      city: "Pereira",
      image: pinaresImg,
      title: "Radiólogos Asociados Sede Megacentro Pinares",
      address: "Carrera 18 No. 12-75 Torre 2 Local 208",
      schedule1: "L-V: 7:00 a.m. – 6:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },

    {
      id: 6,
      city: "Pereira",
      image: ImgCentroMujer,
      title: "Radiólogos Asociados Sede Centro Médico De La Mujer",
      address: "Carrera 9 No. 25-25 Torre C Piso 4 Clínica Rosales",
      schedule1: "L-V: 7:00 a.m. – 5:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: false,
    },
    {
      id: 7,
      city: "Pereira",
      image: Ubicacion2,
      title: "Radiólogos Asociados Sede ESE San Joaquín",
      address: "Carrera 26 No. 78-80 Barrio Cuba",
      schedule1: "L-V: 8:00 a.m. – 5:00 p.m.",
      schedule2: "S: 8:00 a.m. – 12:00 p.m.",
      featured: false,
    },
    {
      id: 8,
      city: "Pereira",
      image: sanRafaelImg,
      title: "Radiólogos Asociados Sede ESE Salud del Centro",
      address: "Carrera 7 No. 40-34",
      schedule1: "L-V: 8:00 a.m. – 5:00 p.m.",
      schedule2: "S: 8:00 a.m. – 12:00 p.m.",
      featured: false,
    },

    {
      id: 9,
      city: "Cartago",
      image: centroCartagoImg,
      title: "Radiólogos Asociados Sede Cartago Centro",
      address: "Carrera 5 No. 7-88",
      schedule1: "L-V: 7:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 11:00 p.m.",
      featured: true,
    },
    {
      id: 10,
      city: "Cartago",
      image: mariscalCartagoImg,
      title: "Radiólogos Asociados Sede Mariscal",
      address: "Carrera 5 No. 8-55",
      schedule1: "L-V: 7:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 11:00 p.m.",
      featured: false,
    },

    {
      id: 11,
      city: "Armenia",
      image: ArmeniaImg,
      title: "Radiólogos Asociados Sede Armenia",
      address: "Carrera 12 1A norte-20 local 101-102",
      schedule1: "L-V: 7:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: true,
    },
  ];

  const cities = ["Pereira", "Cartago", "Armenia"];

  const filteredHeadquarters = useMemo(() => {
    return headquarters.filter((item) => item.city === activeCity);
  }, [activeCity]);

  return (
    <section className="locations-preview" id="ubicacion">
      <div className="locations-preview__container">
        <div className="locations-preview__header">
          <h2 className="locations-preview__title">
            Nuestras <span>Ubicaciones</span>
          </h2>

          <div className="locations-preview__line"></div>

          <p className="locations-preview__description">
            Encuentra nuestra clínica más cercana y conoce nuestros horarios de
            atención.
          </p>

          <div className="locations-preview__tabs">
            {cities.map((city) => (
              <button
                key={city}
                type="button"
                className={`locations-preview__tab ${
                  activeCity === city ? "locations-preview__tab--active" : ""
                }`}
                onClick={() => setActiveCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="locations-preview__grid">
          {filteredHeadquarters.map((item) => (
            <article
              key={item.id}
              className={`locations-preview__card ${
                item.featured ? "locations-preview__card--featured" : ""
              }`}
            >
              <div className="locations-preview__image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="locations-preview__image"
                />
              </div>

              <div className="locations-preview__content">
                <h3 className="locations-preview__card-title">{item.title}</h3>

                <div className="locations-preview__address">
                  <img
                    src={ubicacionIcon}
                    alt="Ubicación"
                    className="locations-preview__meta-icon"
                  />
                  <span>{item.address}</span>
                </div>

                <div className="locations-preview__schedule-box">
                  <div className="locations-preview__schedule-title">
                    <img
                      src={relojIcon}
                      alt="Horarios"
                      className="locations-preview__meta-icon"
                    />
                    <span>HORARIOS</span>
                  </div>

                  <p>{item.schedule1}</p>
                  <p>{item.schedule2}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LocationsPreview;