import React, {useState} from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";

function Index() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try{
      await signInWithEmailAndPassword(auth, email, password)
      window.location.href = "/app/app/painel"
      console.log('login feito com sucesso')
    }catch (error){
      switch (error.code) {
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
    }

    console.log(email, password)
  }

  return (
    <div className="loginContainer">
      <div className="leftlogin">
        <h1>BEM VINDO!</h1>
        <NavLink to={"/cadastrar"}><button>CRIAR CONTA</button></NavLink>  
      </div>
      <hr />
      <form className="rightlogin" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <input type="email" placeholder="EMAIL" className="email" required onChange={ e => setEmail(e.target.value)}/>
        <input type="password" name="" id="" placeholder="SENHA" required onChange={ e => setPassword(e.target.value)}/>
        <button> Acessar</button>
      </form>
    </div>
  );
}

export default Index;
