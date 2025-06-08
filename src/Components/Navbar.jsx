import '../Styles/Navbar.Modules.css'
import logo from '../Assets/Logomarca.png'
import { Link } from 'react-router-dom'
function Navbar(){
    return(
        <nav id="mainNav">
          <ul>
            <div> 
                <Link to="/" className="logo-area">
                 <img src={logo} alt="Logo"  /></Link>
            </div>
            <li> 
                <a href="/#servicos">Serviços</a>
            </li>
            <li>
               <a href="/#portfolio">Portfólio</a>
            </li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/time">Nosso time</Link></li>
            <li><Link to="/parceiros">Parceiros</Link></li>
            <li><Link to="/contato">Contato</Link></li>
           </ul>
        </nav>
    )
}
export default Navbar