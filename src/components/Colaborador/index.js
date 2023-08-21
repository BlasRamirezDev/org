import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = props => {

    const {foto, nombre, puesto, id, favorito} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;
    const estiloEncabezado = {backgroundColor:colorPrimario};

    return <div className="colaborador">
                <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
                <div className="encabezado" style={estiloEncabezado}>
                    <img src={foto} alt={nombre}></img>
                </div>
                <div className="info">
                    <h4>{nombre}</h4>
                    <h5>{puesto}</h5>
                    {favorito ? 
                        <AiFillHeart color="red" onClick={() => like(id)}/> : 
                        <AiOutlineHeart onClick={() => like(id)}/>
                    }
                </div>
            </div>
}

export default Colaborador;