import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "../pages/encoder_css.css";
import Encoder from '../pages/encoder';
import Approver from '../pages/approver'; 
import Publisher from '../pages/publisher';
import Logo from './Logo.svg'
export default function App() {

  return (
    <Router>
      <div className="navbar">
      <img className="logo" src={Logo}/>
      <div className="nav">
        <Link to="/encoder">
          <button className="nav-btn">Go to Encoder</button>
        </Link>
        <Link to="/approver">
          <button className="nav-btn">Go to Approver</button>
        </Link>
        <Link to="/publisher">
          <button className="nav-btn">Go to Publisher</button>
        </Link>
        </div>
        <Routes>
          <Route path="/encoder" element={<Encoder />} />
          <Route path="/approver" element={<Approver />} />
          <Route path="/publisher" element={<Publisher />} />
        </Routes>
      </div>
    </Router>
  )
  };