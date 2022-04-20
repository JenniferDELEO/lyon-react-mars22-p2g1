import React from 'react';
import Adrien from '../assets/adrien.png';
import Woman from '../assets/woman.png';
import Gaspard from '../assets/gaspard.png';
import Clement from '../assets/clement.png';
import Pierre from '../assets/pierre.png';

function ContactComponent() {
  return (
    <div className="Avatars">
      <div className="Jen">
        <img src={Woman} alt="Jen" /> Jen
      </div>
      <div className="Adrien">
        <img src={Adrien} alt="Adrien" /> Adrien
      </div>
      <div className="Gaspard">
        <img src={Gaspard} alt="Gaspard" /> Gaspard
      </div>
      <div className="Clement">
        <img src={Clement} alt="Clement" /> Clement
      </div>
      <div className="Pierre">
        <img src={Pierre} alt="Pierre" /> Pierre
      </div>
    </div>
  );
}

export default ContactComponent;
