import React from "react";
import "./Mywork.css";
import themework from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrowicon from "../../assets/arrow_icon.svg";
const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="title">
        <h1>My latest work</h1>
        <img src={themework} alt="" />
      </div>
      <div className="work-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="work-more">
        <p>show more</p>
        <img src={arrowicon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
