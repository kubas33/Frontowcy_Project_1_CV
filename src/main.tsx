import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

interface Experience {
    lp: number;
    year: number;
    description: string;
}

interface CVData {
    photo: string;
    name: string;
    lastName: string;
    position: string;
    experience: Experience[];
    education: string[];
}

const cvData: CVData = {
    photo: "https://placehold.in/200.webp",
    name: "Kuba",
    lastName: "Stasiak",
    education: [
        "IV Liceum Ogólnokształcące w Kaliszu",
        'PWSZ W Kaliszu - studia I stopnia "Mechanika i Budowa Maszyn"',
        'PWSZ W Kaliszu - studia II stopnia "Mechanika i Budowa Maszyn"',
    ],
    position: "Konstruktor",
    experience: [
        {
            lp: 1,
            description: "Konstruktor",
            year: 2014,
        },
        {
            lp: 2,
            description: "Deweloper",
            year: 2023,
        },
    ],
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <main>
          <aside>
              <img src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} photo`}/>
              <hr/>
              <div className={"info"}>
                  <h1>{cvData.name} {cvData.lastName}</h1>
                  <small>{cvData.position}</small>
              </div>
          </aside>
          <section className={'life-section'}>
              <div>
                  <h2>Doświadczenie</h2>
                  <ul>
                      {cvData.experience.map((exp) => (
                          <li key={exp.lp}>
                              {exp.description} - {exp.year}
                          </li>
                      ))}
                  </ul>
              </div>
              <div>
                  <h2>Edukacja</h2>
                  <ul>
                      {cvData.education.map((edu) => (
                          <li key={edu}>
                              {edu}
                          </li>
                      ))}
                  </ul>
              </div>
          </section>
      </main>
  </StrictMode>,
)
