import React, { useState } from 'react';
import '../styles/FormComponent.css';

function FormComponent() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      <h2 className="form-title">Votre message :</h2>
      <form className="form-component">
        <label htmlFor="name">Votre nom * :</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="mail">Votre mail * :</label>
        <input
          type="text"
          value={mail}
          onChange={(event) => setMail(event.target.value)}
          required
        />
        <label htmlFor="message">Votre message * :</label>
        <textarea
          rows="15"
          cols="40"
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </form>
      <button type="submit" className="btn-form">
        Envoyer
      </button>
    </div>
  );
}

export default FormComponent;
