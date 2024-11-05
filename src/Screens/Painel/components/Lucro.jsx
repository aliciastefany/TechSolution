import React, { useEffect, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Lucro() {
  const [ordemServico, setOrdemServico] = useState([]);

  const valor = ordemServico.reduce((a, b) => a + b.maoObra, 0);

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
    <div className="containerLucro">
      <div className="left">
        <h1>LUCROS</h1>
        <p>
          {valor.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <BsGraphUpArrow className="icon" />
    </div>
  );
}

export default Lucro;
