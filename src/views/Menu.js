import '../Css/Menu.css'
import '../Css/Img-Principal.css'
import '../Css/Text.css'
import '../Css/Footer.css'
import Logo from '../img/Logo-Bio.jpg'
import LogoPc from '../img/LogoBioPc.svg'
import img from '../img/Sapo.svg'
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Menu() {
  const colorG = {
    color: 'green'
  }

  const fontR = {
    fontFamily: "roboto"
  }

  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token) {
      setUserEmail(email); 
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setUserEmail(null); 
  }

  function handleLogin() {
    navigate('/Login');
    }

  const [showEducation, setShowEducation] = useState(false);
  const [showInstitutes, setShowInstitutes] = useState(false);

  function toggleEducation() {
    setShowEducation(!showEducation);
  };

  function toggleInstitutes()  {
    setShowInstitutes(!showInstitutes);
  };

  return (
    <>
      <header className="header-nav" style={fontR}>
        <span className='logo-header'>
          <img className='Logo' src={Logo} alt="Logo" />
          <img className='LogoPc' src={LogoPc} alt="Logo" />
        </span>
        <nav>

          <div className='menuPc'>
            <div className="menu">
              <div className="item">
                <p className="link">
                  <span> Educação Ambiental <CgChevronDown /> </span>
                </p>
                <div className="submenu">
                  <div className="submenu-item">
                    <NavLink to="/Queimada">Queimadas</NavLink>
                  </div>
                  <div className="submenu-item">
                    <NavLink to="/Especies">Perda de Espécies</NavLink>
                  </div>
                </div>
              </div>

              <h3><NavLink to="/Ods">ODS 15</NavLink></h3>

              <div className="item">
                <p className="link">
                  <span> Instituto <CgChevronDown /> </span>
                </p>
                <div className="submenu">
                  <div className="submenu-item">
                    <NavLink to="/Araraazul">Instituto Arara Azul</NavLink>
                  </div>
                  <div className="submenu-item">
                    <NavLink to="/Onca">Istituto Onça Pintada</NavLink>
                  </div>
                  <div className="submenu-item">
                    <NavLink to="/Pantanal">SOS Pantanal</NavLink>
                  </div>
                  <div className="submenu-item">
                    <NavLink to="/Ipe">IPÊ</NavLink>
                  </div>
                </div>
              </div>
              {!userEmail ? (<button onClick={handleLogin} className='ButtonEntrarNav'>Entrar</button>
            ):(
            <button onClick={handleLogout} className='ButtonEntrarNav'>Sair</button>)}
            </div>
          </div>


          <input type="checkbox" className="menu-fack"></input>
          <div className='menulinhas'>
            <div className='linha1'></div>
            <div className='linha2'></div>
            <div className='linha3'></div>
          </div>
          <section className="menuinterativo">
            {userEmail ? (
              <div className="menu-interativo-componentes">
                <VscAccount />
                <div className="facaseulogin">
                  <p style={fontR}>Olá, <span style={colorG}>{userEmail}</span></p>
                </div>
              </div>
            ) : (
              <div className="menu-interativo-componentes">
                <VscAccount />
                <div className="facaseulogin">
                  <p>
                    Faça seu <span><NavLink to="/Login">Login</NavLink></span>
                  </p>
                </div>
              </div>
            )}
            <div className='bordamenu'></div>
            <div className='linksmenu'>
              <div className="linkinteracao1">
                <h3 onClick={toggleEducation}>Educação Ambiental</h3>
                {showEducation && (
                  <div className="linkeducacao">
                    <ul>
                      <li><NavLink to="/Queimada">Queimadas</NavLink></li>
                      <li><NavLink to="/Especies">Perda de Espécies</NavLink></li>
                    </ul>
                  </div>
                )}
              </div>

              <h3><NavLink to="/Ods">ODS 15</NavLink></h3>

              <div className='linkinteracao2'>
                <h3 onClick={toggleInstitutes}>Institutos</h3>
                {showInstitutes && (
                  <div className="linkinstitutos">
                    <ul>
                      <li><NavLink to="/Araraazul">Instituto Arara Azul</NavLink></li>
                      <li><NavLink to="/Onca">Instituto Onça Pintada</NavLink></li>
                      <li><NavLink to="/Pantanal">SOS Pantanal</NavLink></li>
                      <li><NavLink to="/Ipe">IPÊ</NavLink></li>
                    </ul>
                  </div>
                )}
              </div>
              <li>{userEmail && (<div className="linkinteracao3"><button onClick={handleLogout} className="logout-button">Sair</button></div>)}</li>
            </div>

          </section>

        </nav>
      </header>

      <section className='img-principal' style={fontR}>
        <img src={img} alt="sapo" />
        <label className='legenda-img'>Helping preserve <span>nature’s</span> balance.</label>
      </section>

      <section className='text-container'>
        <section className='text' style={fontR}>
          <p>
            O <span> BioSphere </span> é um projeto
            informativo que visa conscientizar
            o público sobre os principais impactos
            ambientais que afetam a biodiversidade
            terrestre, com base no Objetivo de
            Desenvolvimento Sustentável 15 (ODS 15)
            da ONU: "Proteger, recuperar e promover
            o uso sustentável dos ecossistemas terrestres,
            gerenciar florestas de forma sustentável,
            combater a desertificação, deter e reverter
            a degradação da terra e deter a perda de
            biodiversidade."
          </p>

          <p>
            Nosso objetivo é educar as pessoas
            sobre questões <span> ambientais críticas</span>, como:
          </p>

          <ul className='text-ul'>
            <li>
              Queimadas: As queimadas, muitas vezes
              provocadas para expandir áreas agrícolas ou para
              a extração de recursos, destroem vastas extensões
              de florestas e habitats essenciais para inúmeras
              espécies.
              Esses incêndios não só resultam na perda de
              biodiversidade, mas também agravam as mudanças
              climáticas, liberando grandes quantidades de dióxido de
              carbono na atmosfera.
            </li>
            <li>
              Perda de Espécies: A extinção de espécies devido à destruição de habitats, caça, mudanças
              climáticas e poluição é uma das ameaças mais
              graves ao equilíbrio dos ecossistemas.
              Cada espécie perdida afeta a cadeia alimentar e o
              funcionamento dos ecossistemas, colocando em risco os
              serviços ambientais que sustentam a vida humana,
              como a polinização, a purificação da água e o
              sequestro de carbono.
            </li>
          </ul>

          <p>
            Através de artigos e outros recursos educativos,
            o <span> BioSphere </span> pretende fornecer informações claras e
            acessíveis sobre essas problemáticas.
            Nosso foco é ajudar o público a entender as
            consequências das atividades humanas no meio
            ambiente e como isso se relaciona diretamente
            com a perda de biodiversidade e a saúde dos
            ecossistemas.
          </p>

          <p>
            Embora o projeto seja inteiramente informativo,
            nossa missão é inspirar uma mudança de mentalidade,
            incentivando as pessoas a refletirem sobre seu papel
            na preservação do planeta. Ao conscientizar sobre a
            urgência de proteger a natureza, esperamos contribuir
            para um futuro mais sustentável, onde a coexistência
            entre o ser humano e a natureza seja harmoniosa e
            equilibrada.
          </p>
        </section>
      </section>


      <footer className='footer' style={fontR}>

        <div className='footer-img'>
        <img className='Logo' src={Logo} alt="Logo" />
        <img className='LogoPc' src={LogoPc} alt="Logo" />
        </div>
            
        <div className='icon-footer'> 
          <span>REDES SOCIAIS:</span> 
        <div className='subeIconFoter'>
          <IoLogoFacebook /> <p>FaceBook</p>   
          </div>
          <div className='subeIconFoter'>
          <PiInstagramLogoFill /> <p>Instagram</p>   
          </div>
          <div className='subeIconFoter'>
          <MdEmail /> <p>BioSphere@gmail.com</p> </div>
          </div>

        <div className='footer-bio'> <h5>© BioSphere</h5></div>
      </footer>

    </>
  );
}

export default Menu;