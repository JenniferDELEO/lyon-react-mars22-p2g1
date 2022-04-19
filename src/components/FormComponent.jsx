import React, { useRef, useState } from 'react';
import '../styles/FormComponent.css';
import emailjs from '@emailjs/browser';

function FormComponent() {
  const form = useRef();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_4if9eu4',
        'template_xmbjes5',
        form.current,
        '0TYQA1GenX3etokSV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert('Merci pour votre message');
  };
  return (
    <div>
      <h2 className="form-title">Votre message :</h2>
      <form ref={form} className="form-component" onSubmit={sendEmail}>
        <label htmlFor="name">Votre nom * :</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <label htmlFor="mail">Votre mail * :</label>
        <input
          type="text"
          name="mail"
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
        <button type="submit" className="btn-form" onClick={sendEmail}>
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default FormComponent;
