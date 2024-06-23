import React from "react";
import "./Footer.css";
import footericon from "../../assets/footer_logo.svg";
import usericon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top-left">
          <img src={footericon} alt="" />
          <p>Iam a full stack developer</p>
        </div>

        <div className="top-right">
          <div className="mail-input">
            <img src={usericon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>

      <hr />
      <div className="bottom">
        <p className="bottom-l">CopyRight</p>
        <div className="bottom-r">
          <p>Terms of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
