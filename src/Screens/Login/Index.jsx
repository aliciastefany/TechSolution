import {useState} from "react";
import "./login.css";
import { NavLink } from "react-router-dom";
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import handleErrorCode from '../../utils/handleErrorCode'

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
      handleErrorCode(error.code, error.message)
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
