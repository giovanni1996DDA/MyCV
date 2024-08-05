import React, { useEffect } from 'react';
import anime from 'animejs';

const LoadingPage = ({ onAnimationEnd }) => {
    useEffect(() => {
        const anim = anime.timeline({
          loop: false,
          direction: 'alternate',
        });
    
        anim
          .add({
            targets: '#hexagon path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutQuart',
            duration: 1500,
            delay: function(el, i) { return i * 250 },
          })
          .add({
            targets: '#hexagon #J',
            duration: 1000,
            opacity: 1,
            easing: 'easeInOutQuart',
          })
          .finished.then(() => {
            anime.timeline({
              complete: onAnimationEnd, // Llama a onAnimationEnd cuando la animación de salida completa
            })
            .add({
              targets: '#hexagon #J',
              duration: 1000,
              opacity: 0,
              easing: 'easeInOutQuart',
              delay: 500,
            })
            .add({
              targets: '#hexagon path',
              strokeDashoffset: [0, anime.setDashoffset],
              easing: 'easeInOutQuart',
              duration: 1000,
              delay: function(el, i) { return i * 250 },
            });
          });
    }, [onAnimationEnd]);

  return (
    <div id="loading-container" className="loading-container fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <svg id="hexagon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='logo w-1/3 h-1/3 fill-none'>
        <g>
          <path 
            stroke="#06B6D4" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
          />
          <g id="J" transform="translate(36, 33)" className='opacity-0' fill="#06B6D4" fontFamily="'IBM Plex Sans', sans-serif" fontSize="55" fontWeight="400" letterSpacing="4.16666603" textAnchor="middle">
            <text x="14" y="33">
              <tspan x="16" y="36">J</tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LoadingPage;
