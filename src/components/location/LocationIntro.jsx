import { useMemo, useState } from "react";

import losRosalesImg from "../../assets/images/ImgRosales.png";
import comfamiliarImg from "../../assets/images/UbicacionConfamiliar.png";
import sanRafaelImg from "../../assets/images/ImgEseCentro.png";
import centroMedicoImg from "../../assets/images/ImgCentroCorazon.png";
import pinaresImg from "../../assets/images/ImgPlus.png";
import ImgCentroMujer from "../../assets/images/ImgCentroMujer.png";
import Ubicacion1 from "../../assets/images/ImgSanRafael.png";
import Ubicacion2 from "../../assets/images/UbicacionEseSanJuaquin.png";
import centroCartagoImg from "../../assets/images/UbicacionCentroCartago.png";
import mariscalCartagoImg from "../../assets/images/UbicacionMariscal.png";
import ArmeniaImg from "../../assets/images/UbicacionArmenia.png";

import ubicacionIcon from "../../assets/Iconos/ubicacion.png";
import relojIcon from "../../assets/Iconos/reloj.png";
import estudiosIcon from "../../assets/Iconos/especialidad6.png";

export const headquarters = [

    {
      id: 1,
      city: "Pereira",
      image: losRosalesImg,
      title: "Radiólogos Asociados Sede Clínica Los Rosales",
      address: "Carrera 9 No. 25-59 Torre C piso 1",
      maps:"https://maps.google.com/?q=Radiologos+Asociados+Clinica+Los+Rosales+Pereira",
      schedule1: "Ambulatorios (L-S): 7:00 a.m. – 6:00 p.m.",
      schedule2: "Hospitalarios: 24 x 7",
      featured: false,
      studies: [
        "Tomografía Simple y Contrastada",
        "Tomografía Multicorte",
        "Angiotomografía",
        "Fluoroscopia",
        "Rayos X",
        "Ecografías y Doppler",
        "Resonancias Simples y Contrastadas",
        "Procedimientos con Sedación",
      ],
    },

    {
      id: 2,
      city: "Pereira",
      image: comfamiliarImg,
      title: "Radiólogos Asociados Sede Clínica Comfamiliar",
      address: "Avenida Circunvalar No. 3-01 Torre B Piso 2",
      maps:"https://maps.google.com/?q=Radiologos+Asociados+Clinica+Comfamiliar+Pereira",
      schedule1: "L-V: 6:00 a.m. – 9:00 p.m.",
      schedule2: "S: 6:00 a.m. – 6:00 p.m.",
      featured: false,
      studies: [
        "Tomografía Simple y Contrastada",
        "Tomografía Multicorte",
        "Angiotomografía",
        "Rayos X",
        "Ecografías y Doppler",
        "Procedimientos con Sedación",
      ],
    },

    {
      id: 3,
      city: "Pereira",
      image: Ubicacion1,
      title: "Radiólogos Asociados Sede Clínica San Rafael Megacentro",
      address: "Carrera 19 No. 12-32 Primer piso",
      maps:"https://maps.google.com/?q=Radiologos+Asociados+Megacentro+Pinares+Pereira",
      schedule1: "Ambulatorios (L-S): 7:00 a.m. – 6:00 p.m.",
      schedule2: "Hospitalarios: 24 x 7",
      featured: true,
      studies: [
        "Tomografía Simple y Contrastada",
        "Tomografía Multicorte",
        "Rayos X",
        "Ecografías y Doppler",
        "Procedimientos con Sedación",
      ],
    },

    {
      id: 4,
      city: "Pereira",
      image: centroMedicoImg,
      title: "Radiólogos Asociados Sede Centro Médico para el Corazón",
      address: "Carrera 9 No. 25-25 Torre C Piso 4 Clínica Rosales",
      maps: "https://maps.google.com/?q=Carrera+9+25-25+Pereira",
      schedule1: "L-V: 6:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: true,
      studies: [
        "Consulta de Cardiología Adulto y Pediátrico",
        "Ecocardiograma Transtorácico",
        "Ecocardiograma Transesofágico",
        "Ecocardiograma de Estrés con Prueba de Esfuerzo",
        "Ecocardiograma con Estrés Farmacológico",
        "Prueba de Esfuerzo",
        "Monitoreo de Presión Arterial",
        "Test de Mesa Basculante",
        "Electrocardiograma",
      ],
    },

    {
      id: 5,
      city: "Pereira",
      image: pinaresImg,
      title: "Radiólogos Asociados Sede Megacentro Pinares",
      address: "Carrera 18 No. 12-75 Torre 2 Local 208",
      maps: "https://maps.google.com/?q=Radiologos+Asociados+Megacentro+Pinares+Pereira",
      schedule1: "L-V: 7:00 a.m. – 6:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: true,
      studies: [
        "Rayos X",
        "Ecografías y Doppler",
        "Mamografía 2D",
      ],
    },
    {
      id: 6,
      city: "Pereira",
      image: ImgCentroMujer,
      title: "Radiólogos Asociados Sede Centro Médico De La Mujer",
      address: "Carrera 9 No. 25-25 Torre C Piso 4 Clínica Rosales",
      maps: "https://maps.google.com/?q=Carrera+9+25-25+Pereira",
      schedule1: "L-V: 7:00 a.m. – 5:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: true,
      studies: [
        "Consulta de Ginecología, Urología y Medicina General",
        "Ecografías",
        "Mamografía 3D – Tomosíntesis",
        "Toma de Citología Vaginal",
        "Toma de Muestras de Laboratorio Clínico",
        "Procedimientos de Ginecología",
        "Terapia de Piso Pélvico",
      ],
    },
    {
      id: 7,
      city: "Pereira",
      image: Ubicacion2,
      title: "Radiólogos Asociados Sede ESE San Joaquín",
      address: "Carrera 26 No. 78-80 Barrio Cuba",
      maps: "https://maps.google.com/?q=Hospital+San+Joaquin+Cuba+Pereira",
      schedule1: "L-V: 8:00 a.m. – 5:00 p.m.",
      schedule2: "S: 8:00 a.m. – 12:00 p.m.",
      featured: true,
      studies: [
        "Rayos X",
        "Ecografías",
      ],
    },
    {
      id: 8,
      city: "Pereira",
      image: sanRafaelImg,
      title: "Radiólogos Asociados Sede ESE Salud del Centro",
      address: "Carrera 18 No. 12-75 Torre 2 Local 208",
      maps: "https://maps.google.com/?q=Carrera+7+40-34+Pereira",
      schedule1: "L-V: 8:00 a.m. – 5:00 p.m.",
      schedule2: "S: 8:00 a.m. – 12:00 p.m.",
      featured: true,
      studies: [
        "Rayos X",
        "Ecografías",
      ],
    },
    {
      id: 9,
      city: "Cartago",
      image: centroCartagoImg,
      title: "Radiólogos Asociados Sede Cartago Centro",
      address: "Carrera 5 No. 7-88",
      maps: "https://maps.google.com/?q=Radiologos+Asociados+Cartago",
      schedule1: "L-J: 7:00 a.m. – 12:00 p.m. 1:00 p.m. – 4:00 p.m.",
      schedule2: "V: 7:00 a.m. – 12:00 p.m. 1:00 p.m. – 3:00 p.m.",
      schedule3: "S: 8:00 a.m. – 11:00 p.m.",
      featured: true,
      studies: [
      "Consulta de Cardiología Adulto y Pediátrico",
      "Ecocardiograma Transtorácico",
      "Ecocardiograma Holter",
      "Ecocardiograma de Estrés con Prueba de Esfuerzo",
      "Prueba de Esfuerzo",
      "Monitoreo de Presión Arterial",
      "Electrocardiograma",
    ],
    },
    {
      id: 10,
      city: "Cartago",
      image: mariscalCartagoImg,
      title: "Radiólogos Asociados Sede Mariscal",
      address: "Carrera 5 No. 8-55",
      maps: "https://maps.google.com/?q=Carrera+5+8-55+Cartago",
      schedule1: "L-V: 7:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 11:00 p.m.",
      featured: true,
      studies: [
        "Rayos X",
        "Ecografías y Doppler",
        "Tomografía Simple y Contrastada",
        "Mamografía",
      ],
    },
    {
      id: 11,
      city: "Armenia",
      image: ArmeniaImg,
      title: "Radiólogos Asociados Sede Armenia",
      address: "Carrera 12 1A norte-20 local 101-102",
      maps: "https://maps.google.com/?q=Radiologos+Asociados+Armenia",
      schedule1: "L-V: 7:00 a.m. – 4:00 p.m.",
      schedule2: "S: 7:00 a.m. – 12:00 p.m.",
      featured: true,
      studies: [
        "Rayos X",
        "Ecografías y Doppler",
      ],
    },
  ];

