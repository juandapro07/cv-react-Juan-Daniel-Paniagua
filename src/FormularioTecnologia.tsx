import { useState } from "react";
import "./FormularioTecnologias.css"

type Props = {
  onAgregar: (tecnologia: string) => void;
};

export default function FormularioTecnologia({ onAgregar }: Props) {
  const [tecnologia, setTecnologia] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tecnologia.trim() === "") return;
    onAgregar(tecnologia);
    setTecnologia("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-tecnologia">
      <h2 className="form-titulo">Agregar Tecnología</h2>

      <input
        type="text"
        value={tecnologia}
        onChange={(e) => setTecnologia(e.target.value)}
        placeholder="Escribe una tecnología..."
        className="form-input"
      />

      <button type="submit" className="form-boton">
        Agregar
      </button>
    </form>
  );
}

