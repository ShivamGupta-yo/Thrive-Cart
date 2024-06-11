import React from 'react';
import Layout from '../Layout/Layout';
import './Contact.css';

const Contact = () => {
  return (
    <Layout title={'Contact Us'}>
      <div className='contact-container'>
        <h1 className='contact-heading'>Contact Us</h1>
        <div className='contact-info'>
          <p><strong>Email:</strong> shivam1234snr@gmail.com</p>
          <p><strong>Phone:</strong> +917876592269</p>
          <p><strong>Address:</strong> VPO bhojpur Opp. IDBI bank,Sundernagar</p>
        </div>
        <div className='contact-form'>
          <h2>Send us a message</h2>
          <form autoComplete='off'>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' rows='4' required></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
