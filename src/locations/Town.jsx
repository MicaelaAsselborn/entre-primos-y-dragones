import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import townImage from "../img/town.jpg";
import townAudio from "../audios/town.mp3";

import Inventario from "../components/Inventario";

function Town() {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(townAudio);
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  });

  return (
    <main>
      <div className="image">
        <img src={townImage} alt="Pueblo" />
      </div>
      <div className="container-lg">
        <div className="botonera">
          <button onClick={() => navigate("/shop")}>Tienda</button>
          <button onClick={() => navigate("/forest")}>Bosque</button>
        </div>
        <Inventario />
        <div className="texto">
          <p>
            La plaza principal bulle con la actividad de mis familiares. Entran
            y salen de las tiendas, desenvolviéndose en su rutina como si
            generaciones de endogamia fueran lo más normal del mundo.
          </p>
        </div>
      </div>
    </main>
  );
}
export default Town;
