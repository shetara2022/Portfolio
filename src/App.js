import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Experience from './components/Experiences/Experience';
import Projects from './components/Projects/Projects';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />

        </Routes>
      </Router>
      <h1>Home</h1>

    </div>
  );
}

export default App;
