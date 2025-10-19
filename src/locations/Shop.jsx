import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { comprarPocion } from "../store/stats.js";

import shopImage from "../img/shop.jpg";
import shopAudio from "../audios/shop.mp3";

import Inventario from "../components/Inventario.jsx";

function Shop() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleComprarPocion = () => {
    dispatch(comprarPocion());
  };

  useEffect(() => {
    const audio = new Audio(shopAudio);
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
        <img src={shopImage} alt="Tienda" />
      </div>
      <div className="container-lg">
        <div className="botonera">
          <button onClick={() => navigate("/town")}>Pueblo</button>
        </div>
        <div className="botonera acciones">
          <button onClick={handleComprarPocion}>Comprar poción</button>
        </div>
        <Inventario />
        <div className="texto">
          <p>
            Entras a la tienda. Tu prima te sonríe desde el mostrador, pero sus
            tres ojos no se alinean al mirarte.
          </p>
        </div>
      </div>
    </main>
  );
}
export default Shop;
