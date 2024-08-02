import React, { createContext, useRef, useContext } from 'react';

// Crear el contexto
const ScrollContext = createContext();

// Crear un proveedor de contexto
export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const studiesRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'experience':
        experienceRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'studies':
        studiesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <ScrollContext.Provider value={{ aboutRef, experienceRef, studiesRef, scrollToSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Crear un hook personalizado para usar el contexto
export const useScroll = () => {
  return useContext(ScrollContext);
};
