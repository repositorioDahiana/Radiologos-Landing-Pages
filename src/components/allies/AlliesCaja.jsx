import medicinaIcon from "../../assets/Iconos/subsidios.png";

// ICONOS CARDS
import caja1 from "../../assets/images/LogoRisaralda.png";
import caja2 from "../../assets/images/LogoComfenalco.png";

const allies = [
  { name: "Risaralda", icon: caja1 },
  { name: "Comfenalco Quindio", icon: caja2 },
];

function AlliesCaja() {
  return (
    <section className="allies-prepaid" id="caja">
      <div className="allies-prepaid__container">

        {/* HEADER */}
        <div className="allies-prepaid__header">
          
          <div className="allies-prepaid__overlay"></div>

          <div className="allies-prepaid__content">
            <div className="allies-prepaid__icon">
              <img
                src={medicinaIcon}
                alt="Medicina Prepagada"
              />
            </div>

            <div>
              <h2 className="allies-prepaid__title"> 
                Cajas de Compensación
              </h2>
              <p className="allies-prepaid__subtitle">
                2 entidades aliadas
              </p>
            </div>
          </div>

        </div>

        {/* GRID */}
        <div className="allies-prepaid__grid">
          {allies.map((item, index) => (
            <div className="allies-prepaid__card" key={index}>
              <div className="allies-prepaid__card-icon">
                <img
                  src={item.icon}
                  alt={item.name}
                />
              </div>
              <h3 className="allies-prepaid__card-title">
                {item.name}
              </h3>
              <span className="allies-prepaid__status">
                Convenio activo
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AlliesCaja;