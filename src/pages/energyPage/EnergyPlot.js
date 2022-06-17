import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import faker from "faker";
import { Bubble } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

ChartJS.register(LinearScale, PointElement, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function EnergyPlot() {
  const [clusters, setClusters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clusterDataSet, setClusterDataSet] = useState([]);

  // GET request to get the clusters
  const getAllclusters = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/clusters`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setClusters(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllclusters();
  }, []);

  //UseEffect to map clusters and make array of needed data
  useEffect(() => {
    let tempObjArray = [];
    let tooltip = {};
    tempObjArray = clusters.map((cluster) => ({
      x: cluster.natoms,
      y: cluster.energyAtom,
      r: faker.datatype.number({ min: 5, max: 10 }),
    }));
    tooltip = clusters.map((cluster) => ({
      callbacks: {
        title: function (context) {
          return `AU${cluster.natoms}`;
        },
      },
    }));
    setClusterDataSet(tempObjArray);
    setLoading(false);
  }, [clusters]);

  return (
    <div className="home" id="main">
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
          // tooltips=TOOLTIPS,
          // title="Numbers of atoms Vs Energy", x_axis_label=('N_atoms'), y_axis_label=('Energy[eV/atom]'
        />
      )}
      {loading && <></>}
    </div>
  );
}
