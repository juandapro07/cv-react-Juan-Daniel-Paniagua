import './StackTecnologias.css';

export default function StackTecnologias() {
    const tecnologias = {
        lenguajes: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python'],
        frameworks: ['React', 'Next.js', 'Vue.js'],
        herramientas: ['Git', 'GitHub', 'VSCode', 'Figma'],
    };

    const noTieneTecnologias =
        tecnologias.lenguajes.length === 0 &&
        tecnologias.frameworks.length === 0 &&
        tecnologias.herramientas.length === 0;

    if (noTieneTecnologias) {
        return (
            <div className="perfil">
                <h2>Stack de Tecnologías</h2>
                <p className="notecnologias">El usuario no tiene tecnologías</p>
            </div>
        );
    }

    return (
        <div className="perfil">
            <h2>Stack de Tecnologías</h2>

            {/* Lenguajes */}
            <h3>Lenguajes</h3>
            <ul className="skills">
                {tecnologias.lenguajes.map((tec, index) => (
                    <li key={index}>{tec}</li>
                ))}
            </ul>

            {/* Frameworks */}
            <h3>Frameworks</h3>
            <ul className="skills">
                {tecnologias.frameworks.map((tec, index) => (
                    <li key={index}>{tec}</li>
                ))}
            </ul>

            {/* Herramientas */}
            <h3>Herramientas</h3>
            <ul className="skills">
                {tecnologias.herramientas.map((tec, index) => (
                    <li key={index}>{tec}</li>
                ))}
            </ul>
        </div>
    );
}
