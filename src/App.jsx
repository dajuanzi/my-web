import React from 'react';
import Introduction from './components/Introduction.jsx';
import Timeline from './components/Timeline.jsx';
import SocialLinks from './components/SocialLinks.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#connect">Connect</a></li>
        </ul>
      </nav>

      {/* Sections with IDs for navigation */}
      <section id="home" className="section intro-section">
        <Introduction />
      </section>

      <section id="timeline" className="section timeline-section">
        <Timeline />
      </section>

      <section id="connect" className="section social-section">
        <SocialLinks />
      </section>
    </div>
  );
}

export default App;
