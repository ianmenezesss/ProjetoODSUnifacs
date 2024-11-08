import './Css/Menu.css'
import './Css/Img-Principal.css'
import './Css/Button.css'
import './Css/Text.css'
import './Css/Footer.css'
import Logo from './img/Logo-Bio.jpg'
import img from './img/PerdadeEspe.svg'
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, Link } from 'react-router-dom';

function Especies() {
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
                    <section className='menuinterativo'>
                        <div className='menu-interativo-componentes'><VscAccount />
                            <div className='facaseulogin'>
                                <p>Faça seu <span><NavLink to="/Login">Login</NavLink></span></p>
                            </div>
                        </div>
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
                                        </ul>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </section>

                </nav>
            </header>

            <section className='img-principal'>
                <img src={img} alt="Especies" />
                <label className='legenda-img'>Helping preserve <span>nature’s</span> balance.</label>
            </section>

            <section className='text'>
                <div className='texto-principal'>
                    <span>Perda de Espécies:</span>
                </div>

                <p>
                A <span>perda de espécies</span> é uma das crises ambientais mais graves que o planeta enfrenta atualmente. 
                Esse fenômeno, conhecido como <span>extinção de espécies</span>, ocorre quando uma espécie de animal ou planta 
                desaparece completamente, levando ao desequilíbrio dos ecossistemas. As causas dessa perda são múltiplas, 
                mas as principais estão ligadas às atividades humanas, como o <span>desmatamento</span>, a <span>poluição</span>, a <span>caça</span> e <span>pesca 
                excessivas</span>, a <span>introdução de espécies invasoras</span> e as <span>mudanças climáticas</span>. Cada uma dessas ações afeta diretamente 
                a biodiversidade, gerando impactos profundos e duradouros.
                </p>

                <p>
                O <span>desmatamento</span> é uma das principais causas da extinção de espécies. Quando florestas são derrubadas para 
                abrir espaço para a agricultura, pecuária ou exploração de recursos naturais, os habitats de milhares de 
                espécies são destruídos. Sem seu habitat natural, muitas espécies não conseguem sobreviver, migrar ou se 
                adaptar a novas condições, o que leva ao seu desaparecimento. Regiões como a <span>Amazônia</span>, uma das áreas com 
                maior biodiversidade do planeta, sofrem diretamente com o desmatamento, ameaçando inúmeras espécies de plantas e 
                animais.
                </p>

                <p>
                A <span>poluição</span> também desempenha um papel central na perda de espécies. A contaminação de rios, oceanos e solos 
                por resíduos industriais, químicos e plásticos afeta drasticamente a vida selvagem. Nos oceanos, por exemplo, 
                milhares de animais marinhos, como tartarugas e aves, morrem anualmente devido à ingestão de plásticos ou por 
                ficarem presos em redes de pesca abandonadas. Nos rios e lagos, o despejo de substâncias tóxicas pode causar a 
                morte de peixes e outras formas de vida aquática, prejudicando todo o ecossistema aquático. A poluição do ar, 
                por sua vez, também impacta as florestas, plantas e animais terrestres, causando doenças e morte.
                </p>

                <p>
                A <span>caça</span> e <span>pesca excessivas</span> são outros fatores críticos para a extinção de espécies. A caça ilegal e o tráfico de 
                animais silvestres, muitas vezes motivados pelo comércio de partes do corpo, como peles, marfim ou até animais
                 exóticos, contribuem diretamente para a redução das populações de várias espécies. Espécies como elefantes, 
                 rinocerontes e tigres são alvos constantes de caçadores ilegais, colocando-os em risco de extinção. Da mesma 
                 forma, a pesca predatória esgota os estoques de peixes em todo o mundo, ameaçando tanto a biodiversidade marinha 
                 quanto a segurança alimentar das populações humanas que dependem desses recursos.
                </p>

                <p>
                A <span>introdução de espécies invasoras</span> também tem um impacto devastador na biodiversidade. Espécies que são 
                introduzidas acidentalmente ou intencionalmente em novos habitats podem se espalhar rapidamente, competindo com 
                espécies nativas por recursos e, em muitos casos, levando-as à extinção. Um exemplo clássico é o caso do sapo-cururu, 
                introduzido na Austrália para controle de pragas, que acabou se tornando uma ameaça às espécies nativas. Essa competição 
                desequilibrada frequentemente resulta na diminuição da diversidade local e no colapso de ecossistemas.
                </p>

                <p>
                Por fim, as <span>mudanças climáticas</span> agravam todas essas ameaças, acelerando o processo de extinção. O aumento das 
                temperaturas globais e as alterações nos padrões de chuva e seca forçam as espécies a se adaptarem rapidamente 
                a novas condições ambientais. No entanto, muitas espécies não conseguem acompanhar o ritmo das mudanças e acabam 
                desaparecendo. Ecossistemas frágeis, como os recifes de corais e as florestas tropicais, estão entre os mais 
                afetados. Os recifes de corais, por exemplo, estão sofrendo com o fenômeno do branqueamento, causado pelo aquecimento 
                das águas oceânicas, o que leva à morte dos corais e à perda de biodiversidade marinha.
                </p>

                <p>
                A <span>perda de espécies</span> traz consigo uma série de consequências graves, tanto a curto quanto a longo prazo. 
                No curto prazo, a extinção de uma espécie pode <span>romper cadeias alimentares inteiras</span>, afetando tanto predadores 
                quanto presas e causando um efeito dominó em todo o ecossistema. Isso pode resultar na perda de serviços 
                ecossistêmicos vitais, como a polinização, essencial para a produção de alimentos, ou o controle natural de pragas, 
                que ajuda a manter o equilíbrio ecológico. Além disso, a extinção de espécies muitas vezes afeta as comunidades 
                humanas que dependem diretamente da biodiversidade para sua subsistência, seja através da pesca, da caça ou da coleta
                de plantas medicinais.
                </p>

                <p>
                A longo prazo, a perda de espécies pode levar a uma <span>erosão irreversível da biodiversidade</span>, reduzindo a 
                resiliência dos ecossistemas diante de mudanças ambientais. Com menos espécies, os ecossistemas tornam-se mais 
                vulneráveis a perturbações, como doenças, secas ou pragas, aumentando a probabilidade de colapso ambiental. 
                Isso também compromete o potencial dos ecossistemas de fornecer serviços essenciais à humanidade, como a purificação
                 da água, o sequestro de carbono e a regulação do clima.
                </p>

                <p>
                Prevenir a perda de espécies requer <span>ações globais e locais</span>. A <span>proteção de áreas naturais</span>, como <span>parques 
                nacionais</span> e <span>reservas</span>, é uma das maneiras mais eficazes de preservar habitats e espécies em risco. Além disso, 
                é fundamental <span>combater o desmatamento ilegal</span>, promover práticas agrícolas e pesqueiras <span>sustentáveis</span> e 
                fortalecer as leis contra a caça ilegal e o tráfico de animais silvestres. A restauração de ecossistemas 
                degradados também desempenha um papel crucial, permitindo que áreas naturais recuperem sua biodiversidade e 
                voltem a oferecer os serviços ambientais que sustentam a vida.
                </p>

                <p>
                A conscientização pública é outro elemento essencial na luta contra a extinção de espécies. <span>Campanhas de educação 
                ambiental</span>, como as promovidas pelo <span>BioSphere</span>, são fundamentais para sensibilizar as pessoas sobre a importância da 
                biodiversidade e os impactos devastadores da perda de espécies. Ao educar o público sobre as causas e consequências 
                da extinção, esperamos inspirar uma <span>mudança de comportamento</span> que leve à adoção de práticas mais sustentáveis e à proteção 
                de nossas espécies e ecossistemas.
                </p>

                <p>
                A <span>perda de espécies</span> é uma crise silenciosa, mas com consequências profundas e duradouras para o planeta. 
                Proteger a biodiversidade é essencial não apenas para a sobrevivência das espécies, mas também para o equilíbrio 
                dos ecossistemas e o bem-estar humano. No <span>BioSphere</span>, acreditamos que a informação é o primeiro passo para a ação. 
                Ao educar e conscientizar sobre essa questão urgente, esperamos contribuir para a preservação da vida na Terra e 
                garantir um futuro sustentável para todas as formas de vida.
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

export default Especies;