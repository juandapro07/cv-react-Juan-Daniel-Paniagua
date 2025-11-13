import './Cabecera.css';
import { CabeceraData} from './data';

function Cabecera() {
  const { nombre, edad, ubicacion, correo, telefono, foto } = CabeceraData;
  return (
    <section className="info">
      <div className="foto-container">
        <img src={foto} alt="Foto de Juan Daniel Paniagua" className="foto" />
      </div>

      <h2>Datos Personales</h2>
      <ul>
        <li><strong>nombre:</strong>{nombre}</li>
        <li><strong>Edad:</strong> {edad}</li>
        <li><strong>Ubicación:</strong>{ubicacion}</li>
        <li><strong>Correo:</strong>{correo}</li>
        <li><strong>Teléfono:</strong>{telefono}</li>
      </ul>
    </section>
  )
}
export default Cabecera


