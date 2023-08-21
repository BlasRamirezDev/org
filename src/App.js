import './App.css';
import Equipo from './components/Equipo';
import Formulario from './components/Formulario';
import Header from './components/Header';
import MiOrg from './components/MiOrg';
import { useState } from 'react';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid';


function App() {

  console.log(uuid());

  const [mostrarFormulario, setMostrarFormulario] = useState("true");
  const [colaboradores, setColaboradores] = useState([
    {
      id:uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      favorito: true
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      favorito: false
    },
    {
      id:uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      favorito: true
    },
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      favorito: true
    },
    {
      id:uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      favorito: false
    }
  ]);
  const [equipos, setEquipos] = useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
    }, 
    {
      id:uuid(),
      titulo: "Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    }, 
    {
      id:uuid(),
      titulo: "Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    }, 
    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    }, 
    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    }, 
    {
      id:uuid(),
      titulo: "Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    }, 
    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },
])

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  //Registrar colaborador

  const registrarColaborador = colaborador => {
    setColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = id => {
    const nuevosColaboradores = colaboradores.filter(colaborador => colaborador.id !== id)
    setColaboradores(nuevosColaboradores);
  }

  //actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map(equipo => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    setEquipos(equiposActualizados);
  }

  //crear Equipo
  const crearEquipo = nuevoEquipo => {
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
  }

  //like
  const like = id => {
    const colaboradoresActualizados = colaboradores.map(colaborador => 
      {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      }
    )
    setColaboradores(colaboradoresActualizados);
  }

  return (
    <div className="App">

      <Header/>

      {mostrarFormulario && <Formulario
        equipoTitulo = {equipos.map(equipo => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
      />}

      <MiOrg cambiarMostrar = {cambiarMostrar}/>

      {
        equipos.map(equipo => <Equipo 
          key = {equipo.titulo} 
          datos = {equipo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like={like}
        />)}

      <Footer/>
    </div>
  );
}

export default App;
