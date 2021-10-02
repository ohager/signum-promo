import { useState, useEffect } from 'react';


export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width:0, height:0});

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      console.log('resize', width, height)
      setWindowDimensions({width,height});
    }

    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
