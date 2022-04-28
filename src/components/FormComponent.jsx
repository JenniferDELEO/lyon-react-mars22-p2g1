import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/FormComponent.css';

function FormComponent() {
  const form = useRef();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4if9eu4',
      'template_xmbjes5',
      form.current,
      '0TYQA1GenX3etokSV'
    );
    setName('');
    setMail('');
    setMessage('');
    toast(
      'Merci pour votre message. Notre équipe vous répondra dès que possible !',
      {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };
  return (
    <div className="form-section">
      <h2 className="form-title">Votre message :</h2>
      <form ref={form} className="form-component" onSubmit={sendEmail}>
        <label htmlFor="name">
          Votre nom * :
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label htmlFor="mail">
          Votre email * :
          <input
            type="email"
            name="mail"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
            required
          />
        </label>
        <label htmlFor="message">
          Votre message * :
          <textarea
            rows="15"
            cols="40"
            type="text"
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn-form">
          Envoyer
        </button>
      </form>
      <ToastContainer className="toast-container" />
    </div>
  );
}

export default FormComponent;
