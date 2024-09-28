import React, { useEffect, useState } from "react";
import "../styles/headeros.css";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

function HeaderNewOS() {
  const [userDetails, setUserDetails] = useState('');
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData()
  }, [])
  return (
    <div className="containHeader">
      <div className="leftHeader">
        <h1>EDIÇÃO O.S. N°: </h1>
        <h1>Mecânico: {userDetails.firstName}</h1>
      </div>

      <div className="rightHeader">
        <p>Situação da O.S.</p>
        <select>
          <option value="orcamentos">Orçamentos</option>
          <option value="emexecucao">Em Execução</option>
          <option value="entregue">Entregue</option>
          <option value="finalizado">Finalizado</option>
          <option value="cancelados">Cancelados</option>
        </select>
      </div>
    </div>
  );
}

export default HeaderNewOS;
