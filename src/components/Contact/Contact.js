import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div className="contact-body">
        <div className="contact-in">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118103.33518818498!2d91.74982716455273!3d22.326078105873282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChattogram!5e0!3m2!1sen!2sbd!4v1633345513779!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-form">
            <h1>Contact Us</h1>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="contact-form-txt"
              />
              <input
                type="text"
                placeholder="Email"
                className="contact-form-txt"
              />
              <textarea
                placeholder="Message"
                className="contact-form-textarea"
              ></textarea>
              <input type="submit" name="Submit" className="contact-form-btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
