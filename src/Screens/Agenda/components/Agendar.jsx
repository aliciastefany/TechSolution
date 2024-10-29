import React, { useState } from "react";
import "../styles/agendar.css";
import { TfiClose } from "react-icons/tfi";
import { db } from "../../../firebase";
import { setDoc, doc, collection, addDoc } from "firebase/firestore";

function Agendar({ isOpen, setAgendarClose }) {
  const [nomeCliente, setNomeCliente] = useState("");
  const [carroCliente, setCarroCliente] = useState("");
  const [dateAgenda, setDateAgenda] = useState("");
  const [hourAgenda, setHourAgenda] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "dataAgenda"), {
      name: nomeCliente,
      car: carroCliente,
      date: dateAgenda,
      hour: hourAgenda
    });

    await delay(500);

    window.location.href = "../app/agenda";
  };

  if (isOpen) {
    return (
      <div className="containerAgendar">
        <div className="contentAgendar">
          <div className="headerAgendar">
            <h2>Agendar Cliente:</h2>
            <TfiClose className="close" onClick={setAgendarClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="nameAgenda">
              <p>Nome:</p>
              <input
                type="text"
                onChange={(e) => setNomeCliente(e.target.value)}
              />
            </div>
            <div className="carAgenda">
              <p>Carro:</p>
              <input
                type="text"
                onChange={(e) => setCarroCliente(e.target.value)}
              />
            </div>
            <div className="dateAgenda">
              <p>Data:</p>
              <input
                type="date"
                onChange={(e) => setDateAgenda(e.target.value)}
              />
            </div>
            <div className="hourAgenda">
              <p>Hora:</p>
              <input
                type="time"
                onChange={(e) => setHourAgenda(e.target.value)}
              />
            </div>

            <button className="button">
              Agendar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Agendar;
