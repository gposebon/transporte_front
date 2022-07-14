import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import { GlobalProvider } from './GlobalContext'

import Header from './components/Header/Header';

import Viajes from "./views/Viajes";
import Clientes from "./views/Clientes";
import FormularioFlete from "./views/FormularioFlete";
import FormularioCliente from "./views/FormularioCliente";



function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/viajes" element={<Viajes />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/formularioFlete" element={<FormularioFlete />} />
            <Route path="/formularioCliente" element={<FormularioCliente />} />
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
