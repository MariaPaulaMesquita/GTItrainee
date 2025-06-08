import logo from '../Assets/Logomarca.png'
import telefone from '../Assets/telefone.png'
import '../Styles/Contato.css'
import Swal from 'sweetalert2'
function Contato(){

   function handleClick() {
    Swal.fire({
      title: 'Agradecemos pelo contato!',
      text: 'Em breve enviaremos mais informações pelo e-mail.',
      icon: 'success',
      imageUrl: logo,
      imageHeight: 80,
      confirmButtonText: 'Fechar',
      confirmButtonColor: '#000E67'
    });
  }

return(
  <section id="contato">
  <div className='p1'> <img src={logo} className='logo'></img>
       <div className='it'> <img src={telefone} className='telefone'></img> <h2 className='title'>CONTATE-NOS</h2>
      </div>  
     <div className='t1'>Pronto para ter seu próprio jogo?</div>
     <div className='t2'>Vamos embarcar nessa aventura!</div>
  </div>
  <div className='p2'>
   <ul className='l1'>
    <li><label htmlFor="nome">Nome:</label></li>
    <li><input type="text" id='nome' placeholder="Digite seu nome"/></li>
    <li><label htmlFor="email">E-mail:</label></li>
    <li><input type="text" placeholder='Digite seu e-mail'></input></li>
    <li><label htmlFor="email">Telefone:</label></li>
    <li><input type="text" placeholder='(00) 00000-0000'></input></li>
   </ul>
   <ul className='l2'><li><label htmlFor="email">Mensagem:</label></li>
    <li><textarea id="mensagem" rows="6" placeholder='Digite uma mensagem'/></li>
    </ul></div>
   <div><button className='button' type="submit" onClick={handleClick}>ENVIAR</button></div>
  
</section>
)

} export default Contato