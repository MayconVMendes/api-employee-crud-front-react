import { Link } from "react-router-dom"
import "./index.scss"

export default function Header() {
    return(
        <header>
        <div className="container">
          <Link to="/"><h1>Homepage</h1></Link>
          <nav className="nav">
            <Link to="/funcionario">Funcionario</Link>
            <Link to="/departamento">Departamento</Link>
            <Link to="/projeto">Projeto</Link>
          </nav>
        </div>
      </header>
    )
}