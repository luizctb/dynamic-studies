// Esse Index.tsx foi criado como uma outra página a ser exibida
// O nome vc quem define o que vai ser nese caso usei como catalog.tsx e poderia ser outro qualquer.
// Essa pasta users pode ser usada com outro nome 
// só funcionou a rota como escrito page.tsx
// o nome UserPage pode ser qualquer nome que 
// fazer a importação do (import Link from "next/link") 
// para inmportação interna escrever Link com "L" Maiúsculo" fornecido pelo next.js

import Link from "next/link";


export default function ProductPage() {
    return (
        <div>
            <h1>Página três - pasta products</h1>

            <div>
                <Link href="/">Ir para Home</Link>
            </div>
        </div>
    )
}



