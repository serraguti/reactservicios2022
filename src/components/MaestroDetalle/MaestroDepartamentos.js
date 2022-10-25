import React, { Component } from 'react';
import axios from 'axios';
import Global from '../../Global';
import MaestroEmpleados from './MaestroEmpleados';

export default class MaestroDepartamentos extends Component {
    selectDepartamentosRef = React.createRef();
    state = {
        departamentos: [],
        statusDept: false,
        idDepartamento: 0
    }

    loadDepartamentos = () => {
        var url = Global.urlDepartamentos;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data,
                statusDept: true
            });
        });
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var idDept = this.selectDepartamentosRef.current.value;
        this.setState({
            idDepartamento: idDept
        });
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    return (
        <div>
            <h1 style={{color:"blue"}}>
                Maestro Departamentos Empleados
            </h1>
            <form>
                <label>Seleccione departamento: </label>
                <select ref={this.selectDepartamentosRef}>
                    {
                        this.state.statusDept == true &&
                        this.state.departamentos.map((dept, index) => {
                            return (<option key={dept.Numero} value={dept.Numero}>
                                {dept.Nombre}
                            </option>);
                        })
                    }
                </select>
                <button onClick={this.buscarEmpleados}>
                    Mostrar empleados
                </button>
                <h2 style={{color:"red"}}>
                    Departamento seleccionado: {this.state.idDepartamento}
                </h2>
            </form>
            {
                this.state.idDepartamento != 0 &&
                <MaestroEmpleados 
                iddepartamento={this.state.idDepartamento}/>
            }
        </div>
    )
  }
}
