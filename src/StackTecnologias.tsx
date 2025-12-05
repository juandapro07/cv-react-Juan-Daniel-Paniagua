import { useState } from "react";
import FormularioTecnologia from "./FormularioTecnologia";
import  "./stacktecnologias.css"

export default function StackTecnologias() {
  const [tecnologias, setTecnologias] = useState<string[]>([]);
  const [mostrarFormulario, setMostrarFormulario] = useState<boolean>(false);

  const agregarTecnologia = (nuevaTec: string) => {
    setTecnologias([...tecnologias, nuevaTec]);
    setMostrarFormulario(false);
  };

  return (
    <div className="stack-container">
      <h1 className="stack-title">TECNOLOGÍAS</h1>

      <button
        onClick={() => setMostrarFormulario(!mostrarFormulario)}
        className="stack-btn"
      >
        {mostrarFormulario ? "Cerrar Formulario" : "Agregar Tecnología"}
      </button>

      {mostrarFormulario && (
        <FormularioTecnologia onAgregar={agregarTecnologia} />
      )}

      {tecnologias.length > 0 ? (
        <ul className="stack-list">
          {tecnologias.map((tec, index) => (
            <li key={index}>{tec}</li>
          ))}
        </ul>
      ) : (
        <p className="stack-empty">Aún no agregas tecnologías.</p>
      )}
    </div>
  );
}
