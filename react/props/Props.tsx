// PROPS
// Atributos, propriedades que pode dar aos componentes
// Passando nesse props arquivo 01 o valor que será colocado dentro do atributo arquivo 02
// Por props pode passar qualquer coisa, qualquer valor.

function MeuComponente({ nome }) {
    return (
        <div>
            <h1>Hello World!{nome}</h1> 
            <p>Hello.</p>
        </div>  
    )       
}

export default MeuComponente;

///-----------------------------------------------------------------------
// Foi passado o atributo 


import MeuComponente from "../props/Props";

function App() {
    return (
        <div>
            <MeuComponente nome="Dimitri" />
            <MeuComponente />
            <MeuComponente />
        </div>
    )
}

//############################################################################################

// Validação para que os componentes que não tem atributo nome tenham um nome coringa "fulano"
// Condição ternária como se fosse (if ou else) - se tiver nome mostrar nome (true), se não tiver mostrar fulano (else)
// Pode sert feito dessa maneira 

function MeuComponente({nome}) {
    return (
        <div>
            <h1>Hello World!{ nome ? nome : "Fulano" }</h1> 
            <p>Hello.</p>
        </div>  
    )       
}

export default MeuComponente;

//-------------------------------------------------------------------
// No componente 2 e 3 vai aparecer na tela fulano

import MeuComponente from "../props/Props";

function App() {
    return (
        <div>
            <MeuComponente nome="Dimitri" />
            <MeuComponente /> 
            <MeuComponente />
        </div>
    )
}

//############################################################################################

// Passando outro atributo. Como se paragrafo fosse falso

import MeuComponente from "../props/Props";

function App() {
    return (
        <div>
            <MeuComponente nome="Dimitri" paragrafo={false} />
            <MeuComponente />
            <MeuComponente />
        </div>
    )
}

//----------------------------------------------------
// Se o parágrafo existe ele mostra o parágrafo se não exeplo nada ( o que estiver escrito no parágrafo)

function MeuComponente({ nome, paragrafo }) {
    return (
        <div>
            <h1>Hello World!{nome ? nome : "Fulano"}</h1> 

            { paragrafo ?
                <p>Hello.</p>
                :
                <p>Nada</p>
            }

        </div>  
    )       
}

export default MeuComponente;

//############################################################################################


// Passando outro atributo. 
// Incluindo Mudança de cor 
// Posso colocar cor somente no primeiro parágrafo como também colocar nos demais conforme abaixo

import MeuComponente from "../props/Props";

function App() {
    return (
        <div>
            <MeuComponente cor="red" nome="Dimitri" paragrafo={false} />
            <MeuComponente cor="blue" />
            <MeuComponente cor="orangered"  />
        </div>
    )
}

//----------------------------------------------------
// Se o parágrafo existe ele mostra o parágrafo se não exeplo nada ( o que estiver escrito no parágrafo)

function MeuComponente({ nome, paragrafo, cor }) {
    return (
        <div>
            <h1 style={{ color:cor }}>Hello World!{nome ? nome : "Fulano"}</h1> 

            { paragrafo ?
                <p>Hello.</p>
                :
                <p>Nada</p>
            }

        </div>  
    )       
}

export default MeuComponente;
