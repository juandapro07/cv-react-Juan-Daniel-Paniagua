import "./Habilidades.css"
type Props = {
  habilidades: string[];
};

export default function Habilidades({ habilidades }: Props) {
  return (
    <div className="perfil">
      <h2>HABILIDADES</h2>

      <h3>Mis habilidades principales</h3>

      <div className="skills">
        {habilidades.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}
