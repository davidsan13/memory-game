import React from 'react';
import github from '../assets/github.svg'
export default function Footer() {
  return (
    <div className="footer">
      
      <h2>
        Copyright © 2022 David San
      </h2>
      <a href='https://github.com/davidsan13/memory-game'><img src={github}/></a>
     
    </div>
  );
}
