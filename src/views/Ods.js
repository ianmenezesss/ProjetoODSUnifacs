import '../Css/Menu.css'
import '../Css/Img-Principal.css'
import '../Css/Button.css'
import '../Css/Text.css'
import '../Css/Footer.css'
import Logo from '../img/Logo-Bio.jpg'
import img from '../img/ODS.svg'
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Ods() {
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
            <header className="header-nav">
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
                  <p>Olá, {userEmail}</p>
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
                                            <li><NavLink to="/Onca">istituto Onça Pintada</NavLink></li>
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

            <section className='img-principal'>
                <img src={img} alt="Ods" />
                <label className='legenda-img'>Helping preserve <span>nature’s</span> balance.</label>
            </section>

            <section className='text'>
                <div className='texto-principal'>
                    <span>ODS 15:</span>
                </div>

                <p>
                A <span>ODS 15</span>, ou <span>Objetivo de Desenvolvimento Sustentável 15</span>, é uma das 17 metas globais estabelecidas pela ONU em 2015 
                como parte da Agenda 2030 para o Desenvolvimento Sustentável. Esse objetivo é voltado para a proteção, recuperação e 
                promoção do uso <span>sustentável</span> dos ecossistemas terrestres, a gestão sustentável das florestas, o combate à desertificação, a 
                interrupção e reversão da degradação da terra e a detenção da perda de biodiversidade. O ODS 15 destaca a importância da 
                <span>preservação</span> dos ecossistemas terrestres, reconhecendo que eles são essenciais para a vida no planeta, fornecendo serviços 
                ambientais vitais, como o sequestro de carbono, a regulação do clima, a purificação da água e a manutenção da biodiversidade.
                </p>

                <p>
                A <span>degradação dos ecossistemas</span> e a perda de biodiversidade são consequências diretas das atividades humanas, como o 
                desmatamento, a poluição, a conversão de terras para a agricultura e as mudanças climáticas. O <span>ODS 15</span> busca reverter 
                esses impactos por meio de uma abordagem integrada que promova a conservação e o uso sustentável dos recursos naturais.
                 Um dos focos principais é garantir que florestas e outros habitats naturais sejam <span>preservados</span>, tanto para proteger as 
                 espécies que ali vivem quanto para garantir que esses ecossistemas continuem a desempenhar suas funções vitais.
                </p>

                <p>
                Casos práticos de implementação da <span>ODS 15</span> já mostram resultados promissores ao redor do mundo. Um exemplo significativo 
                é o Acordo de Bonn Challenge, uma iniciativa internacional lançada em 2011 que tem como objetivo restaurar 350 milhões 
                de hectares de terras degradadas até 2030. Diversos países se comprometeram com esse objetivo, como o Brasil, que 
                anunciou a restauração de 12 milhões de hectares de terras desmatadas e degradadas. Em outras partes do mundo, a 
                Etiópia se destacou com projetos de reflorestamento em larga escala, plantando bilhões de árvores para combater a 
                desertificação e aumentar a cobertura florestal do país, o que contribui diretamente para a redução de emissões de 
                carbono e a melhoria dos recursos hídricos.
                </p>

                <p>
                Outro exemplo de ação bem-sucedida está na Nova Zelândia, que implementou um programa ambicioso para erradicar 
                predadores invasores que ameaçam suas espécies nativas até 2050. Essa ação visa proteger a biodiversidade local, 
                particularmente suas aves, muitas das quais só existem no país. Além disso, iniciativas de gestão sustentável de 
                florestas foram desenvolvidas em vários países, como o Canadá, que é um líder na implementação de práticas florestais 
                que preservam a biodiversidade e reduzem os impactos ambientais da exploração de recursos naturais.
                </p>

                <p>
                No contexto brasileiro, o Programa de Áreas Protegidas da Amazônia (ARPA) é um exemplo de sucesso. O ARPA é o 
                maior programa de conservação de florestas tropicais do mundo, responsável pela criação e manutenção de unidades 
                de conservação na Amazônia, cobrindo cerca de 60 milhões de hectares. Esse projeto busca garantir que essas 
                áreas sejam geridas de forma sustentável, preservando a biodiversidade e os serviços ecossistêmicos que elas 
                oferecem. Essa iniciativa tem sido fundamental para a proteção da maior floresta tropical do planeta e se alinha 
                diretamente aos objetivos da ODS 15.
                </p>

                <p>
                Embora já existam exemplos positivos de progresso, as expectativas para os próximos anos são desafiadoras. 
                O relatório global sobre biodiversidade das Nações Unidas em 2020 revelou que, apesar de alguns avanços, 
                muitos dos objetivos relacionados à conservação da biodiversidade ainda estão longe de serem atingidos. 
                As taxas de extinção de espécies continuam alarmantemente altas, e a perda de ecossistemas, como florestas e 
                zonas úmidas, persiste em muitas regiões do mundo. As mudanças climáticas também são um fator complicador, 
                uma vez que agravam a degradação ambiental e dificultam a recuperação dos ecossistemas.
                </p>

                <p>
                Para os próximos anos, o foco será intensificar os esforços em <span>restaurar</span> ecossistemas degradados, 
                ampliar a criação de áreas protegidas, fortalecer as políticas de conservação e garantir que o uso dos 
                recursos naturais seja verdadeiramente sustentável. A implementação de soluções baseadas na natureza, 
                como o reflorestamento e a recuperação de áreas de manguezais e pântanos, será crucial para mitigar os 
                efeitos das mudanças climáticas e aumentar a resiliência dos ecossistemas.
                </p>

                <p>
                Além disso, há uma expectativa crescente de que o setor privado desempenhe um papel mais ativo na 
                implementação da <span>ODS 15</span>. Empresas em todo o mundo estão começando a adotar práticas mais sustentáveis 
                em suas cadeias de produção, como a certificação de produtos florestais e agrícolas que respeitam a 
                biodiversidade e reduzem o desmatamento. Políticas públicas voltadas para a <span>proteção da biodiversidade</span> 
                também devem se tornar mais rigorosas, especialmente em países com grandes áreas de floresta tropical,
                como o Brasil e a Indonésia.
                </p>

                <p>
                Em suma, a <span>ODS 15</span> visa enfrentar uma das questões ambientais mais críticas da atualidade: 
                a perda de biodiversidade e a degradação dos ecossistemas terrestres. 
                Com esforços coordenados entre governos, empresas, comunidades e organizações internacionais, 
                é possível alcançar progressos significativos até 2030. Contudo, os próximos anos serão 
                decisivos para garantir que os compromissos assumidos sejam cumpridos e que a biodiversidade 
                terrestre seja protegida para as gerações futuras. No <span>BioSphere</span>, buscamos informar e conscientizar 
                sobre a importância desse objetivo, mostrando que a conservação ambiental é responsabilidade de todos 
                e que nossas ações hoje podem garantir a preservação da vida no planeta amanhã.
                </p>
            </section>

            

            <footer className='footer'>

                <div className='footer-img'>
                    <img src={Logo} alt="Logo" />
                </div>

                <div className='icon-footer'><IoLogoFacebook />    <PiInstagramLogoFill />    <MdEmail /></div>

                <div className='footer-bio'> <h5>© BioSphere</h5></div>
            </footer>

        </>
    );
};

export default Ods;