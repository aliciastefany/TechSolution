import React from "react";
import Vendas from "./components/Vendas";
import Gastos from "./components/Gastos";
import Lucro from "./components/Lucro"
import "./styles/painel.css";

function Painel() {
  return (
    <div className="containerPainel">
      <Vendas />
      <div>
        <Gastos />
        <Lucro />
      </div>
    </div>
  );
}

export default Painel;
