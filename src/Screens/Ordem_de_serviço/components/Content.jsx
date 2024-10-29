import React, { useEffect, useState } from "react";
import "../styles/content.css";
import { FaTrashCan } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Content({ search, filter }) {
  const [ordemServico, setOrdemServico] = useState([]);

  const ordemServicoCollectionRef = collection(db, "dataOS");

  const deleteOrdemServico = (id) => {
    const userOrdemServico = doc(db, "dataOS", id);
    deleteDoc(userOrdemServico);
    getDataOrdemServico();
  };

  const getDataOrdemServico = async () => {
    const data = await getDocs(ordemServicoCollectionRef);
    setOrdemServico(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getDataOrdemServico();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Carro</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ordemServico
            .filter((item) =>
              item.nomeCliente.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.nomeCliente}</td>
                <td>{item.modeloCarro}</td>
                <td className="content-status">
                  <p
                    className="status"
                    style={{
                      backgroundColor:
                        item.status == "Em Execução"
                          ? "#030dff"
                          : item.status == "Entregue"
                          ? "#00bf63"
                          : item.status == "Orçamento"
                          ? "#ffde59"
                          : item.status == "Cancelado"
                          ? "#ff3131"
                          : "#018847",
                    }}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="item-table">
                  <RiPencilFill />
                </td>
                <td className="item-table">
                  <FaTrashCan
                    onClick={() => {
                      deleteOrdemServico(item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
