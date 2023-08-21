import Colaborador from "../Colaborador";
import "./Equipo.css"
import hexToRgba from "hex-to-rgba";

const Equipo = props => {

    const {colorPrimario, titulo, id} = props.datos;
    const estiloTitulo = {borderColor:colorPrimario};
    const estiloSection = {backgroundColor: hexToRgba(colorPrimario, 0.6)}
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={estiloSection}>
                <input 
                    className="input-color" 
                    type="color"
                    value={colorPrimario}
                    onChange={event => actualizarColor(event.target.value, id)}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => 
                            <Colaborador 
                                key={index} 
                                datos={colaborador}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
                            />)
                    }
                </div>
            </section>}</>
}

export default Equipo;