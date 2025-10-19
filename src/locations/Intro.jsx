import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import introAudio from "../audios/endGame.mp3";

function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const audio = new Audio(introAudio);
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  });
  return (
    <main>
      <div className="intro">
        <p>
          Érase una vez un pueblo muy normal con un problema muy anormal: las
          mujeres apenas podían quedar embarazadas, y cuando lo lograban, esos
          embarazos rara vez llegaban a término. Ni enfermedades ni maldiciones
          explicaban por qué la población se reducía año tras año.
        </p>
        <p>
          Hasta que el chamán del pueblo —que también era el borracho del
          pueblo— tuvo una revelación en medio de una resaca divina: si todas
          las mujeres se alimentaban del huevo dorado del Gran Dragón de la Gran
          Montaña, recuperarían la fertilidad perdida.
        </p>
        <p>
          Los hombres, desesperados por salvar su comunidad, organizaron una
          expedición a la montaña. Encontraron el nido desprotegido —el dragón,
          confiado en su temible reputación, había salido de caza— y robaron el
          enorme huevo dorado.
        </p>
        <p>
          El regreso fue triunfal. Hicieron un festín con el huevo, y
          efectivamente, la fertilidad regresó al pueblo. Pero su alegría poco
          duró.
        </p>
        <p>
          El Gran Dragón volvió y encontró su nido vacío. Siguiendo el rastro
          hasta el pueblo, descubrió los restos de su única cría. En un rugido
          que partió el cielo, juró venganza: "Nadie volverá a salir de este
          pueblo. Si veo a alguien más allá del río, lo reduciré a cenizas, como
          hicieron con mi hijo".
        </p>
        <p>
          La maldición funcionó. Generación tras generación, cualquiera que
          intentaba escapar acababa chamuscado. Con el tiempo, los habitantes se
          vieron forzados a buscar pareja dentro del pueblo... luego entre
          vecinos cercanos... después entre familias conocidas... y
          eventualmente, entre los únicos disponibles: sus propios parientes.
        </p>
        <p>
          Siglos después, el resultado es evidente: brazos extras, ojos
          desalineados, posturas que desafían la física. Lo llaman "herencia
          familiar", pero en realidad es el precio de generaciones de relaciones
          entre primos, tíos y sobrinos.
        </p>
        <p>
          Yo soy la excepción. Dos brazos, dos piernas, una nariz... todo en su
          sitio. Soy, sin duda, el mejor espécimen genético en décadas. Y no
          pienso quedarme atrapado aquí, eligiendo novia entre mis parientes.
          Voy a matar al dragón, voy a salir de este pueblo y voy a encontrar
          una mujer cuyo árbol genealógico no sea un bonsái.
        </p>
        <p>¿Ya mencioné que soy bastante guapo?</p>
        <button onClick={() => navigate("/town")}>Comenzar</button>
      </div>
    </main>
  );
}

export default Intro;
