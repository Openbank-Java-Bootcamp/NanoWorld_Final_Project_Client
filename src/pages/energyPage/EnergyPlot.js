import ScatterChart from "../../components/scatterChart/ScatterChart";
import "./HomePage.css";
import { scatterData } from "../../data/scatterData.js";

export default function EnergyPlot() {
  return (
    <div className="home">
      <ScatterChart
        data={scatterData}
        title="User Analytics"
        grid
        fill="#8884d8"
      />
    </div>
  );
}
