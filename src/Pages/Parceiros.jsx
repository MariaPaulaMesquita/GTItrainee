import deco1 from'../Assets/deco1.png'
import deco2 from'../Assets/deco2.png'
import '../Styles/Parceiros.css'
import parceiro1 from '../Assets/parceiro.png'
import ruidop from '../Assets/ruidop.png'
function Parceiros(){
return(
<div id="mainParceiros">
 <div className="parceirosLinha"> <img src={deco1} className='deco1'></img>
 <img src={deco2} className='deco2'></img>
 <h1 className='ptitulo'>PARCEIROS</h1>
 <img src={deco1} className='deco1'></img>
 <img src={deco2} className='deco2'></img>
</div>
<div className='area-parceiros'> 
    <img src={parceiro1} className='parceiro1'></img>
    <img src={parceiro1} className='parceiro1'></img>
    <img src={parceiro1} className='parceiro1'></img>
</div>
<div className='area-parceiros'> 
    <img src={parceiro1} className='parceiro1'></img>
    <img src={parceiro1} className='parceiro1'></img>
    <img src={parceiro1} className='parceiro1'></img>
</div>

</div>

)
} export default Parceiros