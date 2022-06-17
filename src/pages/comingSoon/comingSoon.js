import React from "react";
import gif from "../../assets/tulla-curtain-tulla-peakaboo.gif";
import "./comingSoon.css";
export default function ComingSoon() {
  return (
    <div className="home" id="main">
      <h1 className="goldButton">Coming Soon...</h1> <img src={gif} alt="" />
    </div>
  );
}
