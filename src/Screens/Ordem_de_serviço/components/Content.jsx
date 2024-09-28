import React from "react";
import "../styles/content.css";
import { FaTrashCan } from "react-icons/fa6";
import { RiPencilFill } from "react-icons/ri";

function Content() {
  const users = [
    {
      id: 1,
      name: "João",
      car: "Civic",
      status: "Em Execução",
    },
    {
      id: 2,
      name: "Lucas",
      car: "Gol",
      status: "Entregue",
    },
    {
      id: 3,
      name: "Carlos",
      car: "Logan",
      status: "Orçamento",
    },
    {
      id: 4,
      name: "Ryan",
      car: "Corolla",
      status: "Finalizado",
    },
    {
      id: 5,
      name: "Catarina",
      car: "Hb20",
      status: "Cancelado",
    },

  ];
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
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.car}</td>
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
