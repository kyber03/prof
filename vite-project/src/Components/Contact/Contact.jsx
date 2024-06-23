import React from "react";
import "./Contact.css";
import themepattern1 from "../../assets/theme_pattern.svg";
import mailicon from "../../assets/mail_icon.svg";
import locationicon from "../../assets/location_icon.svg";
import callicon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="c-title">
        <h1>Get in Touch</h1>
        <img src={themepattern1} alt="" />
      </div>

      <div className="c-section">
        <div className="left-s">
          <h1>Let's talk</h1>
          <p>Iam currently available</p>

          <div className="c-details">
            <div className="detail">
              <img src={mailicon} alt="" />
              <p>ubai0312@gmail.com</p>
            </div>

            <div className="detail">
              <img src={callicon} alt="" />
              <p>+91 9042765509</p>
            </div>

            <div className="detail">
              <img src={locationicon} alt="" />
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>
        <form action="" className="right-s">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Name</label>
          <input type="email" placeholder="Enter your mail" name="email" />
          <label htmlFor="">Write your Message here</label>
          <textarea name="" id="" rows="8"></textarea>
          <button type="submit" className="contact-submit">
            submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
