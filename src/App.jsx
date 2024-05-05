import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/intro/Intro";
import Services from "./Components/services/Services";
import './app.css'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services/>
    </div>
  );
}

export default App;