import img1 from "../../assets/images/Fondo.jpg";
import img2 from "../../assets/images/Fondo.jpg";
import img3 from "../../assets/images/Fondo.jpg";
import img4 from "../../assets/images/Fondo.jpg";
import img5 from "../../assets/images/Fondo.jpg";
import img6 from "../../assets/images/Fondo.jpg";
import img7 from "../../assets/images/Fondo.jpg";
import img8 from "../../assets/images/Fondo.jpg";
import img9 from "../../assets/images/Fondo.jpg";
import img10 from "../../assets/images/Fondo.jpg";
import img11 from "../../assets/images/Fondo.jpg";
import img12 from "../../assets/images/Fondo.jpg";
import img13 from "../../assets/images/Fondo.jpg";
import img14 from "../../assets/images/Fondo.jpg";
import img15 from "../../assets/images/Fondo.jpg";

const specialists = [
  { id: 1, name: "Dr. Carlos Gómez", specialty: "Radiología", image: img1 },
  { id: 2, name: "Dra. Laura Martínez", specialty: "Resonancia Magnética", image: img2 },
  { id: 3, name: "Dr. Andrés López", specialty: "Tomografía (TAC)", image: img3 },
  { id: 4, name: "Dra. María Rodríguez", specialty: "Ecografía", image: img4 },
  { id: 5, name: "Dr. Juan Pérez", specialty: "Cardiología", image: img5 },
  { id: 6, name: "Dra. Sofía Ramírez", specialty: "Radiología Intervencionista", image: img6 },
  { id: 7, name: "Dr. Miguel Torres", specialty: "Neuroradiología", image: img7 },
  { id: 8, name: "Dra. Paula Sánchez", specialty: "Mamografía", image: img8 },
  { id: 9, name: "Dr. Diego Herrera", specialty: "Ultrasonido", image: img9 },
  { id: 10, name: "Dra. Camila Rojas", specialty: "Radiología Pediátrica", image: img10 },
  { id: 11, name: "Dr. Felipe Castro", specialty: "Imagenología", image: img11 },
  { id: 12, name: "Dra. Natalia Vargas", specialty: "Diagnóstico Digital", image: img12 },
  { id: 13, name: "Dr. Luis Moreno", specialty: "Cardioimagen", image: img13 },
  { id: 14, name: "Dra. Daniela Ruiz", specialty: "Radiología Clínica", image: img14 },
  { id: 15, name: "Dr. Jorge Castillo", specialty: "Imagen Avanzada", image: img15 },
];

function SpecialistsGrid() {
  return (
    <section className="specialists-grid" id="equipo">
      <div className="specialists-grid__container">

        {/* HEADER */}
        <div className="specialists-grid__header">
          <h2 className="specialists-grid__title">
            Nuestro <span className="text-gradient-blue">Equipo Médico</span>
          </h2>

          <p className="specialists-grid__description">
            Contamos con especialistas altamente capacitados en diferentes áreas
            de la radiología y diagnóstico médico.
          </p>
        </div>

        {/* GRID */}
        <div className="specialists-grid__content">
          {specialists.map((doc) => (
            <article key={doc.id} className="specialist-card">

              <div className="specialist-card__image">
                <img src={doc.image} alt={doc.name} />
              </div>

              <div className="specialist-card__info">
                <h3>{doc.name}</h3>
                <p>{doc.specialty}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SpecialistsGrid;