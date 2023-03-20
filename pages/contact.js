import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from "../src/components/Navbar"

function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x3zid9d', 'template_y6biong', form.current, 'gJvlNiZo3mc0qLlvf')
      .then((result) => {
          console.log(result.text);
          console.log("messgae sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section>
      <Navbar/>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">send</button>
    </form>
    </section>
  );
}

export default contact