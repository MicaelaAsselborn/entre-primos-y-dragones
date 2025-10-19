import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import forestImage from "../img/forest.jpg";
import forestAudio from "../audios/forest.mp3";

import Inventario from "../components/Inventario.jsx";

function Forest() {
  const navigate = useNavigate();

  const handleUsarPocion = () => {};

  useEffect(() => {
    const audio = new Audio(forestAudio);
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <main>
      <div className="image">
        <img src={forestImage} alt="Bosque" />
      </div>
      <div className="container-lg">
        <div className="botonera">
          <button onClick={() => navigate("/town")}>Pueblo</button>
          <button onClick={() => navigate("/mountain")}>Montaña</button>
        </div>
        <div className="botonera acciones">
          <button>Explorar</button>
          <button onClick={handleUsarPocion}>Usar poción</button>
        </div>
        <Inventario />
        <div className="texto">
          <p>
            Llegas al bosque, los gruñidos que se escuchan a lo lejos te
            recuerdan a los domingos en casa de la abuela.
          </p>
        </div>
      </div>
    </main>
  );
}
export default Forest;
