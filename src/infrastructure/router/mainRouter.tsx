import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from '../../pages/About/About';
import Contact from '../../pages/Contact/Contact';
import Home from '../../pages/Home/Home';

const mainRouter: React.FunctionComponent<{}> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home name="Home Page" />} />
      <Route path="/about" element={<About name="About Page" />} />
      <Route path="/contact" element={<Contact name="Contact Page" />} />
    </Routes>
  );
};

export default mainRouter;
