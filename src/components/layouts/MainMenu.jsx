import { useState } from "react";
import { Link } from "react-router-dom";
import logoRadiologos from "../../assets/Iconos/logo-radiologos.png";
import resonanciaIcon from "../../assets/Iconos/resonancia.png";

function MainMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  return (
    <nav className="main-navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Link to="/" className="logo">
          <img
            src={logoRadiologos}
            className="h-12"
            alt="Logo Radiólogos Asociados"
          />
        </Link>

        <button
          className="menu-toggle md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <ul className={`menu-items ${menuOpen ? "menu-open" : ""}`}>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("quienes")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <Link to="/about">Quiénes Somos</Link>

            <ul className={`submenu ${submenu === "quienes" ? "show" : ""}`}>
              <li>
                <Link to="/company">Nuestra Empresa</Link>
              </li>
              <li>
                <Link to="/careers">Trabaje con Nosotros</Link>
              </li>
              <li>
                <Link to="/especialistas">Especialistas</Link>
              </li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("servicios")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <span>Servicios</span>

            <ul className={`submenu ${submenu === "servicios" ? "show" : ""}`}>
              <li>
                <Link to="/corazon">Centro Médico del Corazón</Link>
              </li>
              <li>
                <Link to="/mujer">Centro Médico de la Mujer</Link>
              </li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("paciente")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <span>Paciente</span>

            <ul className={`submenu ${submenu === "paciente" ? "show" : ""}`}>
              <li>
                <Link to="/polizas">Derechos y Deberes</Link>
              </li>
              <li>
                <Link to="/convenios">Políticas de Seguridad</Link>
              </li>
              <li>
                <Link to="/caja">PQRSF</Link>
              </li>
            </ul>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setSubmenu("aliados")}
            onMouseLeave={() => setSubmenu(null)}
          >
            <span>Aliados</span>

            <ul className={`submenu ${submenu === "aliados" ? "show" : ""}`}>
              <li>
                <Link to="/prepagada">Medicina Prepagada</Link>
              </li>
              <li>
                <Link to="/polizas">Pólizas</Link>
              </li>
              <li>
                <Link to="/convenios">Convenios Empresas</Link>
              </li>
              <li>
                <Link to="/caja">Caja de Compensación</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/sedes">Sedes</Link>
          </li>

          <li>
            <a
              href="https://appcedira.com/solicitarcita/public/solicitud-examen"
              target="_blank"
              rel="noopener noreferrer"
              className="agenda-btn"
            >
              <img src={resonanciaIcon} alt="Agendar cita" />
              Agenda tu cita
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;