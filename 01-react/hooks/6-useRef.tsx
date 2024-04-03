// useRef
// usado para acessar um elemento do DOM ou manter uma referência persistente a um valor entre renderizações.
// Neste exemplo, useRef é usado para criar uma referência (inputRef) ao elemento de input. O hook useEffect é utilizado para focar automaticamente no input quando o componente é montado.

import React, { useRef, useEffect } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Foca no input quando o componente é montado
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focar no Input</button>
    </div>
  );
};

export default FocusInput;