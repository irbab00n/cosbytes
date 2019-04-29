import React from 'react';

const SpinningGearBanner = () => (
  <div className="projects-view-section cosbytes-blue">
    <div className="projects-banner">
      <span style={{marginLeft: 'auto', marginRight: 'auto', transform: 'translate(-150px, 550px)', zIndex: 50}}>
        <i id="gear2" className="fas fa-cog large"></i>
      </span>
      <span style={{marginLeft: 'auto', marginRight: 'auto', transform: 'translate(150px, 650px)', zIndex: 50}}>
        <i id="gear3" className="fas fa-cog large"></i>
      </span>
      <span style={{transform: 'translate(100px, 800px)'}}>
        <i id="gear4" className="fas fa-cog large"></i>
      </span>
      <span style={{marginLeft: 'auto', transform: 'translate(0px, 800px)'}}>
        <i id="gear5" className="fas fa-cog large"></i>
      </span>
      <div className="banner-container">
        <h1 className="centered white">Welcome to my Projects</h1>
      </div>
    </div>
  </div>
);

export default SpinningGearBanner;