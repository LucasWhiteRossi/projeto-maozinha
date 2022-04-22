import { Link } from "react-router-dom";
import './style.modules.css'
import logoImg from "./../../assets/img/Projeto_Maozinha.png"
export function Navbar() {
return (
    <nav className="navbar navbar-dark bg-dark">
    <h1>
    <Link to="/" style={{ textDecoration: "none" }}>
      <div style={{color:"white"}}>
        <img src={logoImg} alt="Projeto Mãozinha" style={{width:"100px",height:"auto"}}/>
        Home
      </div>
      </Link>
    </h1>
    <div className="nav-items">
      
        <Link className="btn btn-outline-success m-2" to="/cadastrodivulgacoes">CADASTRO DIVULGAÇÕES</Link>
        <Link className="btn btn-outline-success m-2" to="/cadastropedido">CADASTRO PEDIDOS</Link>
        <Link className="btn btn-outline-success m-2" to="/pedidos">PEDIDOS</Link>
        <Link className="btn btn-outline-success m-2" to="/divulgacoes">DIVULGAÇÕES</Link>
      
    </div>
  </nav>
);
}