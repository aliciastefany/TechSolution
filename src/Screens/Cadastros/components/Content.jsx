import React, { useEffect, useState } from "react";
import "../styles/content.css";
import { FaTrashCan } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

function Content({ search }) {
  const [dataCadastro, setDataCadastro] = useState([]);

  const cadastroCollectionRef = collection(db, "cadastros");

  const deleteDataCadastro = async (id) => {
    const userDataCadastro = doc(db, "cadastros", id);
    deleteDoc(userDataCadastro);
    getDataCadastro();
  };

  const getDataCadastro = async () => {
    const data = await getDocs(cadastroCollectionRef);
    setDataCadastro(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getDataCadastro();
  }, []);
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Função</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dataCadastro
            .filter((item) =>
              item.nomeCliente.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.nomeCliente}</td>
                <td className="content-status">
                  <p className="status">{item.funcao}</p>
                </td>
                <td className="item-table">
                  <RiPencilFill />
                </td>
                <td className="item-table">
                  <FaTrashCan
                    onClick={() => {
                      deleteDataCadastro(item.id);
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
