import React from 'react';
import Nav from './components/Nav'
import About from './components/About';
import './App.css';

function App() {
  return (
    // React.createElement("div", {}, [
      // ("h1", Ginger)
    // ])
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
