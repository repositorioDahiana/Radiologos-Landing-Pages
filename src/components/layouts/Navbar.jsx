import logoCedicaf from "../../assets/Iconos/logo-cedicaf.png";
import logoDiaxme from "../../assets/Iconos/logo-dioxme.png";
import consultarCitaIcon from "../../assets/Iconos/consultarita.png";
import telefonoIcon from "../../assets/Iconos/telefono.png";
import resultadosIcon from "../../assets/Iconos/resultados.png";
import pseIcon from "../../assets/Iconos/pse.png";

function Navbar() {
  return (
    <div className="topbar-clean w-full">
      {/* Cambiamos max-w-7xl mx-auto por w-full y subimos el padding horizontal a px-6 */}
      <div className="topbar-inner w-full px-6 py-2">
        {/* Logos */}
        <div className="topbar-logos">
          <a
            href="https://cedicaf.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoCedicaf}
              className="topbar-logo cedicaf-logo"
              alt="Cedicaf"
            />
          </a>

          <a
            href="https://diaxme.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logoDiaxme}
              className="topbar-logo diaxme-logo"
              alt="Dioxme"
            />
          </a>
        </div>

        {/* Opciones */}
        <div className="topbar-actions">
          {/* ... Todo el resto de tus opciones (Consultar cita, Teléfono, Resultados, PSE) queda exactamente igual ... */}
          <a
            href="https://appcedira.com/solicitarcita/public/consultar-cita"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link"
          >
            <div className="icon-box">
              <img src={consultarCitaIcon} alt="Consultar cita" />
            </div>
            <span className="top-link-text hide-mobile-sm">Consultar Cita</span>
          </a>

          <a href="tel:+6063402333" className="top-link phone-link">
            <div className="icon-box">
              <img src={telefonoIcon} alt="Teléfono" />
            </div>
            <span className="top-link-text hide-mobile-md">+606 340 23 33</span>
          </a>

          <a
            href="https://nexxa.com.co/portal/login"
            target="_blank"
            rel="noopener noreferrer"
            className="top-link"
          >
            <div className="icon-box">
              <img src={resultadosIcon} alt="Ver resultados" />
            </div>
            <span className="top-link-text hide-mobile-sm">Ver Resultados</span>
          </a>

          <a
            href="https://portalpagos.davivienda.com/#/comercio/11396/RADIOLOGOS"
            target="_blank"
            rel="noopener noreferrer"
            className="pse-button"
          >
            <div className="pse-icon-zone">
              <img src={pseIcon} alt="PSE" />
            </div>
            <span className="pse-text hide-mobile-sm">
              Pagos Seguros en Línea
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;