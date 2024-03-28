// Página principal do projeto
// Página que aparece na 
// Pode retirar tudo dessa página menos essa parte de baixo que define toUnicode.
// Rota Index - principal
// esse link liga a página Home principal a pagina users 
// <link href="/">Ir para Home - página principal</link>
// fazer a importação do (import Link from "next/link") 
// para inmportação interna escrever Link com "L" Maiúsculo" fornecido pelo next.js
// transição entre as rotas
// esse page é obrigatório não pode ser removido



import Link from "next/link"

export default function Home() {
    return (
        <main>
            
            <h1>Página Principal</h1>
            <div>
                <Link href="/users">Ir para Users</Link>
            </div>
            <div>
                <Link href="/products">Ir para Products</Link>
            </div>
        </main>
    )
}

// CRIAR ROTAS DINÂMICAS - FEITA COM []
// se quiser criar uma página que é dentro da outra, segue esse formato criado na pasta users:
// Browser: /users
// Browser: /users/uuid

// Browser: /users/[id]/page.tsx

