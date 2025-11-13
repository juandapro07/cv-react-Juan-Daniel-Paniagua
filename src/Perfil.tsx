import './Perfil.css'
import { PerfilData } from './data'

function Perfil() {
  const { descripcion, habilidades } = PerfilData
  return (
    <section className="perfil">
      <h2>Perfil Profesional</h2>
      <p>
        {descripcion}Soy una persona responsable, creativa y apasionada por la tecnología.
        Me gusta aprender nuevas herramientas, crear soluciones digitales y seguir mejorando como
        desarrollador web.
      </p>

      <h3>Habilidades</h3>
      <div className="skills">
        <span>{habilidades[0]}</span>
        <span>{habilidades[1]}</span>
        <span>{habilidades[2]}</span>
        <span>{habilidades[3]}</span>
        <span>{habilidades[4]}</span>
        <span>{habilidades[5]}</span>
      </div>
    </section>
  )
}

export default Perfil
