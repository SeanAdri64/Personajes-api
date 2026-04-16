import { useEffect, useState } from "react";
import { getCharacters } from "../services/api";
import CharacterModal from "./CharacterModal";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [sort, setSort] = useState("date");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    getCharacters(sort).then(res => setCharacters(res.data));
  }, [sort]);

  return (
    <div className="container mt-4">

      {/* 🔽 ORDENAMIENTO */}
      <div className="row mb-3">
        <div className="col-md-4">
          <select
            className="form-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="date">Ordenar por fecha</option>
            <option value="name">Ordenar por nombre</option>
          </select>
        </div>
      </div>

      {/* 🧱 GRID DE CARDS */}
      <div className="row">
        {characters.map((c) => (
          <div className="col-md-4 mb-4" key={c.id}>
            <div
              className="card shadow h-100"
              onClick={() => setSelected(c)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={c.image}
                className="card-img-top"
                style={{ height: "220px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <p className="card-text text-muted">{c.role}</p>
              </div>

              <div className="card-footer text-muted">
                <small>{c.createdAt}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🪟 MODAL */}
      {selected && (
        <CharacterModal
          character={selected}
          onClose={() => {
            setSelected(null);
            getCharacters(sort).then(res => setCharacters(res.data));
          }}
        />
      )}
    </div>
  );
}

export default CharacterList;