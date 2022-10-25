import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';

export default class MaestroEmpleados extends Component {
    state = {
        empleados: [],
        status: false
    }

    loadEmpleados = () => {
        var idDept = this.props.iddepartamento;
        var request = "/api/empleados/empleadosdepartamento/" + idDept;
        var url = Global.urlEmpleados + request;
        axios.get(url).then(res => {
            this.setState({
                status: true, 
                empleados: res.data
            });
        });
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    //ESTE METODO DEBEMOS LLAMARLO CON CUIDADO
    //SIEMPRE DEBEMOS COMPROBAR EL TIPO DE CAMBIO
    //NORMALMENTE, SE UTILIZA CON PROPS, CUANDO 
    //OTRO COMPONENTE NOS HA CARGADO PREVIAMENTE
    //RECIBE UN PARAMETRO, LLAMADO OLD PROPS QUE INDICA
    //EL ANTIGUO VALOR DE PROPS
    componentDidUpdate = (oldProps) => {
        console.log("Actual Props " + this.props.iddepartamento);
        console.log("Old Props " + oldProps.iddepartamento);
        //SOLAMENTE REALIZAREMOS CAMBIOS EN LA PAGINA
        //CUANDO LOS PROPS SEAN DIFERENTES
        if (this.props.iddepartamento != oldProps.iddepartamento){
            this.loadEmpleados();
        }
    }

  render() {
    return (
        <div>
            {this.state.variable}
            <h1>
                Maestro Empleados {this.props.iddepartamento}
            </h1>
            {
                this.state.status == true && 
                this.state.empleados.map((emp, index) => {
                    return (<h3 style={{color:"fuchsia"}} 
                    key={emp.idEmpleado}>
                        {emp.apellido}, {emp.oficio}
                    </h3>)
                })
            }
        </div>
    )
  }
}
