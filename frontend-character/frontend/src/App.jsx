import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharacterForm from "./components/CharacterForm";
import CharacterList from "./components/CharacterList";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [view, setView] = useState("home");

  return (
    
    <div>
      <Navbar setView={setView} />
      

      {view === "home" && <Home />}
      {view === "create" && <CharacterForm />}
      {view === "list" && <CharacterList />}
      <ToastContainer position="top-right" autoClose={2000} theme="colored"/>
    </div>
    
  );
}

export default App;