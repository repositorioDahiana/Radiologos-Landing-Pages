import logo from "../../assets/Iconos/logo-radiologos.png";
import icontec from "../../assets/Iconos/icontec.png";
import iqnet from "../../assets/Iconos/iqnet.png";
import supersalud from "../../assets/Iconos/supersalud.png";
import telefono from "../../assets/Iconos/telefono.png";
import email from "../../assets/Iconos/email.png";
import ubicacion from "../../assets/Iconos/ubicacion.png";
import google from "../../assets/Iconos/google.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo + descripción */}
        <div className="footer-col">
          <img
            src={logo}
            className="footer-logo"
            alt="Logo Radiologos Asociados"
          />

          <a
            href="https://www.google.com/search?q=radiologos+pereira&sca_esv=88d66a416da09828&biw=1536&bih=730&sxsrf=ANbL-n4hFbTcpVMD0Di2sz0YZqRlLp6AFw%3A1781234681918&ei=-XsraqLCN76FwbkP6vm5wQU&ved=0ahUKEwjiouij4ICVAxW-QjABHep8LlgQ4dUDCBI&uact=5&oq=radiologos+pereira&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnJhZGlvbG9nb3MgcGVyZWlyYTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDILEC4YgAQYxwEYrwFI4BtQ0gZY8hpwBXgBkAEAmAGHAqAB9BCqAQUwLjguNLgBA8gBAPgBAZgCEaAC8RHCAgoQABhHGNYEGLADwgIKECMYgAQYigUYJ8ICBBAjGCfCAg0QABiABBiKBRhDGLEDwgIQEC4YgAQYigUYQxjHARivAcICCBAAGIAEGLEDwgIGEAAYHhgNwgIFEAAY7wXCAgcQABiABBgNwgINEC4YgAQYDRjHARivAZgDAIgGAZAGCJIHBTUuNy41oAeUXrIHBTAuNy41uAfQEcIHBjAuMi4xNcgHXIAIAQ&sclient=gws-wiz-serp#sv=CAESzQEKuQEStgEKd0FNbjMteVNKMExpUDBwa0RoMktZaFcxQ2t5WVgxeHB6RHJIMTYyUExwa2NwMFRuMThPaG5EclREbEJoUThqMmduRnloWGhmY1dhY0I4V1FTLTMzQnJCZ29zby1tMEhqdlFpdTIwNTdEWEdwWDF3VUtyUDViUXE4EhdDSHdyYW83WEF1Q1d3YmtQXy1qUmtBTRoiQUpLTEZtSXFxUGxLVEtNalZQZnhZNDZqVjhNdVNFRmpWZxIEODA1MRoBMyoAMAA4AUAAGAAgjZXDpg9KAhAC"
            target="_blank"
            rel="noopener noreferrer"
            className="google-rating"
          >
            <img
              src={google}
              className="google-mini-logo"
              alt="Google"
            />

            <div className="google-stars">
              ★★★★★
            </div>

            <p className="google-text">
              Califícanos en Google
            </p>
          </a>
        </div>

        {/* Servicios */}
        <div className="footer-col">
          <ul>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/conocenos">Conócenos</a></li>
            <li><a href="/profesionales">Nuestros profesionales</a></li>
          </ul>

          <div className="footer-logos">
            <img src={icontec} className="logo-icontec" alt="Icontec" />
            <img src={iqnet} className="logo-iqnet" alt="IQNET" />
            <img src={supersalud} className="logo-supersalud" alt="Supersalud" />
          </div>
        </div>

        {/* Pacientes */}
        <div className="footer-col">
          <ul>
            <li><a href="/citas">Pide tu cita</a></li>
            <li><a href="/especialidades">Especialidades</a></li>
            <li>
              <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                Política de datos
              </a>
            </li>
            <li>
              <a href="/pqrs" target="_blank" rel="noopener noreferrer">
                PQRS
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-col">
          <h4>Contacto</h4>

          <ul className="contact-list">
            <li>
              <img src={telefono} alt="Teléfono" />
              <a href="tel:+6063402333">+606 340 23 33</a>
            </li>

            <li>
              <img src={email} alt="Email" />
              <a href="mailto:info@radiologos.co">info@radiologos.co</a>
            </li>

            <li>
              <img src={ubicacion} alt="Ubicación" />
              <a
                href="https://www.google.com/maps/place/Cedicaf+Pereira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pereira, Risaralda, Colombia
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* bottom */}
      <div className="footer-bottom">
        <p>© 2026 Radiologos Asociados. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
}

export default Footer;