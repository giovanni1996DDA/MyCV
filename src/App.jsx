import React, { useState, useEffect } from 'react';
import HeaderPage from './Pages/HeaderPage';
import MainPage from './Pages/MainPage';
import LoadingPage from './Pages/LoadingPage';
import { ScrollProvider } from './Hooks/ScrollContext';
import { text } from '@fortawesome/fontawesome-svg-core';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleAnimationEnd = () => {
    const loadingContainer = document.getElementById('loading-container');
    loadingContainer.classList.add('hidden'); // Añadir clase para desvanecer la pantalla de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 500); // Esperar a que la transición termine antes de ocultar la pantalla de carga
  };

  useEffect(() => {
    if (!isLoading) {
      const mainContent = document.getElementById('main-content');
      mainContent.classList.add('visible'); // Añadir clase para mostrar el contenido principal
    }
  }, [isLoading]);

  return (
    <ScrollProvider>
      {isLoading && <LoadingPage onAnimationEnd={handleAnimationEnd} />}
      <div id="main-content" className={`main-content mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 ${isLoading ? '' : 'visible'}`}>
        <div className='lg:flex lg:justify-between lg:gap-4 page_container'>
          <HeaderPage />
          <MainPage />
        </div>
      </div>
    </ScrollProvider>
  );
  /*return (
    <div className='flex flex-col justify-center items-center w-4/5 m-auto min-h-screen gap-16'>
      <h1 className='font-bold tracking-tight sm:text-5xl text-cyan-400' style={{fontSize:'7rem'}}>
        Juan Cruz Díaz de Argandoña
      </h1>
      <div className='flex items-center rounded-full bg-cyan-300/15  text-cyan-300 '>
        <p className='mt-1 mb-4 mr-14 ml-14' style={{fontSize:'5rem'}}>Software Developer</p>
      </div>
    </div>
  )*/
}

export default App;
