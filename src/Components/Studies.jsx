import React from 'react'

import StudyCard from './StudyCard'

const studies = [
    {
        year: "Actualmente",
        title: "Ingeniería en sistemas informáticos",
        institute: "Universidad Abierta Interamericana",
        website: "https://uai.edu.ar/",
        technologies: ["C#", "C", "SQLExpress", "Consultoría funcional", "Diagramado de sistemas", "Identificación de problemas"]
    },
    {
        year: "2020",
        title: "Sap ABAP",
        institute: "Axigma Technologies",
        website: "https://axigmatechnologies.com/",
        technologies: ["ABAP"]
    },
    {
        year: "2020",
        title: "Sap FI",
        institute: "Axigma Technologies",
        website: "https://axigmatechnologies.com/",
        technologies: ["SAP FI"]
    },
];

const Studies = () => {
  return (
    <ol className='group/list flex flex-col gap-12'>
        {studies.map((study) => (
            <li key={study.title}>
                <StudyCard study={study}/>
            </li>
        ))}
    </ol>
  )
}

export default Studies