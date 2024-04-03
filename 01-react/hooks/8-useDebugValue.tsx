// useDebugValue
// O useDebugValue é usado para fornecer um nome para hooks customizados para que possam aparecer melhor nas ferramentas de desenvolvedor.
// Neste exemplo, useDebugValue é usado dentro do custom hook useCustomHook para fornecer uma descrição do valor do estado count que será exibida nas ferramentas de desenvolvedor.

import React, { useState, useEffect, useDebugValue } from 'react';

const useCustomHook = () => {
  const [count, setCount] = useState(0);

  useDebugValue(count > 0 ? 'Contagem Positiva' : 'Contagem Zero ou Negativa');

  useEffect(() => {
    // Simula uma chamada de API após a renderização do componente
    setTimeout(() => {
      setCount(5);
    }, 2000); // Delay de 2 segundos
  }, []);

  return count;
};

const DebugValueExample = () => {
  const count = useCustomHook();

  return (
    <div>
      <p>Contagem: {count}</p>
    </div>
  );
};

export default DebugValueExample;