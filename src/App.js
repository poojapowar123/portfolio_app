
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact/Contact';
import Talk from './components/Talk/Talk';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/let's talk" element={<Talk />} /> 
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
