import React from 'react';

import Menu from './components/Menu';
import Footer from './components/Footer';
import Body from './components/Body';

import './styles/global.css'

function App() {
  return (
    <div className="App">
      <Menu />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
