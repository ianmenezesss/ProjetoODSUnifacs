import { BsArrowLeftShort } from "react-icons/bs";
import { NavLink, Link } from 'react-router-dom';
import './Css/Cadastro.css'
import Logo from './img/Logo-Bio.jpg'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiLockKeyLight } from "react-icons/pi";
import './Css/Button.css'
import { BsArrowRightShort } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";


function Cadastro() {
  return (
    <>
      <span className="setaCadastro">
        <Link to='/'>
          <BsArrowLeftShort />
        </Link>
      </span>
      <section className="imgcomCadastro">
        <img className="logo" src={Logo} alt="Logo" />
        <h1 className="cadastronome">Cadastre-se</h1>
      </section>
      <section className="formulario">
        <form id="from">
          <div>
            <MdOutlineMarkEmailUnread /> <input type="Email" id="email" placeholder="E-mail"></input>
          </div>
          <div>
          <RxPerson /> <input type="Name" id="name" placeholder="Nome"></input>
          </div>
          <div>
            <PiLockKeyLight /> <input type="password" id="senha" placeholder="Senha"></input>
          </div>
          <section>
            <Link to='/'><button className='buttonCadastroHome'> Cadastre-se <BsArrowRightShort /></button></Link>
          </section>
          <section>
            <button className='buttonGoogle'> <FaGoogle /> Entrar com o google</button>
          </section>


        </form>
      </section>

      <section className="esqueceusenha">
        <p>Esqueceu a senha?</p>
      </section>

      <section className="OrCadastro">
        <div></div>
        <h3>OR</h3>
        <div></div>
      </section>

      <section className="buttonEntrarCadastro">
            <NavLink to="/Login"><button className='buttonEntrarLogin'> Entrar <BsArrowRightShort /> </button></NavLink> 
          </section>
    </>
  );
};

export default Cadastro;