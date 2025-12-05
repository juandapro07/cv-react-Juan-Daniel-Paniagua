import Cabecera from './Cabecera'
import Estudios from './Estudios'
import Experiencia from './Experiencia'
import Perfil from './Perfil'
import Tecnologias from './StackTecnologias'
import { habilidadesData } from "./data"
import ToggleHabilidades from "./ToggleHabilidades"

import './App.css'

function App() {

  return (
    <>
      
       
          <Cabecera />
          <Perfil />

          {/* Habilidades que vienen desde data */}
          <ToggleHabilidades habilidades={habilidadesData} />
       
       
          <Experiencia />
          <Estudios />

          {/* Aquí insertas el renderizado de tecnologías */}
          <Tecnologias />
       
      
    </>
  )
}

export default App

