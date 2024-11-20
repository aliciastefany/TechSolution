import Vendas from "./components/Vendas";
import Gastos from "./components/Gastos";
import Lucro from "./components/Lucro"
import "./styles/painel.css";

import useAuth from '../../hooks/useAuth';

function Painel() {
  const { user } = useAuth();

  if (!user) return <p>Carregando...</p>;

  return (
    <div className="containerPainel">
      <Vendas />
      <div>
      <div>
        <h1>Bem-vindo, {user.firstName} {user.lastName}</h1>
      </div>
        <Gastos />
        <Lucro />
      </div>
    </div>
  );
}

export default Painel;
