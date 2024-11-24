import React, { useEffect, useState } from "react";
import "../styles/content.css";
import { FaTrashCan } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import Editar from "./Editar";

function Content({ search }) {
  const [openEditar, setOpenEditar] = useState(false);
  const [dadosAgenda, setDadosAgenda] = useState([]);

  const [puxarId, setPuxarId] = useState('')

  const agendaCollectionRef = collection(db, "dataAgenda");

  const deleteAgenda = (id) => {
    const userAgenda = doc(db, "dataAgenda", id);
    deleteDoc(userAgenda);
    getDadosAgenda();
  };

  const getDadosAgenda = async () => {
    const data = await getDocs(agendaCollectionRef);
    setDadosAgenda(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getDadosAgenda();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Carro</th>
            <th>Data</th>
            <th>Horario</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dadosAgenda
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.car}</td>
                <td>
                  {item.date.toLocaleString("pt-BR", { timezone: "UTC" })}
                </td>
                <td>{item.hour}</td>
                <td className="item-table">
                  <FaTrashCan
                    onClick={() => {
                      deleteAgenda(item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Editar
        isOpen={openEditar}
        setEditarClose={() => setOpenEditar(!openEditar)}
        receberDados={dadosAgenda}
        receberId = {puxarId}
      />
    </div>
  );
}

export default Content;
