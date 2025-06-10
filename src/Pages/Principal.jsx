import '../Styles/Principal.Modules.css'
import '../Styles/Servicos.Modules.css'
import '../Styles/Portfolio.Modules.css'
import banner from '../Assets/imagem0h.png'
import controleicon from'../Assets/controleicon.png'
import controleimg from'../Assets/controleimg.png'
import pcicon from'../Assets/pcicon.png'
import pcimg from'../Assets/pcimg.png'
import paintimg from'../Assets/paintimg.png'
import painticon from'../Assets/painticon.png'
import suporticon from'../Assets/suporticon.png'
import suportimg from'../Assets/suportimg.png'
import logo from '../Assets/Logomarca.png'
import telefone from '../Assets/telefone.png'
import Contato from './Contato'

function Principal() {
 return(
  <div id="mainPrincipal">
  <div className="banner">
     <img src={banner}/> 
     <a href="#servicos" className="banner-btn">SAIBA MAIS</a>
     </div>
 <section id="servicos">
  <h2>NOSSOS SERVIÇOS</h2>
  {<div className="cards-container"> 
    <div className="card-destaque">
      <div className="card-header">
        <img src={controleicon} alt="Ícone controle" className="controle-icon" />
        <h2 className="titulo">DESENVOLVIMENTO COMPLETO DE JOGOS</h2>
      </div>
      <div className="card-conteudo">
        <div className="imagem-circular">
          <img src={controleimg} alt="Imagem circular" />
        </div>
        <p className="texto-lateral">         
        •Criação de jogos completos em 2D e 3D <br></br>      
        •Jogos educativos, publicitários e corporativos
        </p>
      </div></div>
      <div className="card-destaque card2">
    <div className="card-header">
      <img src={pcicon} alt="controle" className="controle-icon" />
      <h2 className="titulo">PORTABILIDADE</h2>
    </div>
    <div className="card-conteudo">
      <div className="imagem-circular">
            <img src={pcimg} alt="Imagem 2" />
      </div>
      <p className="texto-lateral">•Multiplataforma <br></br>
              •Portamos para PC, web, mobile e consoles
            </p>
    </div>
  </div>

  {/* Terceiro card */}
  <div className="card-destaque card3">
    <div className="card-header">
      <img src={painticon} alt="controle" className="controle-icon" />
      <h2 className="titulo">ARTE E ANIMAÇÃO</h2>
    </div>
    <div className="card-conteudo">
      <div className="imagem-circular">
        <img src={paintimg} alt="Imagem 3" />
      </div>
      <p className="texto-lateral">•Design de personagens e cenários únicos <br></br>
•Animações em 2D e 3D <br></br>
•Criação de interfaces intuitivas e imersivas
</p>
    </div>
  </div>

  {/* Quarto card */}
  <div className="card-destaque card4">
    <div className="card-header">
      <img src={suporticon} alt="controle" className="controle-icon" />
      <h2 className="titulo">SUPORTE E TESTES</h2>
    </div>
    <div className="card-conteudo">
      <div className="imagem-circular">
        <img src={suportimg} alt="Imagem 4" />
      </div>
      <p className="texto-lateral">•Testes de jogabilidade (playtests) <br></br>
•Correção de bugs e balanceamento <br></br>
•Atualizações e suporte pós-lançamento</p>
    </div>
  </div>
    </div>}
</section>

<section id="portfolio">
  <h2>Portfólio</h2>
  <div className='areaimgport'>
    <img src={banner} className='imgport'/>
    <img src={banner} className='imgport'/>
    <img src={banner} className='imgport'/>
    <img src={banner} className='imgport'/>
    </div>
</section>

  <Contato/>
  </div>

 )
} export default Principal