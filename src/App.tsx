import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './infrastructure/router/mainRouter';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
