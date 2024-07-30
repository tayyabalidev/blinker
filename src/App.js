
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Toyota from './component/Toyota';
import Page404 from './component/Page404';
import Honda from './component/Honda';
import Mazda from './component/Mazda';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toyota" element={<Toyota />} />
        <Route path="/honda" element={<Honda />} />
        <Route path="/mazda" element={<Mazda />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
