import { useState } from "react";
import { toast } from "react-toastify";
import { deleteCharacter, updateCharacter } from "../services/api";

function CharacterModal({ character, onClose }) {

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: character.name,
    role: character.role,
    description: character.description,
    image: character.image
  });

  const handleUpdate = () => {
    updateCharacter(character.id, form).then(() => {
      //alert("Actualizado");
      toast.info("Personaje actualizado con éxito");
      setIsEditing(false);
      onClose();
    });
  };

  const handleDelete = () => {
    deleteCharacter(character.id).then(() => {
      //alert("Eliminado");
      toast.error("Personaje eliminado con éxito");
      onClose();
    });
  };

  return (
    <>
      {/* Overlay oscuro */}
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">

            {/* HEADER */}
            <div className="modal-header">
              <h5 className="modal-title">
                {isEditing ? "Editar personaje" : character.name}
              </h5>
              <button className="btn-close" onClick={onClose}></button>
            </div>

            {/* BODY */}
            <div className="modal-body">

              {/*MODO VISUALIZACIÓN */}
              {!isEditing && (
                <div className="text-center">
                  <img
                    src={character.image}
                    className="img-fluid rounded mb-3"
                    style={{ maxHeight: "300px", objectFit: "cover" }}
                  />

                  <p>{character.description}</p>
                  <p><strong>Rol:</strong> {character.role}</p>
                  <p><strong>Fecha:</strong> {character.createdAt}</p>
                </div>
              )}

              {/*MODO EDICIÓN */}
              {isEditing && (
                <>
                  <input
                    className="form-control mb-3"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Nombre"
                  />

                  <input
                    className="form-control mb-3"
                    value={form.role}
                    onChange={(e) =>
                      setForm({ ...form, role: e.target.value })
                    }
                    placeholder="Rol"
                  />

                  <input
                    className="form-control mb-3"
                    value={form.image}
                    onChange={(e) =>
                      setForm({ ...form, image: e.target.value })
                    }
                    placeholder="URL Imagen"
                  />

                  <textarea
                    className="form-control mb-3"
                    value={form.description}
                    onChange={(e) =>
                      setForm({ ...form, description: e.target.value })
                    }
                    placeholder="Descripción"
                  />
                </>
              )}

            </div>

            {/*FOOTER */}
            <div className="modal-footer">

              {!isEditing ? (
                <>
                  <button
                    className="btn btn-warning"
                    onClick={() => setIsEditing(true)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={handleDelete}
                  >
                    Eliminar
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={onClose}
                  >
                    Cerrar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-success"
                    onClick={handleUpdate}
                  >
                    Guardar
                  </button>

                  <button
                    className="btn btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancelar
                  </button>
                </>
              )}

            </div>

          </div>
        </div>
      </div>

      {/*Fondo oscuro detrás */}
      <div className="modal-backdrop fade show"></div>
    </>
  );
}

export default CharacterModal;