import './App.css';
import React from 'react';
import owl from './reentry-owl.jpg';


function openInNewTab(url) {
  window.open(url, '_blank', 'noopener,noreferrer');
}

function social_network() {
  return (
      <div className="owl-logo">
      <a botton onClick={() => openInNewTab("https://www.youtube.com/watch?v=dQw4w9WgXcQ")} > 
        <img src={owl} alt='owl'/>
        </a>
      </div>
  );
}

export default social_network;
