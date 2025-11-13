import './Experiencia.css'
import React from 'react'

type ExperienciaItem = {
  titulo: string
  descripcion: string
}

type Props = {
  experiencias?: ExperienciaItem[]
}

function Experiencia({ experiencias = [] }: Props) {
  return (
    <section className="Experiencia">
      <h2>Experiencia</h2>
      {experiencias.length === 0 ? (
        <p>No hay experiencias para mostrar.</p>
      ) : (
        experiencias.map((exp, idx) => (
          <article key={idx} className="exp-item">
            <h3>{exp.titulo}</h3>
            <p>{exp.descripcion}</p>
          </article>
        ))
      )}
    </section>
  )
}

export default Experiencia
