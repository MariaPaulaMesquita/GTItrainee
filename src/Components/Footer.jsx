import '../Styles/Footer.css'
import logo from '../Assets/Logomarca.png'
import { Link, useNavigate } from 'react-router-dom'
import instagramIcon from'../Assets/Instagramicon.png'
import facebookIcon from'../Assets/facebookicon.png'
import linkedinIcon from '../Assets/linkedinicon.png'
import { HashLink as HLink } from 'react-router-hash-link';

function Footer (){
return(
   <footer id="mainFooter">
    <ul><li><img src={logo} className='logo'></img></li>
    <li className='textomotivador'>Vamos embarcar nessa aventura!</li>
    </ul>
    <ul><div className='indice'>Sessões</div>
      <li><HLink smooth to="/#servicos">Nossos Serviços</HLink></li>
      <li><HLink smooth to="/#portfolio">Portfolio</HLink></li>
      <li><HLink smooth to="/sobre">Sobre</HLink></li>
      <li><HLink smooth to="/time">Nosso Time</HLink></li>
      <li><HLink smooth to="/parceiros">Parceiros</HLink></li>
      <li><HLink smooth to="/contato">Contato</HLink></li>
    </ul>
    <ul> <div className='indice'> Contatos </div>
      <div className='fontcontatos'>
      <li>(00)00000-0000</li>
      <li>capyplaydev@gmail.com</li>
      <li>Rua da Paz, 12, Bairro, CE, Brasil</li></div>
    </ul>
    <ul> <div className='indice'>Redes Sociais</div>
     <div className='redes'>
      <li><a href="https://www.facebook.com/">
      <img src={facebookIcon} className='facebook-icon'></img></a></li>
      <li><a href="https://www.instagram.com/">
      <img src={instagramIcon} className='instagram-icon'></img></a></li>
      <li><a href="https://www.linkedin.com/">
      <img src={linkedinIcon} className='linkedin-icon'></img></a></li>
      </div>
      <div><li><img src={logo} className='logo2'></img> </li></div>
    </ul>

   </footer>
)
} export default Footer