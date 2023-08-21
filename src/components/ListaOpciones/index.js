import "./ListaOpciones.css"

const ListaOpciones = props => {

    const manejarCambio=e=>{
        props.cambiarEquipo(e.target.value);
    }

    return <div className="lista-opciones">
        <label>{props.title}</label>
        <select value={props.value} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>-- Seleccionar equipo --</option>
            {props.equipos.map((equipo, indice) => <option key={indice} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;