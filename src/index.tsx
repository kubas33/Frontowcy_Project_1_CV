import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

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
    'PWZS W Kaliszu - studia I stopnia "Mechanika i Budowa Maszyn"',
    'PWZS W Kaliszu - studia II stopnia "Mechanika i Budowa Maszyn"',
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

root.render(
  <React.StrictMode>
    <header>
      <h1>
        CV {cvData.name} {cvData.lastName}
      </h1>
      <aside>
        <img src={cvData.photo} alt={cvData.name} />
      </aside>
    </header>
  </React.StrictMode>
);
