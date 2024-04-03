// USESTATE - um dos principais hooks
// O useEffect é usado para executar efeitos secundários em componentes funcionais, como chamadas de API.
// useEffect é usado para simular uma chamada de API após a renderização do componente. O array vazio ([]) como segundo argumento indica que este efeito é executado apenas uma vez, equivalente ao componentDidMount em componentes de classe.


import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula uma chamada de API após a renderização do componente
    setTimeout(() => {
      setData('Dados da API');
    }, 2000); // Delay de 2 segundos
  }, []); // O array vazio indica que este efeito é executado apenas uma vez

  return (
    <div>
      {data ? <p>{data}</p> : <p>Carregando...</p>}
    </div>
  );
};

export default DataFetcher;