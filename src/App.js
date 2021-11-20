import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

import beach from "./assets/beach.jpg";
import climb from "./assets/climb.jpg";
import sunset from "./assets/sunset.jpg";
import think from "./assets/think.jpg";

import "./App.css";

const NAVBAR_LINKS = [
  {
    id: "purpose",
    title: "Proposito",
    url: "#purpose",
  },
  {
    id: "services",
    title: "Servicios",
    url: "#services",
  },
  {
    id: "mission",
    title: "Mision",
    url: "#mission",
  },
  {
    id: "contact",
    title: "Contacto",
    url: "#contact",
  },
];

const SECTIONS = [
  {
    id: "purpose",
    image: climb,
    subtitle: "A pocos clic de tu mejor solucion",
    title: "Proposito",
  },
  {
    id: "services",
    image: beach,
    subtitle: "A pocos clic de tu mejor solucion",
    title: "Servicios",
  },
  {
    id: "mission",
    image: sunset,
    subtitle: "A pocos clic de tu mejor solucion",
    title: "Mision",
  },
];

const App = () => (
  <div className="app">
    <Navbar links={NAVBAR_LINKS} />
    <Hero image={think} />
    {SECTIONS.map(({ id, image, subtitle, title }, index) => (
      <Section
        flipped={Boolean(index % 2)}
        id={id}
        image={image}
        key={`section-${id}`}
        subtitle={subtitle}
        title={title}
      />
    ))}
  </div>
);

export default App;
