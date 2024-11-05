import React, { useEffect, useState } from "react";
import { BsGraphDownArrow } from "react-icons/bs";
import "../styles/painel.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Gastos() {
  const [ordemServico, setOrdemServico] = useState([]);

  const valor = ordemServico.reduce((a, b) => a + b.valorGastosProduto, 0);

  const ordemServicoCollectionRef = collection(db, "dataOS");

  const getDataOrdemServico = async () => {
    const data = await getDocs(ordemServicoCollectionRef);
    setOrdemServico(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(ordemServico);
    console.log(valor);
  };

  useEffect(() => {
    getDataOrdemServico();
  }, []);
  return (
    <div className="containerGastos">
      <div className="headerGastos">
        <h1>GASTOS</h1>
        <BsGraphDownArrow className="icon" />
      </div>
      <p>{valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}</p>
    </div>
  );
}

export default Gastos;
