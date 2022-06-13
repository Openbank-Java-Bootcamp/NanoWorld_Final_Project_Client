// src/pages/HomePage.js



import LineChart from "../../components/lineChart/LineChart";
import InfoBox from "../../components/infoBox/InfoBox";
import "./HomePage.css";
// import Chart from "../../components/chart/Chart";
import { userData } from "../../data/dummyData.js";
// import WidgetSm from "../../components/widgetSm/WidgetSm";
// import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <InfoBox />
      {/* <LineChart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
      {/* <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div> */}
    </div>
  );
}