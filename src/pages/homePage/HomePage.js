// src/pages/HomePage.js

import LineChart from "../../components/lineChart/LineChart";
import InfoBox from "../../components/infoBox/InfoBox";
import "./HomePage.css";
// import Chart from "../../components/chart/Chart";
import { userData } from "../../data/dummyData.js";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";
import ReactPlayer from "react-player";

export default function Home() {
  return (
    <div className="home" id="main">
      <div className="bigFrame">
        <div className="bigFrameRight">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=QorK2X7GsVU"
            playing
            controls
            volume="0.5"
          />
        </div>
        {/* <div className="bigFrameLeft"> */}
        <p>
          Recently, scientists have realised that tiny pieces of this precious
          metal -far too small to be seen by the naked eye- could also become a
          valued commodity. In labs around the world, gold nanoparticles are
          being tested as components in technology and medicines. Let see, share
          and create data about nanoclusters and nanoparticles here. Structural
          and energetic data very important for nanotechnology to develop gold
          could be used to kill cancer cells, improve the efficiency of solar
          cells and catalyse chemical reactions.
        </p>
        {/* </div> */}
      </div>

      <InfoBox />
      {/* <LineChart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      {/* <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}
