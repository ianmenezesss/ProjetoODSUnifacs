import { BsArrowLeftShort } from "react-icons/bs";
import { NavLink, Link } from 'react-router-dom';
import './Css/Login.css'
import Logo from './img/Logo-Bio.jpg'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiLockKeyLight } from "react-icons/pi";
import './Css/Button.css'
import { BsArrowRightShort } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import arvore from './img/imag-Login.svg'


function Login() {
  return (
    <>

    <img className="img-arvore" src={arvore} alt="árvores" />

      <span className="setaLogin">
        <Link to='/'>
          <BsArrowLeftShort />
        </Link>
      </span>
      <section className="imgcomlogin">
        <img className="logo" src={Logo} alt="Logo" />
        <h1 className="loginnome">Login</h1>
      </section>
      <section className="Loginformulario">
        <form id="from">
          <div>
            <MdOutlineMarkEmailUnread /> <input type="Email" id="email" placeholder="E-mail"></input>
          </div>
          <div>
            <PiLockKeyLight /> <input type="password" id="senha" placeholder="Senha"></input>
          </div>
          <section>
            <Link to='/'><button className='buttonEntrarParaHome'> Entrar <BsArrowRightShort /></button></Link>
          </section>
          <section>
            <button className='buttonGoogle'> <FaGoogle /> Entrar com o google</button>
          </section>


        </form>
      </section>

      <section className="esqueceusenhaLogin">
        <p>Esqueceu a senha?</p>
      </section>

      <section className="OrLogin">
        <div></div>
        <h3>OR</h3>
        <div></div>
      </section>

      <section className="buttoncadastroLogin">
            <NavLink to='/Cadastro'><button className='buttoncadastro'> Cadastre-se <BsArrowRightShort /> </button></NavLink>
          </section>
    </>
  );
};

export default Login;