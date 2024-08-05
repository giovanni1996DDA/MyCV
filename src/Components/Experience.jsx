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
        tasks:[ "Mantenimiento de código", 
                "Documentación de jerarquías de dependencias (Con un software hecho por mí, en Python)",
                "Desarrollo de herramientas externas",
                "Smartforms"
            ],
        technologies: ["ABAP"]
    },
    {
        duration: "Dic 2022 — Jul 2024",
        charge: "Desarrollador ABAP",
        place: {
            name: "Indra",
            website: "https://www.indracompany.com/"
        },
        tasks:[
            "Mantenimiento de código",
            "Desarrollo de nuevas soluciones",
            "Debug de códigos estándar y no estándar",
            "ABAP OO",
            "Implementación y corrección de BAdIs",
            "Utilización de BAPIs",
            "Pase de objetos de ECC6 a HANA",
            "Enhancements",
            "User Exits"
        ],
        technologies: ["ABAP"]
    },
    {
        duration: "Jun 2020 — Dic 2022",
        charge: "Consultor Funcional, Desarrollador ABAP",
        place: {
            name: "Group ITMind",
            website: "https://www.groupitmind.com/"
        },
        tasks:[
            "Proyecto de implementación de módulos PPM y PS",
            "Desarrollo de interfaces para soluciones externas (Mediante archivos de texto plano)",
            "Adaptación de Property Providers para Extended ECM for SAP Solutions",
            "ABAP OO",
            "Implementación de FS2 AutoBank (En conjunto con consultores alemanes, de habla inglesa)"
        ],
        technologies: ["ABAP", "PPM", "PS", "FI"]
    },
    {
        duration: "Ene 2015 — Jun 2020",
        charge: "Desarrollador VB.NET, Consultor Dynamic NAV",
        place: {
            name: "Grupo MAS Software",
            website: "https://www.grupomas.software/"
        },
        tasks:[
            "Consultoría para ERP propio de la empresa",
            "Desarrollo de soluciones para ERP propio de la empresa en VB.NET",
            "Creación de frontend en HTML, CSS y JavaScript para arquitectura ASP",
            "Manejo de Base de datos SQLServer",
            "Consultoría Microsoft Dynamics NAV"
        ],
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