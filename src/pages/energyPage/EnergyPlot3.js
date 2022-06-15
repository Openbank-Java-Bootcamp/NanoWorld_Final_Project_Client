//With good info Refactorizado
// import {
//   Chart as ChartJS,
//   LinearScale,
//   PointElement,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { Bubble } from "react-chartjs-2";
// import {data, options, GetClusterData} from "./data.js"

// export default function EnergyPlot3() {
//   return (
//     <div className="home">
//       <GetClusterData/>
//       <Bubble options={options} data={data} />

//     </div>
//   );
// }
//With good info Refactorizado///////////

//without refactor

import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import faker from "faker";

////////with axios/////////
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";
///////////

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

// export const data = {
//   datasets: [
//     {
//       label: "Gold Nano Clusters {project id}, {calc_id}",
//       data: Array.from({ length: 50 }, () => ({
//         x: faker.datatype.number({ min: -100, max: 100 }),
//         // x: {clusters.natoms},
//         y: faker.datatype.number({ min: -100, max: 100 }),
//         // Cicles radios
//         r: faker.datatype.number({ min: 5, max: 20 }),
//       })),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

export default function EnergyPlot2() {
  ////////with axios/////////
  const [clusters, setClusters] = useState([]);
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clusterDataSet, setClusterDataSet] = useState([]);
  const getAllclusters = () => {
    const storedToken = localStorage.getItem("authToken");

    // GET request to get the clusters
    axios
      .get(`${API_URL}/api/clusters`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const natoms = response.data.natoms;
        const energy = response.data.energy;
        setClusters(response.data);
        console.log(`cluster ${clusters}`);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllclusters();
    console.log(
      Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        // x: {clusters.natoms},
        y: faker.datatype.number({ min: -100, max: 100 }),
        // Cicles radios
        r: faker.datatype.number({ min: 5, max: 20 }),
      }))
    );
  }, []);

  useEffect(() => {
    console.log(clusters);
    let tempObjArray = [];
    tempObjArray = clusters.map((cluster) => ({
      x: cluster.natoms,
      y: cluster.energy,
      r: faker.datatype.number({ min: 5, max: 20 }),
    }));
    console.log(tempObjArray);
    setClusterDataSet(tempObjArray);
    setLoading(false);
  }, [clusters]);

  // const data = {
  //   datasets: [
  //     {
  //       label: "Gold Nano Clusters {project id}, {calc_id}",
  //       data: [
  //         {
  //           x: clusters.natoms,
  //           y: clusters.energy,
  //           // Cicles radios
  //           r: faker.datatype.number({ min: 5, max: 20 }),
  //         },
  //       ],
  //       // x: faker.datatype.number({ min: -100, max: 100 }),

  //       backgroundColor: "rgba(255, 99, 132, 0.5)",
  //     },
  //   ],
  // };
  ////////with axios/////////

  return (
    <div className="home">
      {!loading && (
        <Bubble
          options={options}
          data={{
            datasets: [
              {
                label: "Gold Nano Clusters {project id}, {calc_id}",
                data: clusterDataSet,
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
        />
      )}
      {loading && <></>}
    </div>
  );
}
