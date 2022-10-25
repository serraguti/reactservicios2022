import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";

import logo from './logo.svg';
import './App.css';
import ServicioCustomers from './components/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import MaestroDepartamentos from './components/MaestroDetalle/MaestroDepartamentos';
import TablaMultiplicar from './components/RutasParametros/TablaMultiplicar';
import MenuRutas from './components/RutasParametros/MenuRutas';
import Router from './components/Router';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
