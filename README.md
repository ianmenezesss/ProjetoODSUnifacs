# 🌱 BioSphere

**UNIFACS**

**CIÊNCIA DA COMPUTAÇÃO**

Allan Oliveira Teran Jaime

Ian Davi Menezes Alves Bomfim

Leonardo Calheira Marchesini

Emerson de Aquino Souza Amorim Santos

Marx Lenin Muniz Vigas

Jadson Mendes Barbosa

**BIOSPHERE**

**Salvador**

**2024**

**INTRODUÇÃO**

Para o projeto escolhemos uma via de conscientização, levando em conta os temas oferecidos pela professora, sobre a ODS 15 ou Objetivo de Desenvolvimento sustentável 15 que busca proteger a vida terrestre. O site consta com textos informativos a respeito das principais preocupações com o meio ambiente terrestre na atualidade, além de informar sobre a própria ODS15 e por fim ele dá acesso a textos sobre alguns institutos brasileiros que ajudam na preservação de espécies do país, além de links para o site deles onde, caso o usuário esteja interessado, vai encontrar ainda mais informações e, em alguns deles, até formas de doar e ajudar o instituto.

**DESCRIÇÃO GERAL DO PROJETO**

Para o começo do projeto focamos primeiro no mobile como instruído pela professora da UC, escolhemos também uma interface mais simplificada e limpa para o usuário, já que o público-alvo é qualquer um que busque se informar a respeito das causas ambientais num geral e sobre a própria ODS 15. Optamos por cores que lembram a natureza, por isso tem uma predominância por tons de verdes e do branco para dar um contraste melhor em todo o site, logo após essa sessão será a presentado imagens do site para exemplificar melhor o que foi dito aqui

**PROTOTIPOS DE ALTA FIDELIDADE**:

PROTOTIPOS MOBILE:

Figura 1 - Página de Login Mobile

![Interface gráfica do usuário, Aplicativo

Descrição gerada automaticamente](.gitbook/assets/0.png)

Figura 2 - Cadastre-se Mobile

![Interface gráfica do usuário, Texto, Aplicativo, chat ou mensagem de texto

Descrição gerada automaticamente](.gitbook/assets/1.png)

Figura 3 - Página Principal Mobile

![Texto, Carta

Descrição gerada automaticamente](.gitbook/assets/2.png)

Figura 4 - Menu Mobile

![Interface gráfica do usuário, Aplicativo

Descrição gerada automaticamente](.gitbook/assets/3.png)

Figura 5 - Exemplo de Página Informativa

![Texto, Carta

Descrição gerada automaticamente](.gitbook/assets/4.png)

PROTOTIPOS DESKTOP:

Figura 6 - Página Login Desktop

![Tela de celular com publicação numa rede social

Descrição gerada automaticamente](.gitbook/assets/5.png)

Figura 7 - Página Cadastre-se Desktop

![Interface gráfica do usuário

Descrição gerada automaticamente](.gitbook/assets/6.png)

Figura 8 - Página Principal Desktop

![Texto

Descrição gerada automaticamente](.gitbook/assets/7.png)

Figura 9 - Exemplo de Página Informativa Desktop

![Tela de celular com imagem de pássaro

Descrição gerada automaticamente com confiança média](.gitbook/assets/8.png)

**PRINCÍPIOS DE USABILIDADE**

Como principal aspectos de usabilidade focamos em utilizar o máximo que compreendemos das Heurísticas de Nielsen, focamos em um design minimalista focando em colocar apenas o que é necessário para o usuário entender e utilizar, colocamos também o mesmo padrão de página desde a página principal até todas as informativas para ajudar o usuário a não se perder quando estiver navegando pelo site desde o mobile até o desktop, optamos por colocar botões de fácil compreensão para não interferir na experiência do usuário, como dito pela professora em sala de aula, na versão mobile escolhemos colocar o botão de menu hamburguer no canto superior direito para facilitar na hora do usuário clicar no botão e poder navegar com mais facilidade e a barra de menu do desktop tem todos os botões e efeitos dropdown para os itens que levam a mais lugares, como por exemplo os institutos, no botão “esqueci minha senha” um pop-up onde o usuário colocara o e-mail para recuperar sua senha, e a funcionalidade de usuário é só para passar para os institutos do site as informações dos acessos as suas páginas pelo site da BioSphere.

**BACK-END:**\


