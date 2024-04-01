// useImperativeHandle
// O useImperativeHandle é usado para personalizar o valor que é dado a ref quando usado com React.forwardRef.
// Neste exemplo, useImperativeHandle é usado no componente filho para expor uma função focus através da ref. O componente pai pode então chamar essa função para focar no input do componente filho.

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

// Componente filho
const ChildComponent = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      document.getElementById('child-input').focus();
    },
  }));

  return <input id="child-input" type="text" />;
});

// Componente pai
const ParentComponent = () => {
  const childRef = useRef(null);

  const handleClick = () => {
    childRef.current.focus();
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focar no Input Filho</button>
    </div>
  );
};

export default ParentComponent;