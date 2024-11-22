import "../Css/Menu.css";
import "../Css/Img-Principal.css";
import "../Css/Button.css";
import "../Css/Text.css";
import "../Css/Footer.css";
import Logo from "../img/Logo-Bio.jpg";
import img from "../img/Onca.svg";
import LogoPc from "../img/LogoBioPc.svg";
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Onca() {
  const colorG = {
    color: "green",
  };

  const fontR = {
    fontFamily: "roboto",
  };

  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    if (token) {
      setUserEmail(email);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setUserEmail(null);
  }

  function handleLogin() {
    navigate("/Login");
  }

  function vemConhecer() {
    window.location.href = "https://institutooncapintada.org.br/";
  }

  const [showEducation, setShowEducation] = useState(false);
  const [showInstitutes, setShowInstitutes] = useState(false);

  function toggleEducation() {
    setShowEducation(!showEducation);
  }

  function toggleInstitutes() {
    setShowInstitutes(!showInstitutes);
  }

  return (
    <>
      <header className="header-nav" style={fontR}>
        <span className="logo-header">
          <NavLink to="/">
            <img className="Logo" src={Logo} alt="Logo" />
          </NavLink>
          <NavLink to="/">
            <img className="LogoPc" src={LogoPc} alt="Logo" />
          </NavLink>
        </span>
        <nav>
          <div className="menuPc">
            <div className="menu">
              <div className="item">
                <p className="link">
                  <span>
                    {" "}
                    Educação Ambiental <CgChevronDown />{" "}
                  </span>
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

              <h3>
                <NavLink to="/Ods">ODS 15</NavLink>
              </h3>

              <div className="item">
                <p className="link">
                  <span>
                    {" "}
                    Instituto <CgChevronDown />{" "}
                  </span>
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
              {!userEmail ? (
                <button onClick={handleLogin} className="ButtonEntrarNav">
                  Entrar
                </button>
              ) : (
                <button onClick={handleLogout} className="ButtonEntrarNav">
                  Sair
                </button>
              )}
            </div>
          </div>
          <input type="checkbox" className="menu-fack"></input>
          <div className="menulinhas">
            <div className="linha1"></div>
            <div className="linha2"></div>
            <div className="linha3"></div>
          </div>
          <section className="menuinterativo">
            {userEmail ? (
              <div className="menu-interativo-componentes">
                <VscAccount />
                <div className="facaseulogin">
                  <p style={fontR}>
                    Olá, <span style={colorG}>{userEmail}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="menu-interativo-componentes">
                <VscAccount />
                <div className="facaseulogin">
                  <p>
                    Faça seu{" "}
                    <span>
                      <NavLink to="/Login">Login</NavLink>
                    </span>
                  </p>
                </div>
              </div>
            )}
            <div className="bordamenu"></div>
            <div className="linksmenu">
              <div className="linkinteracao1">
                <h3 onClick={toggleEducation}>Educação Ambiental</h3>
                {showEducation && (
                  <div className="linkeducacao">
                    <ul>
                      <li>
                        <NavLink to="/Queimada">Queimadas</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Especies">Perda de Espécies</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <h3>
                <NavLink to="/Ods">ODS 15</NavLink>
              </h3>

              <div className="linkinteracao2">
                <h3 onClick={toggleInstitutes}>Institutos</h3>
                {showInstitutes && (
                  <div className="linkinstitutos">
                    <ul>
                      <li>
                        <NavLink to="/Araraazul">Instituto Arara Azul</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Onca">Instituto Onça Pintada</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Pantanal">SOS Pantanal</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Ipe">IPÊ</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <li>
                {userEmail && (
                  <div className="linkinteracao3">
                    <button onClick={handleLogout} className="logout-button">
                      Sair
                    </button>
                  </div>
                )}
              </li>
            </div>
          </section>
        </nav>
      </header>

      <section className="img-principal" style={fontR}>
        <img src={img} alt="Onça" />
        <label className="legenda-img">
          Helping preserve <span>nature’s</span> balance.
        </label>
      </section>

      <section className="text-container">
        <section className="text" style={fontR}>
          <div className="texto-principal">
            <span>Instituto Onça Pintada:</span>
          </div>

          <p>
            O Instituto Onça-Pintada é uma organização brasileira sem fins
            lucrativos dedicada à preservação da onça-pintada (Panthera onca), o
            maior felino das Américas e um dos símbolos mais icônicos da fauna
            brasileira. Fundado em 2002 pelos biólogos Leandro Silveira e Sandra
            Cavalcanti, o Instituto atua há mais de 20 anos na conservação dessa
            espécie, que enfrenta sérias ameaças, como o desmatamento, a caça
            ilegal e a perda de habitat em grande parte de sua área de
            distribuição, que inclui biomas como o Pantanal, Cerrado, Amazônia e
            Caatinga
          </p>

          <p>
            O principal objetivo do Instituto é garantir a sobrevivência da
            onça-pintada e promover a coexistência harmoniosa entre o ser humano
            e o felino. Para isso, desenvolve pesquisas científicas,
            monitoramento de populações e programas de conservação, que buscam
            entender o comportamento, os hábitos de alimentação, reprodução e
            migração das onças-pintadas, além de identificar as áreas
            prioritárias para sua preservação.
          </p>

          <p>
            Uma das principais áreas de atuação do Instituto é o Pantanal, uma
            das regiões mais importantes para a conservação da onça-pintada,
            abrigando uma das maiores populações dessa espécie no Brasil. No
            Pantanal, o Instituto Onça-Pintada realiza o monitoramento por meio
            de colares de GPS, que permitem acompanhar os movimentos das onças
            em tempo real, e promove a instalação de câmeras trap para registrar
            a presença dos felinos e estudar seus hábitos em seu ambiente
            natural. Essas tecnologias ajudam a entender o comportamento das
            onças e a identificar os principais desafios para sua conservação.
          </p>

          <p>
            Além das pesquisas de campo, o Instituto também desenvolve programas
            de educação ambiental e conscientização, especialmente voltados para
            as comunidades rurais que vivem nas proximidades dos habitats das
            onças-pintadas. O objetivo é reduzir os conflitos entre fazendeiros
            e o felino, promovendo soluções sustentáveis para evitar a caça
            retaliatória de onças, que muitas vezes ocorre quando elas atacam
            rebanhos de gado. Através de parcerias com produtores locais, o
            Instituto trabalha para implementar técnicas de manejo que protejam
            o gado sem prejudicar as onças, promovendo assim a convivência
            pacífica entre os humanos e os grandes predadores.
          </p>

          <p>
            Nos últimos 20 anos, o Instituto Onça-Pintada obteve resultados
            significativos na conservação da espécie, ajudando a aumentar o
            conhecimento sobre as onças-pintadas e contribuindo para a
            preservação de seus habitats. Hoje, é uma das instituições de maior
            destaque na proteção dos grandes felinos no Brasil, colaborando com
            projetos nacionais e internacionais para garantir que a onça-pintada
            continue a desempenhar seu papel crucial nos ecossistemas
            brasileiros.
          </p>

          <p>
            O trabalho do Instituto é fundamental para a preservação da
            biodiversidade e dos ecossistemas onde as onças-pintadas vivem, já
            que esses felinos são predadores de topo de cadeia, ajudando a
            manter o equilíbrio das populações de outras espécies. Através de
            suas ações de pesquisa, conservação e educação, o Instituto
            Onça-Pintada busca garantir um futuro onde esses magníficos
            predadores continuem a existir nas florestas e savanas do Brasil.
          </p>
        </section>
      </section>

      <section>
        <button style={fontR} onClick={vemConhecer} className="button">
          <p className="vemConhecer">Vem Conhecer!</p>
        </button>
      </section>

      <footer className="footer" style={fontR}>
        <div className="footer-img">
          <img className="Logo" src={Logo} alt="Logo" />
          <img className="LogoPc" src={LogoPc} alt="Logo" />
        </div>

        <div className="icon-footer">
          <span>REDES SOCIAIS:</span>
          <div className="subeIconFoter">
            <IoLogoFacebook /> <p>FaceBook</p>
          </div>
          <div className="subeIconFoter">
            <PiInstagramLogoFill /> <p>Instagram</p>
          </div>
          <div className="subeIconFoter">
            <MdEmail /> <p>BioSphere@gmail.com</p>{" "}
          </div>
        </div>

        <div className="footer-bio">
          {" "}
          <h5>© BioSphere</h5>
        </div>
      </footer>
    </>
  );
}

export default Onca;
