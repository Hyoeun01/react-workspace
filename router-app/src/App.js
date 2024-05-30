import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/" >홈</Link></li>
        <li><Link to="/about" >소개</Link></li>
        <li><Link to="/info" >info</Link></li>
      </ul>
      <hr />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
