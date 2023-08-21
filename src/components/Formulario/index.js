import "./Formulario.css"
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";
import { useState } from "react";

const Formulario = props => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const {equipoTitulo, registrarColaborador, crearEquipo} = props;

    const manejarEnvio = e => {
        e.preventDefault();
        const datos = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datos);
    }

    const manejarNuevoEquipo = e => {
        e.preventDefault();
        crearEquipo({titulo, colorPrimario:color});
    }

    return <section className="formulario">
        <form className="form" onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                value={nombre} 
                cambiarValor={setNombre}
            />
            <Campo 
                title="Puesto" 
                placeholder="Ingresar puesto"
                required 
                value={puesto} 
                cambiarValor={setPuesto}
            />
            <Campo 
                title="Foto" 
                placeholder="Ingresar enlace de foto"
                required
                value={foto}
                cambiarValor={setFoto}
            />
            <ListaOpciones 
                title="Equipos" 
                value={equipo} 
                cambiarEquipo={setEquipo}
                equipos={equipoTitulo}
            />
            <Boton text="Crear"/>
        </form>
        <form className="form" onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                title="Titulo" 
                placeholder="Ingresar titulo" 
                required 
                value={titulo} 
                cambiarValor={setTitulo}
            />
            <Campo 
                title="Color" 
                required 
                value={color} 
                cambiarValor={setColor}
                type="color"
            />
            <Boton text="Registrar equipos"/>
        </form>
    </section>}

export default Formulario;