import '../Css/Menu.css'
import '../Css/Img-Principal.css'
import '../Css/Button.css'
import '../Css/Text.css'
import '../Css/Footer.css'
import Logo from '../img/Logo-Bio.jpg'
import img from '../img/Ipe.svg'
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Ipe() {
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
                    <Link to='/'>
                        <img src={Logo} alt="Logo" />
                    </Link>
                </span>
                <nav>
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
                                <h3>Educação Ambiental <CgChevronDown />
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
                                <h3>Institutos <CgChevronDown />
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
                <img src={img} alt="Ipe" />
                <label className='legenda-img'>Helping preserve <span>nature’s</span> balance.</label>
            </section>

            <section className='text' style={fontR}>
                <div className='texto-principal'>
                    <span>IPÊ:</span>
                </div>

                <p>
                O Instituto IPÊ – Instituto de Pesquisas Ecológicas é uma das principais organizações ambientais do 
                Brasil, atuando há mais de 30 anos em prol da conservação da biodiversidade e do desenvolvimento 
                sustentável. Fundado em 1992, o Instituto surgiu como uma resposta à crescente degradação dos 
                ecossistemas brasileiros e à necessidade de aliar a pesquisa científica à educação ambiental e à 
                participação comunitária para garantir a preservação da natureza.
                </p>

                <p>
                Com sede no estado de São Paulo, o IPÊ desenvolve seus projetos em diversos biomas brasileiros, 
                incluindo a Mata Atlântica, Amazônia, Pantanal e o Cerrado, buscando soluções que promovam o 
                equilíbrio entre a conservação ambiental e o desenvolvimento humano. A atuação do IPÊ é baseada 
                em uma abordagem integrada, que envolve a pesquisa científica aplicada à conservação, o monitoramento 
                de espécies ameaçadas, a restauração de ecossistemas, e a educação ambiental como ferramentas fundamentais 
                para a proteção da biodiversidade.
                </p>

                <p>
                O Instituto se destaca especialmente pelo trabalho em restauração florestal, sendo responsável por 
                um dos maiores projetos de reflorestamento da Mata Atlântica, com milhões de árvores plantadas ao 
                longo dos anos. Esse trabalho é crucial não apenas para a recuperação dos habitats naturais, mas também 
                para a mitigação das mudanças climáticas, por meio do sequestro de carbono pelas florestas restauradas.
                </p>

                <p>
                Além da restauração, o IPÊ desenvolve projetos de conservação de espécies ameaçadas, como a onça-pintada, 
                o mico-leão-preto e a anta brasileira, realizando monitoramento populacional e promovendo a proteção dos
                 habitats dessas espécies. Outra área de destaque é a educação e sensibilização ambiental, com programas que 
                 envolvem escolas, comunidades rurais e urbanas, capacitando pessoas para o manejo sustentável dos recursos 
                 naturais e para a importância da preservação da biodiversidade.
                </p>

                <p>
                O IPÊ também atua na formação de lideranças para a conservação, oferecendo cursos e programas de capacitação 
                através de seu Centro de Formação em Conservação da Biodiversidade (ESCAS), que prepara profissionais e líderes 
                ambientais para enfrentar os desafios da conservação no Brasil e no mundo.
                </p>

                <p>
                O objetivo central do Instituto IPÊ é proteger a biodiversidade brasileira, promovendo a sustentabilidade e o 
                desenvolvimento social das comunidades locais. Através de seus projetos de pesquisa, educação e restauração, o 
                IPÊ busca criar um impacto positivo a longo prazo, contribuindo para a construção de um futuro onde a natureza e o ser 
                humano possam coexistir em harmonia.
                </p>

            </section>

            <section>
                <button style={fontR} className='button'><a href='https://ipe.org.br/o-ipe/'>Vem Conhecer!</a></button>
            </section>

            <footer className='footer'>

                <div className='footer-img'>
                    <img src={Logo} alt="Logo" />
                </div>

                <div className='icon-footer'><IoLogoFacebook />    <PiInstagramLogoFill />    <MdEmail /></div>

                <div className='footer-bio'> <h5 style={fontR}>© BioSphere</h5></div>
            </footer>

        </>
    );
};

export default Ipe;