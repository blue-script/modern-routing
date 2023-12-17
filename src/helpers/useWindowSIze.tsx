import {useEffect, useState} from 'react';

/**
 * ЭТОТ ХУК МЕРЯЕТ ШИРИНУ ЭКРАНА И ИСПОЛЬЗУЕТСЯ БУРГЕРОМ
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(0)
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return windowSize
}