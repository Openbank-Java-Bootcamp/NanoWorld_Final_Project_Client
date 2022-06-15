import "./ScatterChart.css";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({ title, data, grid}) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <ScatterChart data={data}
          // width={400}
          // height={400}
          // margin={{
          //   top: 20,
          //   right: 20,
          //   bottom: 20,
          //   left: 20,
          // }}
        >
          {grid && <CartesianGrid stroke="#e0dfdf" />}
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
         
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
