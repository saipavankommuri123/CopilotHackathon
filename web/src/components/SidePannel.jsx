import React from 'react';
import './SidePannel.css';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <ul>
        <li><a href="#section1">Section 1</a></li>
        <li><a href="#section2">Section 2</a></li>
        <li><a href="#section3">Section 3</a></li>
        <li><a href="#section4">Section 4</a></li>
      </ul>
    </div>
  );
};

export default SidePanel;