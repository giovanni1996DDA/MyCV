import React from 'react';
import NavigationMenu from '../Components/NavigationMenu';
import SocialMedia from '../Components/SocialMedia';

const HeaderPage = () => {
  return (
    <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
        <div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl text-cyan-500'>
                Juan Cruz Díaz 
            </h1>
            <h2 className='mt-3 text-lg font-medium tracking-tight sm:text-xl text-cyan-400'>
                Developer
            </h2>
            <p className='mt-4 max-w-xs leading-normal '>
                Construyo soluciones de negocio y, en mis tiempos libres, hago juegos y otras cosas.
            </p>
            <nav className='nav hidden lg:block'>
                <NavigationMenu />
            </nav>
        </div>
        <SocialMedia/>
    </header>
  );
};

export default HeaderPage;
