import deco1 from'../Assets/deco1.png'
import deco2 from'../Assets/deco2.png'
import '../Styles/Time.css'
function Time(){
return(
 <div id="mainTime">
 <div className="timeLinha"> <img src={deco1} className='deco1'></img>
 <img src={deco2} className='deco2'></img>
 <h1 className='ttitulo'> NOSSO TIME</h1>
 <img src={deco1} className='deco1'></img>
 <img src={deco2} className='deco2'></img>
</div>

</div>
)
}export default Time