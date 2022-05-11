/* eslint-disable react/jsx-indent */
import React from 'react';
import ContactComponent from '../components/ContactComponent';
import FormComponent from '../components/FormComponent';
import '../styles/Form.css';

export default function Form() {
  return (
    <div className="formContainer">
      <div>
        <ContactComponent />
      </div>
      <div>
        <FormComponent />
      </div>
    </div>
  );
}
