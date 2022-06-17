import InfoBox from "../../components/infoBox/InfoBox";
import "./HomePage.css";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="home" id="main">
      <div className="logo ">Welcome to NanoWorld...</div>
      <div className="bigFrameLeft">
        <p>
          <b>Scientists</b> have realised that <b>tiny pieces</b> of this{" "}
          <b>precious metal </b>
          {/* -far too small to be seen by the naked eye-  */}
          could also become a <b>valued commodity</b>.{" "}
        </p>{" "}
        <p>
          {" "}
          Around the world,
          <b> gold nanoparticles</b> are being tested as components in{" "}
          <b>technology and medicines</b>.
        </p>{" "}
        <p>
          Let <b>see</b>, <b>share</b> and <b>create</b> data about{" "}
          <b>nanoclusters and nanoparticles</b> here.
        </p>
      </div>
      <div className="bigFrameRight">
        <div className="video-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=QorK2X7GsVU"
            playing
            controls
            volume="0.5"
          />
        </div>
      </div>

      {/* <InfoBox /> */}
    </div>
  );
}
