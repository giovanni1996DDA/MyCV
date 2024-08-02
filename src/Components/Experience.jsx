import React from 'react'

import ExperienceCard from './ExperienceCard';
;

const experiences = [
    {
        duration: "Jul 2024 — Presente",
        charge: "Desarrollador ABAP",
        place: {
            name: "Ocasa",
            website: "https://ocasa.com/"
        },
        tasks:"lorem ipsum dolor sit atmet",
        technologies: ["ABAP"]
    },
    {
        duration: "Dic 2022 — Jul 2024",
        charge: "Desarrollador ABAP",
        place: {
            name: "Indra",
            website: "https://www.indracompany.com/"
        },
        tasks:"lorem ipsum dolor sit atmet",
        technologies: ["ABAP"]
    },
    {
        duration: "Jun 2020 — Dic 2022",
        charge: "Consultor Funcional, Desarrollador ABAP",
        place: {
            name: "Group ITMind",
            website: "https://www.groupitmind.com/"
        },
        tasks:"lorem ipsum dolor sit atmet",
        technologies: ["ABAP", "PPM", "PS", "FI"]
    },
    {
        duration: "Ene 2015 — Jun 2020",
        charge: "Desarrollador VB.NET, Consultor Dynamic NAV",
        place: {
            name: "Grupo MAS Software",
            website: "https://www.grupomas.software/"
        },
        tasks:"lorem ipsum dolor sit atmet",
        technologies: ["VB.NET", "JavaScript", "HTML", "CSS", "SQLServer", "Dynamics NAV"]
    }
];

const Experience = () => {
  return (
    <ol className='group/list flex flex-col gap-12'>
        {experiences.map((experience) => (
            <li key={experience.name}>
                <ExperienceCard experience={experience}/>
            </li>
        ))}
    </ol>
  )
}

export default Experience