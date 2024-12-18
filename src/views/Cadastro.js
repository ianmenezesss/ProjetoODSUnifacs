import { BsArrowLeftShort } from "react-icons/bs";
import { NavLink, Link, useNavigate } from 'react-router-dom';
import '../Css/Cadastro.css'
import Logo from '../img/Logo-Bio.jpg'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiLockKeyLight } from "react-icons/pi";
import '../Css/Button.css'
import { BsArrowRightShort } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import sapocadastro from '../img/SapoCadastro.svg'
import { useRef, useEffect } from "react";
import api from '../services/api';


function Cadastro() {
  const emailRef = useRef();
  const nameRef = useRef();
  const senhaRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/') 
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const { data } = await api.post('/cadastro', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        senha: senhaRef.current.value
      });

      const token = data.token;

      localStorage.setItem('token', token); 
      localStorage.setItem('email', emailRef.current.value); 


      navigate('/')

    } catch (e) {
      alert(e.response.data.error);
    }

  }

  return (
    <>

      <img className="sapocadastro" src={sapocadastro} alt="Sapo" />

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
        <form id="from" onSubmit={handleSubmit}>
          <div>
            <MdOutlineMarkEmailUnread /> <input ref={emailRef} type="Email" id="email" placeholder="E-mail"></input>
          </div>
          <div>
            <RxPerson /> <input ref={nameRef} type="Name" id="name" placeholder="Nome"></input>
          </div>
          <div>
            <PiLockKeyLight /> <input ref={senhaRef} type="password" id="senha" placeholder="Senha"></input>
          </div>
          <section>
            <button className='buttonCadastroHome'> Cadastre-se <BsArrowRightShort /></button>
          </section>


        </form>
      </section>

      <section className="OrCadastro">
        <div></div>
        <h3>OR</h3>
        <div></div>
      </section>

      <section className="buttonEntrarCadastro">
        <NavLink to="/Login"><button className='buttonEntrarLogin'> Login <BsArrowRightShort /> </button></NavLink>
      </section>
    </>
  );
};

export default Cadastro;