import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialItems = [
    {
        name: "LinkedIn",
        icon:faLinkedin,
        href:"https://www.linkedin.com/in/juan-cruz-diaz-de-argando%C3%B1a/"
    },
    {
        name: "GitHub",
        icon:faGithub,
        href:"https://github.com/giovanni1996DDA"
    },
];

const SocialMedia = () => {
  return (
    <ul className='ml-1 mt-8 flex items-center'>
      {socialItems.map((item) => (
        <li key={item.name} className='mr-5 text-xs shrink-0'>
            <a href={item.href} target='_blank' title={item.name} className='block hover:text-cyan-300 transition-all'>
                <FontAwesomeIcon icon={item.icon} className='h-6 w-6' />
            </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
