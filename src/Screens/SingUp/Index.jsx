import { useState } from "react";
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
            role: "MASTER", // MASTER, ADMIN ou USER
            permissions: ['read', 'write', 'update', 'delete'] // read, write, update, delete
          };
          const docRef = doc(db, 'users', user.uid);

          setDoc(docRef, userData).then(() => {
            window.location.href = "/";
          }).catch(() => {
            alert('Erro desconhecido!')
          })
        })
        .catch((error) => {
          const errorCode = error.code;

          switch (errorCode) {
            case "auth/email-already-in-use":
              alert("O e-mail já está em uso");
              break;
            case "auth/invalid-email":
              alert("O e-mail fornecido não é válido");
              break;
            case "auth/weak-password":
              alert("A senha deve ter pelo menos 6 caracteres");
              break;
            case "auth/user-disabled":
              alert("A conta foi desabilitada");
              break;
            case "auth/user-not-found":
              alert("Usuário não encontrado");
              break;
            case "auth/wrong-password":
              alert("Senha incorreta");
              break;
            case "auth/too-many-requests":
              alert("Muitas tentativas, tente novamente mais tarde");
              break;
            case "auth/invalid-credential":
              alert("Credenciais inválidas");
              break;
            case "auth/expired-action-code":
              alert("O código de ação expirou");
              break;
            case "auth/unauthorized-domain":
              alert("Este domínio não é autorizado a usar a autenticação");
              break;
            default:
              alert("Erro desconhecido: " + error.message);
              break;
            }
        });
      console.log("conta criada");
    } catch (err) {
      console.log(err);
    }

    console.log(email, password, cpf, firstName, secondName, phone);
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
