import "./MiOrg.css"

const MiOrg = props => {

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/Add.png" alt="org" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg;