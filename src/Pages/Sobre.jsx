import decosobre from'../Assets/decosobre.png'
import backsobre from '../Assets/backgsobre.png'
import logo from '../Assets/Logomarca.png'
import '../Styles/Sobre.css'
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
<div className='area-lt'></div>
</div>
)
} export default Sobre