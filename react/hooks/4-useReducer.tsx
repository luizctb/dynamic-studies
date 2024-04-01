// useReducer
// é uma alternativa ao useState mais poderosa para gerenciar state complexo com lógica mais elaborada.
// useReducer é usado para gerenciar o estado count de forma mais complexa, onde o estado é alterado de acordo com a ação especificada no dispatch.

import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error('Ação desconhecida');
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
};

export default CounterWithReducer;