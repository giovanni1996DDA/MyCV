import React from 'react';
import { useScroll } from '../Hooks/ScrollContext'; // Ajusta esta línea

const NavigationMenu = () => {
  const { scrollToSection } = useScroll();

  const items = [
    { name: 'Sobre mi', section: 'about' },
    { name: 'Experiencia', section: 'experience' },
    { name: 'Estudios', section: 'studies' }
  ];

  return (
    <ul className='mt-16 w-max'>
      {items.map((item) => (
        <li key={item.section}>
          <button 
            onClick={() => scrollToSection(item.section)} 
            className='group flex items-center py-3 active'
          >
            <span className='nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-cyan-300 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
            <span className='nav-text text-xs font-bold uppercase tracking-widest group-hover:text-cyan-300 group-focus-visible:text-slate-200'>
              {item.name}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
