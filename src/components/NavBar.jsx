import { NavLink } from "react-router-dom";
import { TbHeartRateMonitor } from "react-icons/tb";
import { RiToolsFill } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
import { IoCalendarNumberOutline, IoExitOutline } from "react-icons/io5";
import "../styles/NavBar.css";
import Logo from "../assets/Logo.png";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";

function NavBar() {
  const { user } = useAuth();

  if (!user) return <p>Carregando...</p>;

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/"
    } catch (error) {
      console.log({error})
    }
  }

  return (
    <div className="menu">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      

      <div className="menu-list">
        {['MASTER', 'ADM'].map(item => user.role.includes(item)).includes(true) && (
          <NavLink to={"/app/painel"} className="item">
            <TbHeartRateMonitor className="icon" />
            Painel
          </NavLink>
        )}

        {['MASTER', 'ADM', 'USER'].map(item => user.role.includes(item)).includes(true) && (
          <NavLink to={"/app/ordem_de_servico"} className="item">
            <RiToolsFill className="icon" />
            Ordem de Serviço
          </NavLink>
        )}

        {['MASTER'].map(item => user.role.includes(item)).includes(true) && (
          <NavLink to={"/app/cadastros"} className="item">
          <MdPeopleAlt className="icon" />
          Cadastros
        </NavLink>
        )}

        {['MASTER', 'ADM'].map(item => user.role.includes(item)).includes(true) && (
         <NavLink to={"/app/agenda"} className="item">
            <IoCalendarNumberOutline className="icon" />
            Agenda
          </NavLink>
        )}
       
      </div>
      <NavLink className="item exit" onClick={handleLogout}>
        <IoExitOutline className="icon" />
        Sair
      </NavLink>
    </div>
  );
}

export default NavBar;
