import { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
          {message && (
            <span>{`Thanks, I'll reply you soon :)
          ----------------------------------------
          Muchas gracias, te voy a responder en instantes :)`}</span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
