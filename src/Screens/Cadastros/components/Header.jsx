import React, { useState } from "react";
import "../../../styles/header.css";
import Modal from "./Modal";

function Header({ onPushSearch }) {
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  onPushSearch(search);

  return (
    <div>
      <h1>CADASTROS</h1>
      <div className="forms">
        <input
          type="text"
          placeholder="Pesquise pelo o nome..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <div className="filter">
          <p>Filtrar:</p>
          <select>
            <option value="todos">Todos</option>
            <option value="cliente">Cliente</option>
            <option value="mecanico">Mecânico</option>
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
        <button className="button" onClick={() => setOpenModal(true)}>
          ADICIONAR
        </button>
      </div>
      <Modal
        isOpen={openModal}
        setModalClose={() => setOpenModal(!openModal)}
      />
    </div>
  );
}

export default Header;
