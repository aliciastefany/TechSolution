import React from "react";
import "../styles/modal.css";
import { TfiClose } from "react-icons/tfi";

function Modal({ isOpenOS, setModalOSClose }) {
  if (isOpenOS) {
    return (
      <div className="outContainer">
        <div className="modalContainer">
          <div className="headerModal">
            <h2>Cadastre um novo cliente ou mecânico:</h2>
            <TfiClose className="close" onClick={setModalOSClose} />
          </div>
          <div className="modalFormPessoal">
            <div className="lineOne">
              <div className="cpf">
                <p>CPF/CNPJ:</p>
                <input type="text" placeholder="Digite o CPF/CNPJ..." />
              </div>
              <div className="nome">
                <p>Nome:</p>
                <input type="text" placeholder="Digite o Nome..." />
              </div>
            </div>
            <div className="lineTwo">
              <div className="phone">
                <p>Telefone:</p>
                <input type="tel" placeholder="(DDD) 9 1234-5678" />
              </div>
              <div className="funcao">
                <p>Função:</p>
                <select id="selecionar">
                  <option id="option" value="cliente">
                    Cliente
                  </option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div id="modalFormClient" style={{}}>
            <h2>Cadastrar Carro do Cliente</h2>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default Modal;
