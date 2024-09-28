import React from "react";
import "../styles/content.css";
import { FaTrashCan } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";

function Content() {
  const users = [
    {
      id: 1,
      name: "João",
      funcao: "Cliente"
    },
    {
      id: 2,
      name: "Lucas",
      funcao: "Cliente"
    },
    {
      id: 3,
      name: "Carlos",
      funcao: "Mecânico"
    },
    {
      id: 4,
      name: "Ryan",
      funcao: "Cliente"
    },
    {
      id: 5,
      name: "Wellington",
      funcao: "Mecânico"
    },

  ];
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
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td className="content-status"><p className="status">{item.funcao}</p></td>
              <td className="item-table">
                <RiPencilFill />
              </td>
              <td className="item-table">
                <FaTrashCan />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Content;
