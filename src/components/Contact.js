import React, { useState } from 'react';
import Modal from './Modal';
import callperson from '../images/callperson.png';
import { FiArrowRight, FiCalendar, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);
  const valid = name && email && message;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="inner-page contact-page">
      <section className="page-heading">
        <span className="eyebrow">Let’s work together</span>
        <h1>Have an idea? <em>Let’s talk.</em></h1>
        <p>Whether you have a project in mind or simply want to connect, I’d love to hear from you.</p>
      </section>

      <section className="contact-layout">
        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-heading"><span><FiSend /></span><div><small>Send a message</small><h2>Tell me about your project</h2></div></div>
          <div className="field-row">
            <label>Name<input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />{submitted && !name && <small>Please enter your name.</small>}</label>
            <label>Email<input type="email" placeholder="you@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />{submitted && !email && <small>Please enter your email.</small>}</label>
          </div>
          <label>Message<textarea value={message} placeholder="Tell me what you would like to build..." onChange={(e) => setMessage(e.target.value)} />{submitted && !message && <small>Please write a message.</small>}</label>
          <button className="form-submit" type="submit">Send Message <FiArrowRight /></button>
          {submitted && valid && <div className="success-message">Thanks, {name}! Your message is ready to send.</div>}
        </form>

        <aside className="contact-aside">
          <div className="contact-details">
            <span className="eyebrow">Contact details</span>
            <a href="mailto:diana.kaloyancheva@gmail.com"><FiMail /><span><small>Email</small>diana.kaloyancheva@gmail.com</span></a>
            <a href="tel:+46729757042"><FiPhone /><span><small>Phone</small>072 975 70 42</span></a>
            <div><FiMapPin /><span><small>Location</small>Jönköping, Sweden</span></div>
          </div>
          <div className="call-card"><FiCalendar /><h3>Prefer a conversation?</h3><p>Book a call and let’s discuss your ideas.</p><button onClick={() => setOpen(true)}>Book a Call <FiArrowRight /></button></div>
        </aside>
      </section>

      {open && <Modal close={() => setOpen(false)}><div className="modal-message"><img src={callperson} alt="Person confirming a booked call" /><h2>Your call is booked!</h2><p>I look forward to speaking with you.</p></div></Modal>}
    </main>
  );
};

export default Contact;
