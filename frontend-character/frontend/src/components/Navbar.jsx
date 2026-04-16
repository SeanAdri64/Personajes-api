function Navbar({ setView }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand">Invincible App</span>

      <div className="ms-auto">
        <button className="btn btn-outline-light me-2"
          onClick={() => setView("home")}>
          Inicio
        </button>

        <button className="btn btn-outline-light me-2"
          onClick={() => setView("create")}>
          Crear
        </button>

        <button className="btn btn-warning"
          onClick={() => setView("list")}>
          Personajes
        </button>
      </div>
    </nav>
  );
}

export default Navbar;