import decosobre from'../Assets/decosobre.png'
import backsobre from '../Assets/backgsobre.png'
import logo from '../Assets/Logomarca.png'
import '../Styles/Sobre.css'
import contrato from'../Assets/iconcontrato.png'
import loja from'../Assets/iconloja.png'
import luz from '../Assets/iconluz.png'
import maos from'../Assets/iconmaos.png'
function Sobre(){
return(
<div id="mainSobre">
 <div className='areasobre'>
    
    <div className='linhasobre'>
    <img src={decosobre} className='decosobre1'></img>
     <div className="papel-com-titulo">
        <img src={backsobre} className='backsobre'></img>
      <h1 className='titulosobre'>SOBRE NÓS</h1></div>
    <img src={decosobre} className='decosobre2'></img> </div>
    <div > <img src={logo} className='logo'></img></div>
</div>
<div className='area-lt'>
  <div className='linhatemp1'>
  <img src={luz} className='luz'></img>
  <div className='titlelt'> 2012 </div>
  <div className='agrupamento'><div className='circulo'></div>
  <div className="linhavertical"></div>
  <div className='textodireito'><div className='titlelt'> A IDEIA </div>
  <div className='textolt'> Lorem ipsum dolor sit amet, consectetur  adipiscing elit,<br></br>
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br>
  nisi ut aliquip ex ea commodo consequat. </div></div></div>
  </div>

  <div className='linhatemp2'> 
  <img src={maos} className='maos'></img>
  <div className='titlelt'> 2013 </div>
  <div className='agrupamento'><div className='circulo'></div>
  <div className="linhavertical"></div>
  <div className='textoesquerdo'><div className='titlelt'> O INICIO </div>
  <div className='textolt'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit,<br></br>
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br>
  nisi ut aliquip ex ea commodo consequat.</div></div></div>
</div>
  <div className='linhatemp1'>
  <img src={loja} className='luz'></img>
  <div className='titlelt'> 2015 </div>
  <div className='agrupamento'><div className='circulo'></div>
  <div className="linhavertical"></div>
  <div className='textodireito'><div className='titlelt'> CRIAÇÃO DA EMPRESA </div>
  <div className='textolt'> Lorem ipsum dolor sit amet, consectetur  adipiscing elit,<br></br>
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br>
  nisi ut aliquip ex ea commodo consequat. </div></div></div>
  </div>
  <div className='linhatemp2'> 
  <img src={contrato} className='maos'></img>
  <div className='titlelt'> 2016 </div>
  <div className='agrupamento'><div className='circulo'></div>
  <div className='textoesquerdo'><div className='titlelt'> PRIMEIRO CONTRATO </div>
  <div className='textolt'>Lorem ipsum dolor sit amet, consectetur  adipiscing elit,<br></br>
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br></br>
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris<br></br>
  nisi ut aliquip ex ea commodo consequat.</div></div></div>
</div>

</div> </div>
)
} export default Sobre