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


