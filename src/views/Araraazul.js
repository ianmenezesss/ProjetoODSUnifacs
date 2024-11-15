import '../Css/Menu.css'
import '../Css/Button.css'
import '../Css/Img-Principal.css'
import '../Css/Footer.css'
import '../Css/Text.css'
import Logo from '../img/Logo-Bio.jpg'
import img from '../img/AraraAzul.svg'
import LogoPc from '../img/LogoBioPc.svg'
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Araraazul() {
  const colorG = {
    color: 'green'
  }

  const fontR = {
    fontFamily: "roboto"
  }

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token) {
      setUserEmail(email); // Define o email se o token existir
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('token'); // Remove o token
    localStorage.removeItem('email'); // Remove o email
    setUserEmail(null); // Reseta o estado do email
  }

  return (
    <>
      <header className="header-nav" style={fontR}>
        <span className='logo-header'>
          <NavLink to="/"><img className='Logo' src={Logo} alt="Logo" /></NavLink>
          <NavLink to="/"><img className='LogoPc' src={LogoPc} alt="Logo" /></NavLink>
        </span>
        <nav>

          <div className='menuPc'>
            <div class="menu">
              <div class="item">
                <a href="#" class="link">
                  <span> Educação Ambiental <CgChevronDown /> </span>
                </a>
                <div class="submenu">
                  <div class="submenu-item">
                    <NavLink to="/Queimada">Queimadas</NavLink>
                  </div>
                  <div class="submenu-item">
                    <NavLink to="/Especies">Perda de Espécies</NavLink>
                  </div>
                </div>
              </div>

              <h3><NavLink to="/Ods">ODS 15</NavLink></h3>

              <div class="item">
                <a href="#" class="link">
                  <span> Instituto <CgChevronDown /> </span>
                </a>
                <div class="submenu">
                  <div class="submenu-item">
                    <NavLink to="/Araraazul">Instituto Arara Azul</NavLink>
                  </div>
                  <div class="submenu-item">
                    <NavLink to="/Onca">Istituto Onça Pintada</NavLink>
                  </div>
                  <div class="submenu-item">
                    <NavLink to="/Pantanal">SOS Pantanal</NavLink>
                  </div>
                  <div class="submenu-item">
                    <NavLink to="/Ipe">IPÊ</NavLink>
                  </div>
                </div>
              </div>
              <button className='ButtonEntrarNav'><NavLink to="/Login">Entrar</NavLink></button>
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
              <div className='linkinteracao1'>
                <h3>Educação Ambiental 
                  <div className='linkeducação'>
                    <ul>
                      <li><NavLink to="/Queimada">Queimadas</NavLink></li>
                      <li><NavLink to="/Especies">Perda de Espécies</NavLink></li>
                    </ul>
                  </div>
                </h3>
              </div>
              <h3><NavLink to="/Ods">ODS 15</NavLink></h3>
              <div className='linkinteracao2'>
                <h3>Institutos 
                  <div className='linkinstitutos'>
                    <ul>
                      <li><NavLink to="/Araraazul">Instituto Arara Azul</NavLink></li>
                      <li><NavLink to="/Onca">Istituto Onça Pintada</NavLink></li>
                      <li><NavLink to="/Pantanal">SOS Pantanal</NavLink></li>
                      <li><NavLink to="/Ipe">IPÊ</NavLink></li>
                      <li>{userEmail && (<div className="linkinteracao3"><button onClick={handleLogout} className="logout-button">Sair</button></div>)}</li>
                    </ul>
                  </div>
                </h3>
              </div>
            </div>
          </section>

        </nav>
      </header>

      <section className='img-principal' style={fontR}>
        <img src={img} alt="AraraAzul" />
        <label className='legenda-img'>Helping preserve <span>nature’s</span> balance.</label>
      </section>

      <section className='text' style={fontR}>
        <div className='texto-principal'>
          <span>Instituto Arara Azul:</span>
        </div>

        <p>
          O Instituto Arara Azul é uma organização sem fins lucrativos que, desde 1990,
          dedica-se à conservação da arara-azul-grande (Anodorhynchus hyacinthinus),
          uma das espécies de aves mais emblemáticas do Brasil e que já esteve seriamente
          ameaçada de extinção. Com sede no Pantanal, o maior bioma úmido do mundo, o Instituto
          trabalha ativamente na proteção da arara-azul e na preservação de seu habitat natural,
          uma região rica em biodiversidade, mas vulnerável a ameaças como o desmatamento e as queimadas.
        </p>

        <p>
          Fundado pela bióloga Neiva Guedes, o Instituto Arara Azul surgiu como uma resposta à
          alarmante redução das populações de araras-azuis devido à destruição de seus habitats,
          tráfico de animais e caça ilegal. Hoje, mais de 30 anos depois, a organização se tornou uma
          referência mundial em projetos de conservação de aves e recuperação de populações ameaçadas,
          alcançando resultados expressivos na preservação da espécie.
        </p>

        <p>
          O principal objetivo do Instituto é garantir a sobrevivência das araras-azuis e de
          outras espécies ameaçadas, por meio de pesquisas científicas, educação ambiental e
          ações de manejo e monitoramento. Através de um programa de conservação abrangente,
          eles monitoram os ninhos, estudam os hábitos de reprodução das araras e promovem a
          preservação das árvores onde essas aves fazem seus ninhos, como os manduvis e as aroeiras.
        </p>

        <p>
          Além da conservação direta da arara-azul, o Instituto também desempenha um papel
          importante na sensibilização das comunidades locais e na promoção do ecoturismo
          sustentável. Ao longo de suas três décadas de atuação, o trabalho do Instituto
          Arara Azul ajudou a restaurar as populações da espécie no Pantanal e influenciou
          políticas públicas de conservação no Brasil. Hoje, o instituto segue firme em sua missão,
          colaborando com parceiros locais e internacionais para garantir que a arara-azul continue a
          ser um símbolo de esperança e preservação da vida selvagem.
        </p>

        <p>
          O Instituto Arara Azul é uma prova de que, com esforços contínuos e coordenados,
          é possível reverter o risco de extinção e garantir um futuro mais seguro para as
          espécies que compõem a rica biodiversidade brasileira.
        </p>

      </section>


      <section>
        <button style={fontR} className='button'><a href='https://www.institutoararaazul.org.br/'>Vem Conhecer!</a></button>
      </section>


      <footer className='footer'>

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

        <div className='footer-bio'> <h5 style={fontR}>© BioSphere</h5></div>
      </footer>

    </>
  );
};

export default Araraazul;