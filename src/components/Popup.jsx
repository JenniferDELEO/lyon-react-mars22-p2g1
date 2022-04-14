import React from 'react';
import '../styles/Popup.css';

function Popup({ trigger, children, setTrigger }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button
          type="button"
          className="close-btn"
          onClick={() => setTrigger(false)}
        >
          X
        </button>
        {children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
