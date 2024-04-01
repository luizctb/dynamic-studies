// COMPONENTES - são funções
// Componente funcional - resumindo é função JS que retorna um html
// Geralmente o componente coloca-se o nome do arquivo/ começa com primeira letra Maiúscula
// Todo componente tem que ser exportado. 
function MeuComponente() {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>Hello.</p>
        </div>  
    )       
}

export default MeuComponente;

//############################################################################################

// INTERPOLAÇÕES
// Interpolações é injetar JS dentro do HTML, nesse caso coloca se o nome dentro do {}
// Exemplo abaixo mostra a interpolação:

function MeuComponente() {

    let nome = "Seu Juca";
    const urlImg = "https://imgur.com/ssss/"

    return (
        <div>
            <h1>Hello World! {nome}</h1>
            <img src={urlImg} />
            <p>Hello.</p>
        </div>  
    )       
}

export default MeuComponente;

// ----------------------------------------------------------------------------------------
// Para funcionar o a interface do componente colocar em outro arquivo como App, Main.
// Nesse caso a informação que está dentro de MeuComponente será exibido na tela.


import MeuComponente from "../props/Props";

function App() {
    return (
        <div>
            <MeuComponente />
            <MeuComponente />
            <MeuComponente />
        </div>
    )
}


//#####################################################################################
// Outro exemplo de uma componentaição de uma página:
// //vamos criar o componente Header para o cabeçalho:
// criamos os componentes Header, MainContent e Footer, cada um com sua própria função para renderizar o conteúdo correspondente. Em seguida, importamos e usamos esses componentes dentro do componente App, que é o componente principal que será renderizado na página.

// Quando você renderizar o componente App no navegador, verá a estrutura básica de uma página com cabeçalho, conteúdo principal (com texto, imagem e botão) e rodapé. Note que a imagem utilizada é apenas um espaço reservado 

import React from 'react';

function Header() {
  return (
    <header>
      <h1>Minha Página React</h1>
    </header>
  );
}

export default Header;

//Agora, o componente Footer para o rodapé:
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>© 2024 Minha Empresa. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;

//Em seguida, o componente MainContent para o conteúdo principal da página:

import React from 'react';

function MainContent() {
  return (
    <main>
      <h2>Seja bem-vindo!</h2>
      <p>Aqui está o conteúdo principal da minha página.</p>
      <img src="https://via.placeholder.com/400" alt="Imagem de exemplo" />
      <button>Clique aqui</button>
    </main>
  );
}

export default MainContent;

//vamos compor todos esses componentes na página principal App:

import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;