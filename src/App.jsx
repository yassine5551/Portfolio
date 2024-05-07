import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Work/Works";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/services/Services";
import './app.css'
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonials />
      <Contact/>
    </div>
  );
}

export default App;