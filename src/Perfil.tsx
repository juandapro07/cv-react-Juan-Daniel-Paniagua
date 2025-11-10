import './Perfil.css'

function Perfil() {
  return (
    <section className="perfil">
      <h2>Perfil Profesional</h2>
      <p>
        Soy una persona responsable, creativa y apasionada por la tecnología.
        Me gusta aprender nuevas herramientas, crear soluciones digitales y seguir mejorando como
        desarrollador web.
      </p>

      <h3>Habilidades</h3>
      <div className="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Trabajo en equipo</span>
        <span>Responsabilidad</span>
        <span>Comunicación asertiva</span>
      </div>
    </section>
  )
}

export default Perfil
