import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Encoder from '../pages/encoder';
import Approver from '../pages/approver'; 
import Publisher from '../pages/publisher';

export default function App() {

  return (
    <Router>
      <div>
        <Link to="/encoder">
          <button>Go to Encoder</button>
        </Link>

        <Link to="/approver">
          <button>Go to Approver</button>
        </Link>

        <Link to="/publisher">
          <button>Go to Publisher</button>
        </Link>

        <Routes>
          <Route path="/encoder" element={<Encoder />} />
          <Route path="/approver" element={<Approver />} />
          <Route path="/publisher" element={<Publisher />} />
        </Routes>
      </div>
    </Router>
  )
  };