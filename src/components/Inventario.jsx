import { useSelector } from "react-redux";

function Inventario() {
  const { salud, oro, pociones } = useSelector((state) => state.stats);

  return (
    <div className="inventario">
      <p>
        <span>Salud:</span> {salud}
      </p>
      <p>
        <span>Oro:</span> {oro}
      </p>
      <p>
        <span>Pociones:</span> {pociones}
      </p>
    </div>
  );
}

export default Inventario;
