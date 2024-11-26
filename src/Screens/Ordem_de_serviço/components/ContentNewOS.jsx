import React, { useState, useEffect } from "react";
import "../styles/content.css";
import ModalOS from "./ModalOS";
import { TiPlus } from "react-icons/ti";
import { FaTrashCan } from "react-icons/fa6";


import { NavLink } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebase";

function ContentNewOS({status}) {
  const [openModalOS, setOpenModalOS] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const [nameClient, setNameClient] = useState("");
  const [cpfCnpjClient, setCpfCnpjClient] = useState("");
  const [numberPhoneClient, setNumberPhoneClient] = useState("");
  const [modelCarClient, setModelCarClient] = useState("");
  const [marcaCarClient, setMarcaCarClient] = useState("");
  const [numberPlacaCarClient, setNumberPlacaCarClient] = useState("");
  const [numberKmCarClient, setNumberKmCarClient] = useState("");

  const [servico, setServico] = useState("");
  const [dataEntrega, setDataEntrada] = useState("");
  const [previsaoEntrega, setPrevisaoEntrega] = useState("");
  const [descrition, setDescrition] = useState("");
  const [product, setProduct] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [valorProduct, setValorProduct] = useState(0);
  const [valorServico, setValorServico] = useState(0);
  const [total, setTotal] = useState(0);

  const [products, setProducts] = useState([]);

  const [valorGastosProduto, setValorGastosProduto] = useState(0)

  const calcular = () => {
    const result = valorProduct * quantidade + valorServico;
    setTotal(result);
  };

  const calcularGastosProduto = () => {
    const result = valorProduct * quantidade;
    setValorGastosProduto(result)
  }

  useEffect(calcular);

  console.log(status)

  const addInputProduct = (e) => {
    e.preventDefault();

    setProducts([...products, ""]);
  };

  const handleRemoteInput = (position) => {
    setProducts([...products.filter((_, index) => index !== position)]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "dataOS"), {
      status: status,
      nomeCliente: nameClient,
      cpfCnpjCliente: cpfCnpjClient,
      telefoneCliente: numberPhoneClient,
      modeloCarro: modelCarClient,
      marcaCarro: marcaCarClient,
      placaCarro: numberPlacaCarClient,
      kmCarro: numberKmCarClient,
      servico: servico,
      dataEntrega: dataEntrega,
      previsaoEntrega: previsaoEntrega,
      descricao: descrition,
      produto: product,
      quantidade: quantidade,
      valor: valorProduct,
      maoObra: valorServico,
      valorTotal: total,
      valorGastosProduto: valorGastosProduto
    });
    console.log("Os Criada");

    await delay(500);

    window.location.href = "../app/ordem_de_servico";
  };

  console.log(valorProduct, quantidade, valorServico, total);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="lineone">
          <div className="nameClient">
            <p>Cliente:</p>
            <input
              type="text"
              onChange={(e) => setNameClient(e.target.value)}
            />
          </div>
          <div className="numberCpf">
            <p>CPF/CNPJ:</p>
            <input
              type="text"
              onChange={(e) => setCpfCnpjClient(e.target.value)}
            />
          </div>
          <div className="numberPhone">
            <p>Número:</p>
            <input
              type="text"
              onChange={(e) => setNumberPhoneClient(e.target.value)}
            />
          </div>

          <button
            type="button"
            className="buttonModal"
            onClick={() => setOpenModalOS(true)}
          >
            <TiPlus />
          </button>
        </div>
        <div className="linetwo">
          <div className="modeloVeiculo">
            <p>Modelo Veículo:</p>
            <input
              type="text"
              onChange={(e) => setModelCarClient(e.target.value)}
            />
          </div>
          <div className="marca">
            <p>Marca:</p>
            <input
              type="text"
              onChange={(e) => setMarcaCarClient(e.target.value)}
            />
          </div>
          <div className="placa">
            <p>Placa:</p>
            <input
              type="text"
              onChange={(e) => setNumberPlacaCarClient(e.target.value)}
            />
          </div>
          <div className="km">
            <p>km:</p>
            <input
              type="text"
              onChange={(e) => setNumberKmCarClient(e.target.value)}
            />
          </div>
        </div>

        <h2 className="geral">Gerais</h2>

        <div className="linethree">
          <div className="servico">
            <p>Serviço solicitado ou problema apresentado:</p>
            <input type="text" onChange={(e) => setServico(e.target.value)} />
          </div>
          <div className="dataInicio">
            <p>Data de Entrada:</p>
            <input
              type="date"
              onChange={(e) => setDataEntrada(e.target.value)}
            />
          </div>
          <div className="dataFim">
            <p>Previsão de Entrega:</p>
            <input
              type="date"
              onChange={(e) => setPrevisaoEntrega(e.target.value)}
            />
          </div>
        </div>

        <div className="descricao">
          <p>Observação(Descrição):</p>
          <input type="text" onChange={(e) => setDescrition(e.target.value)} />
        </div>

        <div className="lineProduct">
          {products.map((item, index) => (
            <div key={index} style={{ display: "flex", gap: "50px" }}>
              <div className="nameProduct">
                <p>Produto:</p>
                <input
                  type="text"
                  onChange={(e) => setProduct(e.target.value)}
                />
              </div>
              <div className="quantidade">
                <p>Quantidade:</p>
                <input
                  type="text"
                  onChange={(e) => setQuantidade(+e.target.value) + 1}
                />
              </div>
              <div className="valor">
                <p>Valor Unitario:</p>
                <input
                  type="text"
                  onChange={(e) => setValorProduct(+e.target.value) + 1}
                />
              </div>
            </div>
          ))}

          <button type="button" className="buttonAdd" onClick={addInputProduct}>
            <TiPlus />
          </button>
        </div>

        <div className="linefour">
          <div className="valorservico">
            <p>Valor Mão de Obra:</p>
            <input
              type="text"
              onChange={(e) => setValorServico(+e.target.value)}
            />
          </div>

          <h1>
            {total.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
        </div>

        <div className="buttons">
          <NavLink to={"/app/ordem_de_servico"} className={"buttonCancelar"}>
            Cancelar
          </NavLink>
          <button className="buttonSalvar">Salvar</button>
        </div>
      </form>
      <ModalOS
        isOpenOS={openModalOS}
        setModalOSClose={() => setOpenModalOS(!openModalOS)}
      />
    </div>
  );
}

export default ContentNewOS;
