import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ExperienceCard = ({experience}) => {
  return (
    <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
        <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-100 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
        <header className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600 sm:col-span-2'>{experience.duration}</header>
        <div className='z-10 sm:col-span-6'>
            <h3 className='font-medium leading-snug'>
                <div>
                    <a  href={experience.place.website} 
                        target='_blank'
                        className='inline-flex items-baseline font-medium leading-tight text-cyan-400 hover:text-cyan-500 group/link text-base'>
                        <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                        <span>{experience.charge}{' '}-{' '} 
                            <span className='inline-block'>
                                {experience.place.name}{' '}
                                <FontAwesomeIcon icon={faLink} />
                            </span>
                        </span>
                    </a>
                </div>
            </h3>
            <ul className='mt-2 flex flex-col'>
                {
                    experience.tasks.map((task) => (
                        <li key={task} className='mt-2 text-sm leading-normal'>
                            <p className=''>•	{task}.</p>
                        </li>
                    ))
                }
            </ul>
            <ul className='mt-2 flex flex-wrap'>
                {
                    experience.technologies.map((technologie) => (
                        <li key={technologie.name} className='mr-1.5 mt-2'>
                            <div className='flex items-center rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 '>
                                {technologie}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default ExperienceCard