import { useState } from "react";
import { createCharacter } from "../services/api";
import { toast } from "react-toastify";

function CharacterForm() {

  const [form, setForm] = useState({
    name: "",
    identification: "",
    image: "",
    role: "",
    description: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!form.identification.trim()) {
      newErrors.identification = "La identificación es obligatoria";
    }

    if (!form.image.trim()) {
      newErrors.image = "La imagen es obligatoria";
    } else if (!form.image.startsWith("http")) {
      newErrors.image = "Debe ser una URL válida";
    }

    if (!form.role.trim()) {
      newErrors.role = "El rol es obligatorio";
    }

    if (!form.description.trim()) {
      newErrors.description = "La descripción es obligatoria";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.warning("⚠️ Completa correctamente el formulario");
      return;
    }

    createCharacter(form)
      .then(() => {
        toast.success("Personaje creado con éxito.");

        setForm({
          name: "",
          identification: "",
          image: "",
          role: "",
          description: ""
        });

        setErrors({});
      })
      .catch(() => {
        toast.error("Error al crear personaje. ");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Crear personaje</h2>

      <form className="card p-4 shadow" onSubmit={handleSubmit}>

        {/* NOMBRE */}
        <input
          className={`form-control mb-2 ${errors.name ? "is-invalid" : ""}`}
          placeholder="Nombre"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <div className="invalid-feedback">{errors.name}</div>

        {/* IDENTIFICACIÓN */}
        <input
          className={`form-control mb-2 ${errors.identification ? "is-invalid" : ""}`}
          placeholder="Identificación"
          value={form.identification}
          onChange={(e) =>
            setForm({ ...form, identification: e.target.value })
          }
        />
        <div className="invalid-feedback">{errors.identification}</div>

        {/* IMAGEN */}
        <input
          className={`form-control mb-2 ${errors.image ? "is-invalid" : ""}`}
          placeholder="URL Imagen"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />
        <div className="invalid-feedback">{errors.image}</div>

        {/* ROL */}
        <input
          className={`form-control mb-2 ${errors.role ? "is-invalid" : ""}`}
          placeholder="Rol"
          value={form.role}
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        />
        <div className="invalid-feedback">{errors.role}</div>

        {/* DESCRIPCIÓN */}
        <textarea
          className={`form-control mb-2 ${errors.description ? "is-invalid" : ""}`}
          placeholder="Descripción"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
        <div className="invalid-feedback">{errors.description}</div>

        <button className="btn btn-primary mt-3">
          Guardar
        </button>

      </form>
    </div>
  );
}

export default CharacterForm;