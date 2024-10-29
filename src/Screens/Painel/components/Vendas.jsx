import React, { useEffect, useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import "../styles/painel.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Vendas() {
  const [ordemServico, setOrdemServico] = useState([]);

  const ordemServicoCollectionRef = collection(db, "dataOS");

  const getDataOrdemServico = async () => {
    const data = await getDocs(ordemServicoCollectionRef);
    setOrdemServico(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getDataOrdemServico();
  }, []);

  return (
    <div className="containerVendas">
      <div className="headerVendas">
        <h1>SERVIÇOS</h1>
        <MdCurrencyExchange className="icon" />
      </div>
      <div className="contentVendas">
        <table>
          <thead>
            <tr>
              <th>CLIENTE</th>
              <th>VALOR</th>
            </tr>
          </thead>
          <tbody>
            {ordemServico.map((item) => (
              <tr>
                <td>{item.nomeCliente}</td>
                <td>{item.valorTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vendas;
