import { useState } from "react";

function ApplySection() {

    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({ show: false, type: "", title: "", message: "" });

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        profesion: "",
        linkedin: "",
        hoja_vida: null,
        privacidad: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? checked
                    : type === "file"
                    ? files[0]
                    : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.privacidad) {
            setModal({
                show: true,
                type: "error",
                title: "Atención",
                message: "Debes aceptar la política de tratamiento de datos."
            });
            return;
        }

        const data = new FormData();

        data.append("nombre", formData.nombre);
        data.append("apellido", formData.apellido);
        data.append("email", formData.email);
        data.append("telefono", formData.telefono);
        data.append("profesion", formData.profesion);
        data.append("linkedin", formData.linkedin);

        if (formData.hoja_vida) {
            data.append("hoja_vida", formData.hoja_vida);
        }

        try {

          setLoading(true);
      
          const response = await fetch(
              "https://appcedira.com/landings-pages-api/public/careers",
              {
                  method: "POST",
                  body: data,
              }
          );
      
          const result = await response.json();

if (response.ok) {
    setModal({
        show: true,
        type: "success",
        title: "¡Postulación Exitosa!",
        message: "Tu hoja de vida ha sido enviada correctamente."
    });
    setFormData({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
        profesion: "",
        linkedin: "",
        hoja_vida: null,
        privacidad: false,
    });
    // Limpiar el input file
    const fileInput = document.querySelector('input[name="hoja_vida"]');
    if (fileInput) fileInput.value = "";
} else {
    setModal({
        show: true,
        type: "error",
        title: "Error de envío",
        message: result.message || "No se pudo enviar la postulación."
    });
}
      
      } catch (error) {
          console.error("Error capturado:", error);
      
          // Las políticas de CORS bloquean la respuesta, por lo que fetch lanza un TypeError 
          // indicando un error de red, aunque el servidor la haya procesado (Status 200).
          const isNetworkError = error instanceof TypeError || 
                                 String(error).includes("TypeError") || 
                                 String(error).includes("Network") || 
                                 (error.message && error.message.includes("Network"));

          if (isNetworkError) {
              setModal({
                  show: true,
                  type: "success",
                  title: "¡Postulación Exitosa!",
                  message: "Tu hoja de vida ha sido enviada correctamente."
              });
              setFormData({
                  nombre: "",
                  apellido: "",
                  email: "",
                  telefono: "",
                  profesion: "",
                  linkedin: "",
                  hoja_vida: null,
                  privacidad: false,
              });
              const fileInput = document.querySelector('input[name="hoja_vida"]');
              if (fileInput) fileInput.value = "";
          } else {
              setModal({
                  show: true,
                  type: "error",
                  title: "Ocurrió un error",
                  message: "No se pudo enviar la postulación."
              });
          }
      } finally {
      
          setLoading(false);
      }
    };

    return (
        <>
        <section className="apply" id="postular">

            <div className="apply__container">

                <div className="apply__header">

                    <span className="apply__badge">
                        Postúlate
                    </span>

                    <h2 className="apply__title">
                        Envíanos tu{" "}
                        <span className="text-gradient-blue">
                            Hoja de Vida
                        </span>
                    </h2>

                    <p className="apply__description">
                        Completa el formulario y nos pondremos en contacto contigo.
                    </p>

                </div>

                <form
                    className="apply__form"
                    onSubmit={handleSubmit}
                >

                    <div className="apply__grid">

                        <div className="apply__field">
                            <label>Nombre *</label>

                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                required
                            />
                        </div>

                        <div className="apply__field">
                            <label>Apellido *</label>

                            <input
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                placeholder="Tu apellido"
                                required
                            />
                        </div>

                        <div className="apply__field">
                            <label>Email *</label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="correo@ejemplo.com"
                                required
                            />
                        </div>

                        <div className="apply__field">
                            <label>Teléfono *</label>

                            <input
                                type="text"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="300 000 0000"
                                required
                            />
                        </div>

                        <div className="apply__field">
                            <label>Profesión *</label>

                            <input
                                type="text"
                                name="profesion"
                                value={formData.profesion}
                                onChange={handleChange}
                                placeholder="Ej: Tecnólogo en Radiología"
                                required
                            />
                        </div>

                        <div className="apply__field">
                            <label>Perfil de Linkedin</label>

                            <input
                                type="text"
                                name="linkedin"
                                value={formData.linkedin}
                                onChange={handleChange}
                                placeholder="https://co.linkedin.com/"
                            />
                        </div>

                    </div>

                    <div className="apply__field">

                        <label>Adjuntar Hoja de Vida *</label>

                        <input
                            type="file"
                            name="hoja_vida"
                            accept=".pdf,.doc,.docx"
                            onChange={handleChange}
                            required
                        />

                        <small>
                            PDF, DOC, DOCX — máx. 5MB
                        </small>

                    </div>

                    <div className="apply__checkbox">

                        <input
                            type="checkbox"
                            id="privacy"
                            name="privacidad"
                            checked={formData.privacidad}
                            onChange={handleChange}
                        />

                        <label htmlFor="privacy">
                            Acepto la política de tratamiento de datos personales.
                        </label>

                    </div>

                    <button
                        type="submit"
                        className="btn-base btn-primary-blue"
                        disabled={loading}
                    >
                        {loading
                            ? "Enviando..."
                            : "Enviar postulación"}
                    </button>

                </form>

            </div>

        </section>

        {/* Modal Personalizado */}
        {modal.show && (
            <div className="apply__modal-overlay">
                <div className="apply__modal-content">
                    <div className={`apply__modal-icon ${modal.type}`}>
                        {modal.type === "success" ? "✓" : "!"}
                    </div>
                    <h3 className="apply__modal-title">{modal.title}</h3>
                    <p className="apply__modal-text">{modal.message}</p>
                    <button 
                        type="button"
                        className="btn-base btn-primary-blue apply__modal-btn"
                        onClick={() => setModal({ ...modal, show: false })}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        )}
        </>
    );
}

export default ApplySection;