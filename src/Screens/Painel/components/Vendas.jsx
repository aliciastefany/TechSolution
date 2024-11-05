import React, { useEffect, useState } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import "../styles/painel.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Vendas() {
  const [ordemServico, setOrdemServico] = useState([]);

  const valorTotal = ordemServico.map((item) => item.valorTotal);

  const valor = ordemServico.reduce((a, b) => a + b.valorTotal, 0);

  const ordemServicoCollectionRef = collection(db, "dataOS");

  const getDataOrdemServico = async () => {
    const data = await getDocs(ordemServicoCollectionRef);
    setOrdemServico(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(ordemServico);
    console.log(
      valorTotal.reduce((acumulador, elemento) => acumulador + elemento, 0)
    );
    console.log(valor);
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
                <td>
                  {item.valorTotal.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
              </tr>
            ))}

            <tr>
              <td>
                {valor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vendas;
