import './App.css';
import Cabecera from './Cabecera'
import Perfil from './Perfil'
import Experiencia from './experiencia'
import Estudios from './estudios'

function App() {
  const experiencias = [
    {
      titulo: 'Proyecto personal',
      descripcion: 'Creación de páginas web con HTML, CSS y JavaScript.',
    },
    {
      titulo: 'Servicio social',
      descripcion: 'Apoyo en mantenimiento de equipos y redes escolares.',
    },
  ]

  return (
    <>
      <Cabecera />
      <Perfil />
      <Experiencia experiencias={experiencias} />
      <Estudios />
    </>
  )
}

export default App
