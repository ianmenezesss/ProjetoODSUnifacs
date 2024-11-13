import { BsArrowLeftShort } from "react-icons/bs";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import '../Css/Login.css'
import Logo from '../img/Logo-Bio.jpg'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiLockKeyLight } from "react-icons/pi";
import '../Css/Button.css'
import { BsArrowRightShort } from "react-icons/bs";
import arvore from '../img/imag-Login.svg'
import { useRef } from "react";
import api from '../services/api';

function Login() {
  const emailRef = useRef();
  const senhaRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const { data:token } = await api.post('/login', {
        email: emailRef.current.value,
        senha: senhaRef.current.value
      })

      localStorage.setItem('token', token);
      localStorage.setItem('email', emailRef.current.value);

      navigate('/')

    } catch (e) {
      alert("Senha ou Email incorretos");
    }

  }
  
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
        <form id="from" onSubmit={handleSubmit}>
          <div>
            <MdOutlineMarkEmailUnread /> <input ref={emailRef} type="Email" id="email" placeholder="E-mail"></input>
          </div>
          <div>
            <PiLockKeyLight /> <input ref={senhaRef} type="password" id="senha" placeholder="Senha"></input>
          </div>
          <section>
            <button className='buttonEntrarParaHome'> Entrar <BsArrowRightShort /></button>
          </section>


        </form>
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