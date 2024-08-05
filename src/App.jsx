import React, { useState, useEffect } from 'react';
import HeaderPage from './Pages/HeaderPage';
import MainPage from './Pages/MainPage';
import LoadingPage from './Pages/LoadingPage';
import { ScrollProvider } from './Hooks/ScrollContext';

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
}

export default App;
