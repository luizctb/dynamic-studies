// Esse Index.tsx foi criado como uma outra página a ser exibida
// O nome vc quem define o que vai ser nese caso usei como catalog.tsx e poderia ser outro qualquer.
// Essa pasta users pode ser usada com outro nome 
// só funcionou a rota como escrito page.tsx
// o nome UserPage pode ser qualquer nome que 
// para mudar dessa página para a página principal a que fica no App/page.tsx usa-se o link
// exemplo do link next que está no código abaixo colocado no retorno:
// <link href="/">Ir para Home - página principal</link>
// fazer a importação do (import Link from "next/link") 
// para inmportação interna escrever Link com "L" Maiúsculo" fornecido pelo next.js
// browser:/users
// para cionar o id coloca o segundo link conforme abaixo.
// número 123 pode ser qualquer outro (SE MUDAR O ID NAVEGADOR MUDA NA BASE)


import Link from "next/link"

export default function UserPage() {
    return (
        <>
            <h1>Página dois - pasta uses</h1>

            <div>
                <Link href="/">Ir para Home</Link>
            </div>
            <div>
                <Link href="/users/123">Ir para detalhes do usuário ID</Link>
            </div>
            
        </>
    )
}




