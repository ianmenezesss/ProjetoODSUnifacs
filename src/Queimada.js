import './Css/Menu.css'
import './Css/Img-Principal.css'
import './Css/Footer.css'
import './Css/Text.css'
import Logo from './img/Logo-Bio.jpg'
import img from './img/Queimadas.svg'
import { IoLogoFacebook } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CgChevronDown } from "react-icons/cg";
import { NavLink, Link } from 'react-router-dom';

function Queimada() {
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
        <img src={img} alt="Queimada" />
        <label className='legenda-img'>Helping preserve <span>nature’s</span> balance.</label>
      </section>

      <section className='text'>
        <div className='texto-principal'>
          <span>Queimadas:</span>
        </div>

        <p>
          As <span> queimadas </span> são incêndios descontrolados que ocorrem
          em áreas naturais,
          como florestas, savanas e pastagens.
          Embora possam ser causadas por fenômenos naturais, como raios,
          a grande maioria das queimadas é provocada por <span> atividades humanas </span>,
          resultando em sérios danos ao meio ambiente.
          O uso do fogo para limpar terrenos e torná-los aptos para a
          agricultura ou pastagem é uma prática comum,
          especialmente em regiões como a Amazônia, mas suas consequências
          são devastadoras. Além disso, <span> a extração de madeira </span> e <span> a exploração de recursos naturais </span>, como a mineração, também contribuem para a propagação
          do fogo em áreas florestais, deixando a vegetação vulnerável e o solo
          exposto à degradação.
        </p>

        <p>
          As <span> mudanças climáticas </span> também desempenham um papel
          significativo no aumento das queimadas.
          Com o aquecimento global, as temperaturas mais elevadas e os
          períodos de seca prolongados tornam o ambiente mais suscetível ao fogo,
          especialmente em biomas como o Cerrado e as florestas tropicais.
          Incêndios acidentais, como fogueiras mal apagadas ou queimadas ilegais,
          também são causas comuns desses desastres, muitas vezes resultando na
          destruição de vastas áreas de vegetação.
        </p>

        <p>
          Regiões como a Amazônia, o Cerrado e o Pantanal
          estão entre as mais afetadas pelas queimadas.
          Na <span>Amazônia</span>, grandes áreas de floresta são
          destruídas para dar lugar à agricultura,
          afetando a biodiversidade e os povos indígenas
          que dependem dessas áreas para sua subsistência.
          No <span>Cerrado</span>, um dos biomas mais ricos em
          biodiversidade do Brasil, as queimadas afetam
          gravemente a fauna e a flora locais, enquanto o
          <span>Pantanal</span>, uma das maiores planícies alagadas do
          mundo, tem sofrido com a destruição de seus
          habitats e o impacto na vida selvagem.
        </p>

        <p>
          As queimadas causam uma série de problemas
          tanto a curto quanto a longo prazo. Imediatamente,
          elas resultam na <span>destruição de habitats</span>,
          colocando em risco espécies animais e vegetais e
          contribuindo para a extinção de muitas delas.
          A poluição gerada pela fumaça afeta a qualidade
          do ar, liberando gases tóxicos e partículas
          finas que prejudicam a saúde humana,
          especialmente nas comunidades próximas às
          áreas afetadas. Além disso, as queimadas
          têm impactos sociais graves, com populações
          indígenas e rurais sendo diretamente afetadas
          pela perda de suas terras e por riscos à saúde
          e à segurança.
        </p>

        <p>
          A longo prazo, as queimadas contribuem para a
          <span>perda de biodiversidade</span>,
          ameaçando o equilíbrio
          ecológico e os serviços ambientais essenciais,
          como a polinização e a purificação da água.
          A liberação de grandes quantidades de dióxido
          de carbono durante as queimadas também acelera
          as mudanças climáticas, exacerbando o aquecimento
          global. Com a destruição das florestas, a
          capacidade de sequestrar carbono é reduzida,
          agravando ainda mais o problema. Além disso,
          a degradação do solo, que se torna mais
          vulnerável à erosão e à perda de nutrientes,
          compromete a recuperação das áreas queimadas e
          reduz sua produtividade, afetando o futuro uso
          agrícola.
        </p>

        <p>
          Para prevenir as queimadas,
          é essencial adotar <span>práticas agrícolas</span>
          a agrofloresta, que reduzem a necessidade
          de queimar a terra para o cultivo.
          A fiscalização rigorosa e a aplicação efetiva
          das leis ambientais também são fundamentais
          para combater as queimadas ilegais e proteger
          as áreas naturais. Além disso, a educação e
          a conscientização pública sobre os perigos das
          queimadas podem ajudar a prevenir incêndios
          acidentais e promover a adoção de práticas
          sustentáveis.
        </p>

        <p>
          Outro passo importante é a <span>restauração de
            áreas degradadas</span> por queimadas.
          Projetos de reflorestamento e recuperação
          de ecossistemas não só ajudam a reduzir o
          risco de novos incêndios, mas também promovem
          a <span>regeneração da biodiversidade</span> e a recuperação
          dos serviços ambientais que essas áreas oferecem.
        </p>

        <p>
          As queimadas são uma <span>ameaça
            séria à biodiversidade e ao equilíbrio
            ambiental</span>. Seus impactos vão desde a
          destruição imediata de habitats e a
          poluição do ar até a aceleração das
          mudanças climáticas e a extinção de espécies.
          Preveni-las exige esforços conjuntos de governos,
          comunidades e indivíduos, promovendo práticas
          mais sustentáveis e protegendo nossos
          ecossistemas para as futuras gerações.
          No BioSphere, acreditamos que o conhecimento é
          o primeiro passo para a mudança.
          Informando sobre as causas e os impactos
          das queimadas, esperamos contribuir para a
          <span>conscientização e a proteção do nosso planeta.</span>
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

export default Queimada;