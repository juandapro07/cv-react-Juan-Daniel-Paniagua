import './Estudios.css'

function Estudios() {
  const estudios = [
    {
      titulo: 'Bachillerato Académico',
      institucion: 'Institución Educativa Ana Maria Janer',
      año: '2024',
    },
    {
      titulo: 'Técnologo en Programación de Software',
      institucion: 'SENA',
      año: '2025-actualidad',
    },
  ]

  return (
    <section className="estudios">
      <h2>Estudios</h2>

      {estudios.map((estudio, index) => (
        <article key={index} className="est-item">
          <h3>{estudio.titulo}</h3>
          <p>
            <strong>{estudio.institucion}</strong> — <span>{estudio.año}</span>
          </p>
        </article>
      ))}
    </section>
  )
}

export default Estudios
