import React, { Component } from 'react';
import axios from 'axios';
import Global from './../Global';

export default class DepartamentosEmpleados extends Component {
    selectDepartamentosRef = React.createRef();
    state = {
        departamentos: [],
        statusDept: false,
        empleados: [],
        statusEmp: false
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
        var request = "/api/empleados/empleadosdepartamento/" + idDept;
        var url = Global.urlEmpleados + request;
        axios.get(url).then(res =>  {
            this.setState({
                empleados: res.data,
                statusEmp: true
            });
        });
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

  render() {
    return (
        <div>
            <h1>Departamentos Empleados</h1>
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
            </form>
            <ul>
                {
                    this.state.statusEmp == true &&
                    this.state.empleados.map((emp, index) => {
                        return (<li key={emp.idEmpleado}>
                            {emp.apellido}
                        </li>);
                    })
                }
            </ul>
        </div>
    )
  }
}
