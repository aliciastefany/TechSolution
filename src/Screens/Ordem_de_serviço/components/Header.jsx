import React, { useState } from "react";
import "../../../styles/header.css";
import { NavLink } from "react-router-dom";

function Header({usePropsSearch, usePropsFilter}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("todos");
  usePropsSearch(search)
  usePropsFilter(filter)
  return (
    <div>
      <h1>ORDEM DE SERVIÇO</h1>
      <div className="forms">
        <input type="text" placeholder="Pesquise pelo o nome..." onChange={(e) => setSearch(e.target.value)} />
        {/* <div className="filter">
          <p>Filtrar:</p>
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value="todos">Todos</option>
            <option value="cancelados">Cancelados</option>
            <option value="orcamentos">Orçamentos</option>
            <option value="emexecucao">Em Execução</option>
            <option value="entregue">Entregue</option>
            <option value="finalizado">Finalizado</option>
          </select>
        </div>
        <div className="ordem">
          <p>Ordenar:</p>
          <select>
            <option value="selecionar">Selecionar</option>
            <option value="crescente">A-Z</option>
            <option value="decrescente">Z-A</option>
          </select>
        </div> */}
        <NavLink to={"/app/adicionaros"} className="button">
          ADICIONAR
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
