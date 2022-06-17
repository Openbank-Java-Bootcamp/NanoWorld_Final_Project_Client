import React from "react";
import gif from "../../assets/nanoparticle2.gif";
import "./IsLoading.css";
export default function IsLoading() {
  return (
    <div className="home" id="main">
      <img src={gif} alt="loadingGif" className="imgLoading" />

      <div class="loading-text">
        <span class="loading-text-words">L</span>
        <span class="loading-text-words">O</span>
        <span class="loading-text-words">A</span>
        <span class="loading-text-words">D</span>
        <span class="loading-text-words">I</span>
        <span class="loading-text-words">N</span>
        <span class="loading-text-words">G...</span>
      </div>
    </div>
  );
}
