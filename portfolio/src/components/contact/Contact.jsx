import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_ol86g14",
        "template_a7xy1cn",
        e.target,
        "user_SXYxdi5FIMsCPlEvTYeKh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="Email" name="email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send</button>
          {message && (
            <div>
              <span>Thanks, I'll reply you soon :)</span>
              <br />
              <span>Muchas gracias, te voy a responder en instantes :)</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
