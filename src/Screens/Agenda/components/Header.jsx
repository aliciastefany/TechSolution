import React, { useState } from "react";
import "../../../styles/header.css";
import Agendar from "./Agendar";

function Header({onPushSearch}) {
  const [openAgendar, setOpenAgendar] = useState(false);
  const [search, setSearch] = useState('')
  onPushSearch(search)
  return (
    <div>
      <h1>AGENDAMENTO</h1>
      <div className="forms">
        <input
          type="text"
          placeholder="Pesquise pelo o nome..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <div className="ordem">
          <p>Ordenar:</p>
          <select>
            <option value="selecionar">Selecionar</option>
            <option value="crescente">A-Z</option>
            <option value="decrescente">Z-A</option>
          </select>
        </div> */}

        <button className="button" onClick={() => setOpenAgendar(true)}>
          ADICIONAR
        </button>
      </div>

      <Agendar
        isOpen={openAgendar}
        setAgendarClose={() => setOpenAgendar(!openAgendar)}
      />
    </div>
  );
}

export default Header;
