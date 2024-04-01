// USECONTEXT 
// O useContext é usado para acessar um contexto definido pelo React.createContext em componentes filhos sem passar props manualmente por todos os níveis.
// useContext(ThemeContext) permite acessar o valor do contexto ThemeContext definido no componente App, sem a necessidade de passar props manualmente.

import React, { useContext } from 'react';

// Cria um contexto
const ThemeContext = React.createContext('light');

const ThemedComponent = () => {
  // Usa o contexto ThemeContext
  const theme = useContext(ThemeContext);

  return <p>Tema atual: {theme}</p>;
};

const App = () => (
  <ThemeContext.Provider value="dark">
    <ThemedComponent />
  </ThemeContext.Provider>
);

export default App;