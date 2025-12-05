import { useState } from "react";
import Habilidades from "./Habilidades";
//Componente que permite mostrar u ocultar las habilidades al hacer clic en un botón
type Props = {
  habilidades: string[];
};

export default function ToggleHabilidades({ habilidades }: Props) { //componente que recibe habilidades como prop
  const [mostrar, setMostrar] = useState(true); //Estado local de eventos para mostrar u ocultar las habilidades

  return ( 
    <section>
       {/* al hacer clic cambia el estado de mostrar a su opuesto */}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {mostrar && <Habilidades habilidades={habilidades} />}
      {/* Si mostrar es true, renderiza el componente Habilidades pasando las habilidades como prop */}
    </section>
  );
}
