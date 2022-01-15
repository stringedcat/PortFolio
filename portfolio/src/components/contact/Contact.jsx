import { useState, useEffect } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
const Contact = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",

    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [success, setSuccess] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setSuccess("Loading");
    Object.keys(formErrors).length === 0 && isSubmit
      ? emailjs
          .sendForm(
            "service_ol86g14",
            "template_a7xy1cn",
            e.target,
            "user_SXYxdi5FIMsCPlEvTYeKh"
          )
          .then(
            (result) => {
              setSuccess("Message sent successfully");
            },
            (error) => {
              setSuccess("Cannot send the message");
            }
          )
      : setSuccess("Unvalid values");
    e.target.reset();
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length > 20) {
      errors.name = "No longer than 20 characters";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Unvalid email";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues]);
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <p>{formErrors.name}</p>
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
          <textarea
            placeholder="Message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          <p>{formErrors.message}</p>
          <button type="submit">Send</button>
          {isSubmit && <span>{success}</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
