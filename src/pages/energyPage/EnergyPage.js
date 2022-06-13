// src/pages/EnergyPage.js



import LineChart from "../../components/lineChart/LineChart";
import InfoBox from "../../components/infoBox/InfoBox";
import "./HomePage.css";
import { userData } from "../../data/dummyData.js";

export default function EnergyPage() {
  return (
    <div className="home">
      <LineChart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  );
}