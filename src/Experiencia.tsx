import './Experiencia.css'
import { ExperienciaData } from './data'

function Experiencia() {
const { experiencia1, experiencia2 } = ExperienciaData

return ( <section className="experiencia"> <h2>Experiencia</h2>

  <article className="exp-item">
    <h3>{experiencia1.titulo}</h3>
    <p>{experiencia1.descripcion}</p>
  </article>

  <article className="exp-item">
    <h3>{experiencia2.titulo}</h3>
    <p>{experiencia2.descripcion}</p>
  </article>
</section>


)
}

export default Experiencia
