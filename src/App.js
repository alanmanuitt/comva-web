import './App.css';
import think from'./assets/think.jpg';
import climb from'./assets/climb.jpg';
import beach from'./assets/beach.jpg';
import sunset from'./assets/sunset.jpg';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Navbar from './components/Navbar';

const navbarLinks = [{ 
  url: "#", title:"Home",
  url: "#", title:"Proposito",
  url: "#", title:"Servicios"
}];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc = {think} />
      <Slider imageSrc = {climb} 
              title = {"Servicios"} 
              subtitle = {"}A pocos clic de tu mejor solucion"}
      />
      <Slider imageSrc = {beach} 
              title = {"Servicios"} 
              subtitle = {"}A pocos clic de tu mejor solucion"}
              flipped={true}
      />
      <Slider imageSrc = {sunset}
              title = {"Servicios"} 
              subtitle = {"}A pocos clic de tu mejor solucion"}
      />
    </div>
  );
}

export default App;
