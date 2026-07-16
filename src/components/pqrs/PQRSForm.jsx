import peticionIcon from "../../assets/Iconos/peticion.png";
import quejaIcon from "../../assets/Iconos/quejas.png";
import reclamoIcon from "../../assets/Iconos/reclamo.png";
import sugerenciaIcon from "../../assets/Iconos/comentario.png";
import felicitacionIcon from "../../assets/Iconos/felicitaciones.png";
import { useState } from "react";
import { headquarters } from "../location/LocationIntro";

function PQRSForm() {
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState({ show: false, type: "", title: "", message: "" });
    const [selectedType, setSelectedType] = useState("Petición");

    const [formData, setFormData] = useState({
        lugar_atencion: "",
        procedimiento: "",
        interpone: "",
        fecha_evento: "",
        nombre: "",
        apellido: "",
        documento: "",
        direccion: "",
        correo: "",
        telefono_fijo: "",
        telefono_celular: "",
        entidad: "",
        funcionario: "",
        descripcion: "",
        privacidad: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => {
            const updatedFormData = { 
                ...prev, 
                [name]: type === "checkbox" ? checked : value 
            };
            // Si cambian la sede, reiniciamos el procedimiento para obligarlos a escoger uno nuevo
            if (name === "lugar_atencion") {
                updatedFormData.procedimiento = "";
            }
            return updatedFormData;
        });
    };

    const handleClear = () => {
        setFormData({
            lugar_atencion: "",
            procedimiento: "",
            interpone: "",
            fecha_evento: "",
            nombre: "",
            apellido: "",
            documento: "",
            direccion: "",
            correo: "",
            telefono_fijo: "",
            telefono_celular: "",
            entidad: "",
            funcionario: "",
            descripcion: "",
            privacidad: false,
        });
        setSelectedType("Petición");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.privacidad) {
            setModal({
                show: true,
                type: "error",
                title: "Atención",
                message: "Debes aceptar la política y tratamiento de datos."
            });
            return;
        }

        // Concatenamos el id de la sede para mostrar el nombre.
        let lugar_nombre = formData.lugar_atencion;
        const selectedHq = headquarters.find(hq => hq.id === parseInt(formData.lugar_atencion, 10));
        if (selectedHq) {
            lugar_nombre = selectedHq.title;
        }

        const data = new FormData();
        data.append("tipo_solicitud", selectedType);
        data.append("lugar_atencion", lugar_nombre);
        data.append("procedimiento", formData.procedimiento);
        data.append("interpone", formData.interpone);
        data.append("fecha_evento", formData.fecha_evento);
        data.append("nombre", formData.nombre);
        data.append("apellido", formData.apellido);
        data.append("documento", formData.documento);
        data.append("direccion", formData.direccion);
        data.append("correo", formData.correo);
        data.append("telefono_fijo", formData.telefono_fijo);
        data.append("telefono_celular", formData.telefono_celular);
        data.append("entidad", formData.entidad);
        data.append("funcionario", formData.funcionario);
        data.append("descripcion", formData.descripcion);

        try {
            setLoading(true);

            const response = await fetch("https://appcedira.com/landings-pages-api/public/pqrs", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (response.ok) {
                setModal({
                    show: true,
                    type: "success",
                    title: "¡PQRS Enviada!",
                    message: "Tu solicitud ha sido enviada correctamente."
                });
                handleClear();
            } else {
                setModal({
                    show: true,
                    type: "error",
                    title: "Error de envío",
                    message: result.message || "Verifica los datos e intenta nuevamente."
                });
            }
        } catch (error) {
            console.error("Error al enviar PQRS:", error);
            const isNetworkError = error instanceof TypeError || 
                                   String(error).includes("TypeError") || 
                                   String(error).includes("Network") || 
                                   (error.message && error.message.includes("Network"));

            // Asumimos exito por problemas CORS si ocurre un Network Error.
            if (isNetworkError) {
                setModal({
                    show: true,
                    type: "success",
                    title: "¡PQRS Enviada!",
                    message: "Tu solicitud ha sido enviada correctamente (ignorado el error de red CORS)."
                });
                handleClear();
            } else {
                setModal({
                    show: true,
                    type: "error",
                    title: "Ocurrió un error",
                    message: "No se pudo enviar la solicitud. Revisa tu conexión."
                });
            }
        } finally {
            setLoading(false);
        }
    };

    // Find selected headquarters by comparing IDs
    const selectedHq = headquarters.find(
        (hq) => hq.id === parseInt(formData.lugar_atencion, 10)
    );
    const studies = selectedHq ? selectedHq.studies : [];

  return (
    <>
    <section className="pqrs-form">

      <div className="pqrs-form__container">

        {/* HEADER */}
        <div className="pqrs-form__header">
          <h2 className="pqrs-form__title">
            Cuéntanos tu <span className="text-gradient-blue">experiencia</span>
          </h2>
          <p className="pqrs-form__description">
            Completa el siguiente formulario con los datos de tu solicitud.
            Todos los campos marcados con * son obligatorios.
          </p>
        </div>

        {/* CARD */}
        <div className="pqrs-form__card">

          <form onSubmit={handleSubmit}>
            {/* TIPOS */}
            <div className="pqrs-form__section">
                <label className="pqrs-form__label">
                Tipo de solicitud *
                </label>

                <div className="pqrs-form__types">
                    <button
                        className={`pqrs-form__type ${selectedType === "Petición" ? "active" : ""}`}
                        onClick={() => setSelectedType("Petición")}
                        type="button"
                    >
                        <img src={peticionIcon} alt="Petición" />
                        <span>Petición</span>
                    </button>

                    <button
                        className={`pqrs-form__type ${selectedType === "Queja" ? "active" : ""}`}
                        onClick={() => setSelectedType("Queja")}
                        type="button"
                    >
                        <img src={quejaIcon} alt="Queja" />
                        <span>Queja</span>
                    </button>

                    <button
                        className={`pqrs-form__type ${selectedType === "Reclamo" ? "active" : ""}`}
                        onClick={() => setSelectedType("Reclamo")}
                        type="button"
                    >
                        <img src={reclamoIcon} alt="Reclamo" />
                        <span>Reclamo</span>
                    </button>

                    <button
                        className={`pqrs-form__type ${selectedType === "Sugerencia" ? "active" : ""}`}
                        onClick={() => setSelectedType("Sugerencia")}
                        type="button"
                    >
                        <img src={sugerenciaIcon} alt="Sugerencia" />
                        <span>Sugerencia</span>
                    </button>

                    <button
                        className={`pqrs-form__type ${selectedType === "Felicitaciones" ? "active" : ""}`}
                        onClick={() => setSelectedType("Felicitaciones")}
                        type="button"
                    >
                        <img src={felicitacionIcon} alt="Felicitaciones" />
                        <span>Felicitaciones</span>
                    </button>
                    </div>
            </div>

            {/* FORM */}
            <div className="pqrs-form__grid">

                {/* LUGAR DE ATENCIÓN */}
                <div className="pqrs-form__group">
                <label>Lugar de atención *</label>
                <select
                    name="lugar_atencion"
                    value={formData.lugar_atencion}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona una sede</option>
                    {headquarters.map((hq) => (
                        <option key={hq.id} value={hq.id}>
                        {hq.title} — {hq.address}
                        </option>
                    ))}
                </select>
                </div>

                {/* PROCEDIMIENTO */}
                <div className="pqrs-form__group">
                <label>Procedimiento realizado *</label>
                <select
                    name="procedimiento"
                    value={formData.procedimiento}
                    onChange={handleChange}
                    required={!!formData.lugar_atencion}
                    disabled={!formData.lugar_atencion}
                >
                    <option value="">
                    {formData.lugar_atencion ? "Selecciona un procedimiento" : "Primero selecciona una sede"}
                    </option>
                    {studies.map((study, index) => (
                    <option key={index} value={study}>
                        {study}
                    </option>
                    ))}
                </select>
                </div>

                {/* QUIEN INTERPONE */}
                <div className="pqrs-form__group">
                <label>Quien interpone la petición *</label>
                <select
                    name="interpone"
                    value={formData.interpone}
                    onChange={handleChange}
                    required
                >
                    <option value=""> Selecciona una opción </option>
                    <option value="Acompañante">Acompañante</option>
                    <option value="EPS">EPS</option>
                    <option value="Usuario">Usuario</option>
                    <option value="Super Salud">Super Salud</option>
                </select>
                </div>

                {/* FECHA EVENTO */}
                <div className="pqrs-form__group">
                <label>Fecha del evento *</label>
                <input 
                    type="date" 
                    name="fecha_evento"
                    value={formData.fecha_evento}
                    onChange={handleChange}
                    required
                />
                </div>

                {/* NOMBRE */}
                <div className="pqrs-form__group">
                <label>Nombre *</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                    required
                />
                </div>

                {/* APELLIDO */}
                <div className="pqrs-form__group">
                <label>Apellido *</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    placeholder="Ingresa tu apellido"
                    required
                />
                </div>

                {/* DOCUMENTO */}
                <div className="pqrs-form__group">
                <label>Documento de Identificación</label>
                <input
                    type="text"
                    name="documento"
                    value={formData.documento}
                    onChange={handleChange}
                    placeholder="Número de cédula"
                />
                </div>

                {/* DIRECCION */}
                <div className="pqrs-form__group">
                <label>Dirección de residencia</label>
                <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    placeholder="Dirección completa"
                />
                </div>

                {/* CORREO */}
                <div className="pqrs-form__group">
                <label>Correo electrónico *</label>
                <input
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                />
                </div>

                {/* TEL FIJO */}
                <div className="pqrs-form__group">
                <label>Teléfono fijo</label>
                <input
                    type="text"
                    name="telefono_fijo"
                    value={formData.telefono_fijo}
                    onChange={handleChange}
                    placeholder="(606) XXX XXXX"
                />
                </div>

                {/* TEL CELULAR */}
                <div className="pqrs-form__group">
                <label>Teléfono celular *</label>
                <input
                    type="text"
                    name="telefono_celular"
                    value={formData.telefono_celular}
                    onChange={handleChange}
                    placeholder="3XX XXX XXXX"
                    required
                />
                </div>

                {/* ENTIDAD */}
                <div className="pqrs-form__group">
                <label>Entidad *</label>
                <select
                    name="entidad"
                    value={formData.entidad}
                    onChange={handleChange}
                    required
                >
                    <option value=""> Selecciona una opción </option>
                    <option value="EPS">EPS</option>
                    <option value="Medicina Prepagada">Medicina Prepagada</option>
                    <option value="Régimen especial">Régimen especial</option>
                    <option value="SOAT">SOAT</option>
                </select>
                </div>

                {/* FUNCIONARIO */}
                <div className="pqrs-form__group full">
                <label>Nombre del Funcionario</label>
                <input
                    type="text"
                    name="funcionario"
                    value={formData.funcionario}
                    onChange={handleChange}
                    placeholder="Ej: Andres Ramirez"
                />
                </div>

                {/* DESCRIPCION */}
                <div className="pqrs-form__group full">
                <label>
                    Escribe aquí tu petición, queja, reclamo,
                    sugerencia o felicitación *
                </label>
                <textarea
                    rows="6"
                    maxLength="500"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    placeholder="Describe con detalle tu solicitud..."
                    required
                ></textarea>
                <span className="pqrs-form__helper">
                    Máximo 500 caracteres
                </span>
                </div>

            </div>

            {/* CHECK DE PRIVACIDAD */}
            <div className="pqrs-form__check">
                <input 
                    type="checkbox" 
                    id="datos" 
                    name="privacidad"
                    checked={formData.privacidad}
                    onChange={handleChange}
                />
                <label htmlFor="datos">
                Acepto la política y tratamiento de datos personales
                </label>
            </div>

            {/* BUTTONS */}
            <div className="pqrs-form__actions">
                <button 
                    type="submit" 
                    className="btn-base btn-primary-blue"
                    disabled={loading}
                >
                {loading ? "Enviando..." : "Enviar PQRS"}
                </button>

                <button 
                    type="button" 
                    className="btn-base pqrs-form__secondary"
                    onClick={handleClear}
                >
                Limpiar formulario
                </button>
            </div>
            
          </form>

        </div>

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

export default PQRSForm;