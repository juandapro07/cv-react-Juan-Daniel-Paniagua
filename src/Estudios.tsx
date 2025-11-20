import './Estudios.css'
import { EstudiosData } from './data'

function Estudios() {
const { estudio1, estudio2 } = EstudiosData

return ( <section className="estudios"> <h2>Estudios</h2>

  <article className="est-item">
    <h3>{estudio1.titulo}</h3>
    <p>
      <strong>{estudio1.institucion}</strong> — {estudio1.año}
    </p>
  </article>

  <article className="est-item">
    <h3>{estudio2.titulo}</h3>
    <p>
      <strong>{estudio2.institucion}</strong> — {estudio2.año}
    </p>
  </article>
</section>

)
}

export default Estudios

