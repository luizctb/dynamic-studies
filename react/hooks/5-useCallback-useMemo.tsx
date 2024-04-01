// useCallback e useMemo
// useCallback e useMemo são usados para otimizar o desempenho, memorizando valores e funções entre renderizações
// useCallback é usado para memorizar a função increment, evitando sua recriação em cada renderização quando o estado count muda. useMemo é usado para memorizar o valor do quadrado de count, evitando recalcular sempre que o componente é renderizado.

import React, { useState, useCallback, useMemo } from 'react';

const MemoizedComponent = () => {
  const [count, setCount] = useState(0);

  // Memoriza a função increment() usando useCallback
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  // Memoriza o valor quadrado de count usando useMemo
  const squaredValue = useMemo(() => {
    return count * count;
  }, [count]);

  return (
    <div>
      <p>Contagem: {count}</p>
      <p>Valor Quadrado: {squaredValue}</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default MemoizedComponent;