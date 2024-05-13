import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';

function App() {
  return (
    <div className="mx-auto font-body ">

      <Navbar />
      <Hero />
      <Technologies />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div >
  );
}

export default App;
