import Experience from "./Components/Experience/Experience";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Works from "./Components/Work/Works";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/services/Services";
import './app.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Services />
      <Experience />
      <Works />
      <Portfolio/>
    </div>
  );
}

export default App;