A aplicação é composta por um front-end hospedado no Vercel [https://biosphereods.vercel.app](https://biosphereods.vercel.app/) e um back-end hospedado no Render (https://projetoodsunifacs.onrender.com). O back-end é uma API REST desenvolvida em Node.js usando o Express com conexão ao banco de dados MongoDB.

**Principais Dependências do Back-end:**

Express: Framework para criação de rotas e servidor.\
Bcrypt: Para fazer o hash de senhas.\
JWT: Para autenticação e verificação de usuários.\
Prisma: Para comunicação com o banco de dados.\
Cors: Para configurar restrições de acesso.

A conexão entre front e back foi configurada com CORS para permitir apenas o domínio do front acessar a API, garantindo segurança. As permissões incluem os métodos GET, POST, PUT, e DELETE.

No cadastro, as senhas são criptografadas usando o Bcrypt antes de serem salvas no banco de dados. Após o login ou cadastro bem-sucedido, um JWT é gerado e enviado ao cliente. Este token é usado para identificar se o usuário está logado.

O Prisma é uma ferramenta para trabalhar com bancos de dados de forma mais simples, ele ajuda a conectar o código com o banco de dados e manipular os dados sem precisar escrever SQL.

O Axios é uma biblioteca da parte do front-end usada para enviar e receber dados entre o front-end e o back-end. Ele permite fazer requisições HTTP como GET, POST, PUT, e DELETE de forma fácil.

O cliente Axios configurado “api” é importado nos componentes do front-end para fazer requisições à API do back-end. Por exemplo na parte:

const { data:token } = await api.post('/login', {\
email: emailRef.current.value,\
senha: senhaRef.current.value\
})

O axios faz uma requisição do tipo POST a rota login do back-end.\
O Axios retorna a resposta da API no formato { data }, onde essa data contém o conteúdo do corpo da resposta.\
A API valida as credenciais do usuário de e-mail e senha e se forem válidas ela retorna um token JWT no corpo da resposta.\
Esse token é utilizado para as operações futuras que vou descrever.

**Fluxo de Cadastro e Login:**

Cadastro: O usuário preenche os campos no front-end.\
Os dados são enviados para a rota /cadastro da API.\
A senha é criptografada e os dados são armazenados no banco.\
Um token é retornado e armazenado no localStorage.

Login: O usuário insere e-mail e senha.\
Os dados são enviados para a rota /login da API.\
Se as credenciais estiverem corretas, a API retorna o token JWT.\
O token é armazenado no localStorage.

O token JWT é armazenado no localStorage e usado pra identificar se o usuário está autenticado, impedir o acesso às páginas de cadastro e login redirecionando usuários logados para a página a principal e para exibir informações da conta do usuário autenticado.

**Banco de Dados:**\
\
O banco de dados utilizado é o MongoDB, acessado através do Prisma. Ele armazena informações dos usuários, como: Nome, E-mail e a Senha criptografada.

**Arquitetura do Projeto:**

Back-End:\
Pasta Routes: Contém as rotas da API de cadastro e login com suas logicas e validações

Pasta prisma: É onde estão as configurações relacionadas ao Prisma, incluindo o arquivo de esquema para a definição das “tabelas” no banco de dados.\


Arquivo server.js: Ponto de entrada do servidor, onde o Express é configurado.

Front-End:\
Pasta src: Contém todo o código-fonte da aplicação React. É onde estão os componentes, estilos, serviços e imagens.

Pasta Css: Armazena os arquivos de estilo CSS usados no projeto.

Pasta img: Contém imagens usadas na aplicação.

Pasta services: Configuração do cliente Axios, com o arquivo api.js, que centraliza as requisições para o back-end.

Pasta views: Contém as páginas e componentes principais da aplicação.

Pasta public: Contém arquivos estáticos, como o index.html principal, favicon e outros recursos públicos. Esses arquivos são usados pelo React para carregar a aplicação no navegador.

Arquivo index.js: Este é o ponto de entrada do React. Ele renderiza a aplicação na DOM, conectando o front-end ao elemento principal no index.html do public.

**LINK DO GITHUB:**\
\
[https://github.com/ianmenezesss/ProjetoODSUnifacs](https://github.com/ianmenezesss/ProjetoODSUnifacs)

**CONCLUSÃO:**

**Lições aprendidas durante o projeto:**\
\
-Integração Front-End e Back-End

-Autenticação e Segurança

-Criptografia e Armazenamento Seguro

-Gerenciamento de Estados no Front-End

-Estrutura de Projeto

-React e Node/Express

-MongoDB e Prisma

**Possíveis melhorias futuras:**

-Validação automática no token no front-end para ver se ele expirou e deslogar o usuário.

-Otimização das imagens do site.

-Adição do modo Claro/Escuro.

-Internacionalização do Site.

-Adição do Cadastro com o google (Atualmente descontinuada).
