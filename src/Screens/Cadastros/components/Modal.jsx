import React, { useState } from "react";
import "../styles/modal.css";
import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

function Modal({ isOpen, setModalClose }) {
  function selecionar() {
    var opcao = document.getElementById("selecionar").value;
    var div = document.getElementById("modalFormClient");

    console.log(opcao);
    if (opcao == "mecanico") {
      div.style.display = "none";
    } else if (opcao == "cliente") {
      div.style.display = "block";
    }
  }

  const [nameClient, setNameClient] = useState("");
  const [cpfCnpjClient, setCpfCnpjClient] = useState("");
  const [numberPhoneClient, setNumberPhoneClient] = useState("");
  const [modelCarClient, setModelCarClient] = useState("");
  const [marcaCarClient, setMarcaCarClient] = useState("");
  const [numberPlacaCarClient, setNumberPlacaCarClient] = useState("");
  const [numberKmCarClient, setNumberKmCarClient] = useState("");
  const [funcao, setFuncao] = useState("cliente");

  console.log(funcao);
  

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "cadastros"), {
      nomeCliente: nameClient,
      cpfCnpjCliente: cpfCnpjClient,
      telefoneCliente: numberPhoneClient,
      modeloCarro: modelCarClient,
      marcaCarro: marcaCarClient,
      placaCarro: numberPlacaCarClient,
      kmCarro: numberKmCarClient,
      funcao: funcao,
    });

    await delay(500);

    window.location.href = "../app/cadastros";
  };

  if (isOpen) {
    return (
      <div className="outContainer">
        <form className="modalContainer" onSubmit={handleSubmit}>
          <div className="headerModal">
            <h2>Cadastre um novo cliente ou mecânico:</h2>
            <TfiClose className="close" onClick={setModalClose} />
          </div>
          <div className="modalFormPessoal">
            <div className="lineOne">
              <div className="cpf">
                <p>CPF/CNPJ:</p>
                <input
                  type="text"
                  placeholder="Digite o CPF/CNPJ..."
                  onChange={(e) => setCpfCnpjClient(e.target.value)}
                />
              </div>
              <div className="nome">
                <p>Nome:</p>
                <input
                  type="text"
                  placeholder="Digite o Nome..."
                  onChange={(e) => setNameClient(e.target.value)}
                />
              </div>
            </div>
            <div className="lineTwo">
              <div className="phone">
                <p>Telefone:</p>
                <input
                  type="tel"
                  placeholder="(DDD) 9 1234-5678"
                  onChange={(e) => setNumberPhoneClient(e.target.value)}
                />
              </div>
              <div className="funcao">
                <p>Função:</p>
                <select
                  id="selecionar"
                  onChange={(e) => {
                    setFuncao(e.target.value), selecionar();
                  }}
                >
                  <option id="option" value="cliente">
                    Cliente
                  </option>
                  <option id="option" value="mecanico">
                    Mecânico
                  </option>
                </select>
              </div>
            </div>
          </div>
          <hr />
          <div id="modalFormClient" style={{}}>
            <h2>Cadastrar Carro do Cliente</h2>
            <div className="lineOne">
              <div className="cpf">
                <p>Modelo:</p>
                <input
                  type="text"
                  placeholder="Digite o Modelo do Veículo..."
                  onChange={(e) => setModelCarClient(e.target.value)}
                />
              </div>
              <div className="nome">
                <p>Marca:</p>
                <input
                  type="text"
                  placeholder="Digite o Marca do Veículo..."
                  onChange={(e) => setMarcaCarClient(e.target.value)}
                />
              </div>
            </div>
            <div className="lineOne">
              <div className="cpf">
                <p>Placa:</p>
                <input
                  type="text"
                  placeholder="Digite a Placa do Veículo..."
                  onChange={(e) => setNumberPlacaCarClient(e.target.value)}
                />
              </div>
              <div className="nome">
                <p>Km:</p>
                <input
                  type="text"
                  placeholder="Digite o Km do Veículo..."
                  onChange={(e) => setNumberKmCarClient(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="buttonSpace">
            <NavLink onClick={setModalClose} className={"buttonCancelar"}>
              Cancelar
            </NavLink>
            <button className="buttonSalvar">Salvar</button>
          </div>
        </form>
      </div>
    );
  }

  return null;
}

export default Modal;
