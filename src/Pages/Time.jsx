import deco1 from'../Assets/deco1.png'
import deco2 from'../Assets/deco2.png'
import '../Styles/Time.css'
import facebook from '../Assets/facebookcolor.png'
import instagram from'../Assets/instagramcolor.png'
import linkedin from '../Assets/linkedincolor.png'
function Time(){
return(
 <div id="mainTime">
 <div className="timeLinha"> <img src={deco1} className='deco1'></img>
 <img src={deco2} className='deco2'></img>
 <h1 className='ttitulo'> NOSSO TIME</h1>
 <img src={deco1} className='deco1'></img>
 <img src={deco2} className='deco2'></img>
</div>
 <div className='areatime'>
    <div className='cardmembro1'>
     <div className='circulo'></div>
     <div className='nome'> Nicole Oliveira</div>
     <div className='texto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a
        quisquam repellat? Labore, quod corporis tempora adipisci, facilis tempore, culpa consequuntur
        exercitationem dolorum ullam libero cumque blanditiis fugiat voluptates laudantium?
     </div>
     <div className='redesarea'> 
        <img src={facebook} className='facebook'></img>
        <img src={instagram} className='instagram'></img>
        <img src={linkedin} className='linkedin'></img>
     </div>
    </div>
    <div className='cardmembro1'>
     <div className='circulo'></div>
     <div className='nome'> Edson Marques</div>
     <div className='texto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a
        quisquam repellat? Labore, quod corporis tempora adipisci, facilis tempore, culpa consequuntur
        exercitationem dolorum ullam libero cumque blanditiis fugiat voluptates laudantium?
     </div>
     <div className='redesarea'> 
        <img src={facebook} className='facebook'></img>
        <img src={instagram} className='instagram'></img>
        <img src={linkedin} className='linkedin'></img>
     </div>
    </div>
    <div className='cardmembro1'>
     <div className='circulo'></div>
     <div className='nome'> Carlos Junior</div>
     <div className='texto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a
        quisquam repellat? Labore, quod corporis tempora adipisci, facilis tempore, culpa consequuntur
        exercitationem dolorum ullam libero cumque blanditiis fugiat voluptates laudantium?
     </div>
     <div className='redesarea'> 
        <img src={facebook} className='facebook'></img>
        <img src={instagram} className='instagram'></img>
        <img src={linkedin} className='linkedin'></img>
     </div>
    </div>
    <div className='cardmembro1'>
     <div className='circulo'></div>
     <div className='nome'> Mariana Lima</div>
     <div className='texto'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a
        quisquam repellat? Labore, quod corporis tempora adipisci, facilis tempore, culpa consequuntur
        exercitationem dolorum ullam libero cumque blanditiis fugiat voluptates laudantium?
     </div>
     <div className='redesarea'> 
        <img src={facebook} className='facebook'></img>
        <img src={instagram} className='instagram'></img>
        <img src={linkedin} className='linkedin'></img>
     </div>
    </div>
 </div>
</div>
)
}export default Time