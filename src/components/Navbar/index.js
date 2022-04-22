import { Link } from "react-router-dom";

export function Navbar() {
return (
    <nav className="navbar navbar-light bg-light">
    <h1>
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        Projeto Mãozinha{" "}
      </Link>
    </h1>
    <ul>
    <li><Link to="/cadastrodivulgacoes">CADASTRO DIVULGAÇÕES</Link></li>
    <li><Link to="/cadastropedido">CADASTRO PEDIDOS</Link></li>
    <li><Link to="/pedidos">PEDIDOS</Link></li>
    <li><Link to="/divulgacoes">DIVULGAÇÕES</Link></li>
    </ul>
  </nav>
);
}