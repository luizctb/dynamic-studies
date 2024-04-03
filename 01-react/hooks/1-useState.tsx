// USESTATE - Um dos principais hooks
// O useState é usado para adicionar estado a componentes funcionais.
// useState(0) define um estado chamado count com valor inicial 0. setCount é uma função que permite atualizar o valor de count. Quando o botão é clicado, setCount é chamado para incrementar count em 1.


import React, { useState } from 'react';

const Counter = () => {
  // Define um estado 'count' com valor inicial 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      {/* Incrementa o estado 'count' quando o botão é clicado */}
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
};

export default Counter;