import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../src/components/Navbar";
import { useRouter } from "next/router";

function Contact() {
  const form = useRef();
  const router = useRouter();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x3zid9d",
        "template_y6biong",
        form.current,
        "gJvlNiZo3mc0qLlvf"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Message sent!");
          router.push("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section>
      <Navbar />
      <section id="about contact">
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact Us</h1>
          <p>
            Please take a moment to get in touch, we will get back to you
            shortly.
          </p>

          <div class="column">
            <label for="the-name">Your Name</label>
            <input type="text" name="user_name" id="the-name" />

            <label for="the-email">Email Address</label>
            <input type="email" name="user_email" id="the-email" />

            <label for="the-phone">Phone Number</label>
            <input type="tel" name="phone_num" id="the-phone" />
          </div>
          <div class="column">
            <label for="the-message">Message</label>
            <textarea name="message" id="the-message"></textarea>
            <button className="send click" type="submit">
              Send Details
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

export default Contact;
