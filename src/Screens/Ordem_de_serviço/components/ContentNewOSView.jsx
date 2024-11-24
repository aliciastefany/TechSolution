import React, { useState, useEffect } from "react";
import "../styles/content.css";
import { NavLink, useLocation } from "react-router-dom";

function ContentNewOS({ status }) {

  let location = useLocation();
  console.log(location.state)


  //const [receberDados, setReceberDados] = useState([]);

  //setReceberDados(location.state);
  
  //console.log(receberDados)

  console.log(status)
  return (
    <div className="container">

      {location.state.map((item) => (
        <form key={item.id}>
          <div className="lineone">
            <div className="nameClient">
              <p>Cliente:</p>
              <input
                type="text"
                value={item.nomeCliente}
                readOnly
              />
            </div>
            <div className="numberCpf">
              <p>CPF/CNPJ:</p>
              <input
                type="text"
                value={item.cpfCnpjClient}
                readOnly
              />
            </div>
            <div className="numberPhone">
              <p>Número:</p>
              <input
                type="text"
                value={item.telefoneCliente}
                readOnly
              />
            </div>
          </div>
          <div className="linetwo">
            <div className="modeloVeiculo">
              <p>Modelo Veículo:</p>
              <input
                type="text"
                value={item.modeloCarro}
                readOnly
              />
            </div>
            <div className="marca">
              <p>Marca:</p>
              <input
                type="text"
                value={item.marcaCarro}
                readOnly
              />
            </div>
            <div className="placa">
              <p>Placa:</p>
              <input
                type="text"
                value={item.placaCarro}
                readOnly
              />
            </div>
            <div className="km">
              <p>km:</p>
              <input
                type="text"
                value={item.kmCarro}
                readOnly
              />
            </div>
          </div>

          <h2 className="geral">Gerais</h2>

          <div className="linethree">
            <div className="servico">
              <p>Serviço solicitado ou problema apresentado:</p>
              <input type="text" valor={item.servico} readOnly />
            </div>
            <div className="dataInicio">
              <p>Data de Entrada:</p>
              <input
                type="date"
                value={item.dataEntrega}
                readOnly
              />
            </div>
            <div className="dataFim">
              <p>Previsão de Entrega:</p>
              <input
                type="date"
                value={item.previsaoEntrega}
                readOnly
              />
            </div>
          </div>

          <div className="descricao">
            <p>Observação(Descrição):</p>
            <input type="text" value={item.descricao}
              readOnly />
          </div>

          <div className="lineProduct">
            <div style={{ display: "flex", gap: "50px" }}>
              <div className="nameProduct">
                <p>Produto:</p>
                <input
                  type="text"
                  value={item.produto}
                  readOnly
                />
              </div>
              <div className="quantidade">
                <p>Quantidade:</p>
                <input
                  type="text"
                  value={item.quantidade}
                  readOnly
                />
              </div>
              <div className="valor">
                <p>Valor Unitario:</p>
                <input
                  type="text"
                  value={item.valor}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="linefour">
            <div className="valorservico">
              <p>Valor Mão de Obra:</p>
              <input
                type="text"
                value={item.maoObra}
                readOnly
              />
            </div>

            <h1>
              {item.valorTotal}
            </h1>
          </div>

          <div className="buttons">
            <NavLink to={"/app/ordem_de_servico"} className={"buttonCancelar"}>
              Voltar
            </NavLink>
          </div>
        </form>
      ))}
    </div>
  );
}

export default ContentNewOS;
