import "../Css/Menu.css";
import "../Css/Img-Principal.css";
import "../Css/Button.css";
import "../Css/Footer.css";
import "../Css/Text.css";
import Logo from "../img/Logo-Bio.jpg";
import img from "../img/SosPantanal.svg";
import LogoPc from "../img/LogoBioPc.svg";
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Pantanal() {
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
    window.location.href = "https://www.sospantanal.org.br/";
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

      <section className="img-principal">
        <img src={img} alt="Pantanal" />
        <label style={fontR} className="legenda-img">
          Helping preserve <span>nature’s</span> balance.
        </label>
      </section>

      <section className="text-container">
        <section className="text" style={fontR}>
          <div className="texto-principal">
            <span>SOS Pantanal:</span>
          </div>

          <p>
            O SOS Pantanal é uma organização da sociedade civil que atua desde
            2009 com o objetivo de conservar o Pantanal, o maior bioma úmido do
            mundo e um dos ecossistemas mais ricos em biodiversidade. A
            organização surgiu como uma resposta às crescentes ameaças que o
            Pantanal vem enfrentando, como o desmatamento, as queimadas, a
            expansão da agropecuária e as mudanças climáticas, que colocam em
            risco não só a fauna e a flora locais, mas também a vida das
            comunidades que dependem dos recursos naturais da região.
          </p>

          <p>
            Com sede em Cuiabá, Mato Grosso, o SOS Pantanal desenvolve suas
            atividades principalmente no Pantanal Mato-Grossense e no Pantanal
            do Sul, trabalhando em parceria com instituições públicas, privadas
            e comunidades locais para promover a preservação do bioma e o uso
            sustentável de seus recursos. A organização foca em monitoramento
            ambiental, pesquisa científica e educação ambiental, buscando
            sensibilizar tanto a população local quanto o público nacional e
            internacional sobre a importância desse ecossistema único.
          </p>

          <p>
            Um dos principais focos de atuação do SOS Pantanal é o monitoramento
            de incêndios e a prevenção de queimadas, que têm sido uma ameaça
            crescente ao bioma. A organização realiza campanhas de
            conscientização e capacitação das comunidades locais para combater o
            fogo, além de atuar na restauração de áreas degradadas e no
            incentivo ao manejo sustentável das terras.
          </p>

          <p>
            Além disso, o SOS Pantanal promove iniciativas de ecoturismo como
            uma alternativa econômica sustentável para a região. O turismo de
            natureza no Pantanal, se bem gerido, pode gerar renda para as
            comunidades locais sem degradar o meio ambiente, e a organização
            trabalha para fomentar essa prática de forma responsável.
          </p>

          <p>
            O principal objetivo do SOS Pantanal é garantir a conservação e o
            desenvolvimento sustentável do Pantanal, equilibrando as
            necessidades de conservação da natureza com o bem-estar das
            populações que vivem na região. Através de suas iniciativas, a
            organização busca proteger o Pantanal para as futuras gerações,
            garantindo que este importante bioma continue a ser um refúgio para
            a rica biodiversidade que abriga e um recurso vital para o planeta.
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

export default Pantanal;
