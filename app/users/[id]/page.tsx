// ROTA DINÂMICA
// Id para receber o Id do usuário (nome que foi dado na pasta)
// coloca-se dentro do Parênteses () da export 
// nome id da pasta pode ser modificado, se mudar na pasta muda aqui no código.
// parms (por que é parâmetros)
// Rota dinâmica

import Link from "next/link";

export default function IdPage({ params}: { params: {id: string} }) {
    return (
        <>
            <h1>Página do Id</h1>
            <p>Id: {params.id}</p>

            <div>
                <Link href="/">Ir para Home</Link>
            </div>
        </>
    );
}