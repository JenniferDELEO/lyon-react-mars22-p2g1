import '../styles/Popup.css';
import React from 'react';

function PopupHome({ trigger, children, setTrigger }) {
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

export default PopupHome;
