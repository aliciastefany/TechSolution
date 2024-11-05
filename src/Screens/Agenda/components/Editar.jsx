import React, { useState } from "react";
import "../styles/agendar.css";
import { TfiClose } from "react-icons/tfi";
import { db } from "../../../firebase";
import { setDoc, doc, collection, addDoc, updateDoc } from "firebase/firestore";

function Agendar({ isOpen, setEditarClose, receberDados, receberId }) {
  const [nomeCliente, setNomeCliente] = useState("");
  const [carroCliente, setCarroCliente] = useState("");
  const [dateAgenda, setDateAgenda] = useState("");
  const [hourAgenda, setHourAgenda] = useState("");

  const [name, setName] = useState('')
  const [car, setCar] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(collection(db, "dataAgenda"), {
      name: nomeCliente,
      car: carroCliente,
      date: dateAgenda,
      hour: hourAgenda,
    });

    await delay(500);

    window.location.href = "../app/agenda";
  };

  console.log(receberId);


  if (isOpen) {
    return (
      <div className="containerAgendar">
        <div className="contentAgendar">
          <div className="headerAgendar">
            <h2>Editar Agendar Cliente:</h2>
            <TfiClose className="close" onClick={setEditarClose} />
          </div>


            <form>
              <div className="nameAgenda">
                <p>Nome:</p>
                <input
                  value={name}
                  type="text"
                  onChange={(e) => setNomeCliente(e.target.value)}
                />
              </div>
              <div className="carAgenda">
                <p>Carro:</p>
                <input
                  type="text"
                  onChange={(e) => setCarroCliente(e.target.value)}
                  value={car}
                />
              </div>
              <div className="dateAgenda">
                <p>Data:</p>
                <input
                  type="date"
                  onChange={(e) => setDateAgenda(e.target.value)}
                  value={date}
                />
              </div>
              <div className="hourAgenda">
                <p>Hora:</p>
                <input
                  type="time"
                  onChange={(e) => setHourAgenda(e.target.value)}
                  value={hour}
                />
              </div>
            </form>
          <button className="button" onClick={handleSubmit}>
            Agendar
          </button>
        </div>
      </div>
    );
  }
}

export default Agendar;
