import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';

const routing = (
  <Router>
    <div>
      <h1>Urja Garments</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        {/* Use <Route> to specify what should be rendered at the root path */}
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));