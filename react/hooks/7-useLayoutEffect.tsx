// useLayoutEffect
// é similar ao useEffect, mas dispara após todas as mutações do DOM terem sido aplicadas.
// Neste exemplo, useLayoutEffect é usado para adicionar um event listener para detectar a mudança de tamanho da janela (resize). A diferença entre useLayoutEffect e useEffect é que useLayoutEffect dispara após as mutações do DOM terem sido aplicadas, o que é útil em certos casos de manipulação do DOM.

import React, { useState, useLayoutEffect } from 'react';

const ResizeListener = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <p>Largura da Janela: {width}px</p>;
};

export default ResizeListener;