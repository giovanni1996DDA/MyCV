import React from 'react';
import AboutMe from '../Components/AboutMe';
import Experience from '../Components/Experience';
import Studies from '../Components/Studies';
import { useScroll } from '../Hooks/ScrollContext'; // Ajusta esta línea

const MainPage = () => {
  const { aboutRef, experienceRef, studiesRef } = useScroll();

  return (
    <main className="pt-24 lg:w-1/2 lg:py-24">
      <section ref={aboutRef} className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' id='about'>
        <AboutMe />
      </section>
      <section ref={experienceRef} className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' id='experience'>
        <Experience />
      </section>  
      <section ref={studiesRef} className='scroll-mt-16 lg:scroll-mt-24' id='studies'>
        <Studies />
      </section>  
    </main>
  );
};

export default MainPage;
