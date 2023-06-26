import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