function LocationsPreview() {

  const [activeCity, setActiveCity] = useState("Pereira");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const cities = ["Pereira", "Cartago", "Armenia"];

  const filteredHeadquarters = useMemo(() => {
    return headquarters.filter((item) => item.city === activeCity);
  }, [activeCity]);

  return (

    <>
      <section className="locations-preview" id="ubicacion">
        <div className="locations-preview__container">
          {/* HEADER */}
          <div className="locations-preview__header">
            <h2 className="locations-preview__title">
              Encuentra tu sede<span> más cercana</span>
            </h2>
            <div className="locations-preview__line"></div>
            <p className="locations-preview__description">
              Selecciona tu ciudad y descubre nuestras sedes con horarios,
              direcciones y servicios disponibles
            </p>
            {/* TABS */}
            <div className="locations-preview__tabs">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  className={`locations-preview__tab ${
                    activeCity === city
                      ? "locations-preview__tab--active"
                      : ""
                  }`}
                  onClick={() => setActiveCity(city)}
                >
                  {city}
                </button>

              ))}
            </div>
          </div>

          {/* GRID */}
          <div className="locations-preview__grid">

            {filteredHeadquarters.map((item) => (

              <article
                key={item.id}
                className={`locations-preview__card ${
                  item.featured
                    ? "locations-preview__card--featured"
                    : ""
                }`}
                onClick={() => setSelectedLocation(item)}
              >

                {/* IMAGE */}
                <div className="locations-preview__image-wrapper">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="locations-preview__image"
                  />

                </div>

                {/* CONTENT */}
                <div className="locations-preview__content">

                  <h3 className="locations-preview__card-title">
                    {item.title}
                  </h3>

                  {/* ADDRESS */}
                  <div className="locations-preview__address">

                    <img
                      src={ubicacionIcon}
                      alt="Ubicación"
                      className="locations-preview__meta-icon"
                    />

                    <span>{item.address}</span>

                  </div>

                  {/* SCHEDULE */}
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

      {/* ==================== MODAL ==================== */}

      {selectedLocation && (

        <div
          className="locations-modal"
          onClick={() => setSelectedLocation(null)}
        >

          <div
            className="locations-modal__content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE */}
            <button
              className="locations-modal__close"
              onClick={() => setSelectedLocation(null)}
            >
              ✕
            </button>

            {/* IMAGE */}
            <img
              src={selectedLocation.image}
              alt={selectedLocation.title}
              className="locations-modal__image"
            />

            {/* BODY */}
            <div className="locations-modal__body">

              <h2 className="locations-modal__title">
                {selectedLocation.title}
              </h2>

              <div className="locations-modal__address">

                <img
                  src={ubicacionIcon}
                  alt="Ubicación"
                />

                <span>{selectedLocation.address}</span>

              </div>

              <div className="locations-modal__studies">

                <h3>
                  Estudios disponibles
                </h3>

                <div className="locations-modal__studies-grid">

                  {selectedLocation.studies.map((study, index) => (

                    <div
                      className="locations-modal__study"
                      key={index}
                    >

                      <img
                        src={estudiosIcon}
                        alt={study}
                      />

                      <span>{study}</span>

                    </div>

                  ))}

                </div>

              </div>

              {/* BUTTONS */}
              <div className="locations-modal__actions">

                <a
                  href={selectedLocation.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary-blue"
                >
                  Ver ubicación
                </a>

                <a
                  href="https://appcedira.com/solicitarcita/public/solicitud-examen"
                  className="btn-base btn-secondary-outline"
                >
                  Agendar cita
                </a>

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default LocationsPreview;