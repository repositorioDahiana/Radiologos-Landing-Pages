import experienciaIcon from "../../assets/Iconos/tiempo.png";
import pacientesIcon from "../../assets/Iconos/resonanciaMag.png";
import sedesIcon from "../../assets/Iconos/sedes.png";
import empresasIcon from "../../assets/Iconos/empresa.png";

function AboutIntro() {
  return (
    <section className="about-intro">

      {/* FRASE */}
      <div className="about-intro__quote">
        <p>
          “Más que diagnósticos, entregamos tranquilidad. Como red de IPS líder en Colombia, 
          nuestro compromiso es la excelencia técnica y el cuidado humano. Trabajamos incansablemente 
          para garantizar procesos seguros, diagnósticos precisos y una atención cercana, entendiendo 
          que detrás de cada estudio hay una vida que merece nuestra máxima dedicación.”
        </p>
      </div>

      {/* STATS */}
      <div className="about-intro__stats">

        <div className="about-intro__card">
          <img src={experienciaIcon} />
          <h3>+46</h3>
          <span>Años de experiencia</span>
        </div>

        <div className="about-intro__card">
          <img src={pacientesIcon} />
          <h3>+500K</h3>
          <span>Pacientes atendidos</span>
        </div>

        <div className="about-intro__card">
          <img src={sedesIcon} />
          <h3>+17</h3>
          <span>Sedes en Colombia</span>
        </div>

        <div className="about-intro__card">
          <img src={empresasIcon} />
          <h3>3</h3>
          <span>Empresas del grupo</span>
        </div>

      </div>

    </section>
  );
}

export default AboutIntro;