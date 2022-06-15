//With good info
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import {data, options, GetClusterData} from "./data.js"




export default function EnergyPlot3() {
  return (
    <div className="home">
      <GetClusterData/>
      <Bubble options={options} data={data} />
      
    </div>
  );
}
