import "./Campo.css"

const Campo = props => {

    //Destructuracion
    const {title, placeholder, required, value, type="text"} = props;

    const manejarCambio = e => {
        props.cambiarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{title}</label>
        <input 
            placeholder={placeholder} 
            required={required} 
            value={value} 
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo;