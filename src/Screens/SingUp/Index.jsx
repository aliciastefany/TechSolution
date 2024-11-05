import React, { useState } from "react";
import "./styles/singup.css";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword, } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userData = {
            email: email,
            firstName: firstName,
            lastName: secondName,
            cpf: cpf,
            phone: phone,
            function: "adm",
          };
          const docRef = doc(db, "users", user.uid);
          setDoc(docRef, userData);
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode == "auth/email-already-in-use") {
            console.log("Email ja existe");
          } else {
            console.log("unable to create User");
          }
        });
      console.log("conta criada");
    } catch (err) {
      console.log(err);
    }

    console.log(email, password, cpf, firstName, secondName, phone);

    await delay(500);

    window.location.href = "/";
  };

  return (
    <div>
      <div className="contentSingUp">
        <h1>CRIAR CONTA</h1>

        <form className="formSingUp" onSubmit={handleSubmit}>
          <div className="fullName">
            <div className="firstName">
              <p>NOME</p>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="secondName">
              <p>SOBRENOME</p>
              <input
                type="text"
                onChange={(e) => setSecondName(e.target.value)}
              />
            </div>
          </div>

          <div className="cpfSingUp">
            <p>CPF</p>
            <input type="text" onChange={(e) => setCpf(e.target.value)} />
          </div>
          <div className="tellSingUp">
            <p>TELEFONE</p>
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="emailSingUp">
            <p>EMAIL</p>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="passwordSingUp">
            <p>SENHA</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button>CADASTRAR-SE</button>
        </form>
      </div>
    </div>
  );
}

export default Index;
