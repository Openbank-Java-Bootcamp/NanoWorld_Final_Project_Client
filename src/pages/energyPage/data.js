// //Like this for energyPlot refactor
// import faker from "faker";
// import { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const API_URL = "http://localhost:5005";

// // GET to collect cluster data to plot
// export function GetClusterData(props) {

//   const [clusters, setclusters] = useState([]);
//   const getAllclusters = () => {
//     const storedToken = localStorage.getItem("authToken");

//     // GET request to get the clusters
//     axios
//       .get(`${API_URL}/api/clusters`, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .then((response) =>

//       setclusters(response.data))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getAllclusters();
//   }, []);

  return (
    <div className="formItem">
        {clusters.map((cluster) => (
          <div>
            <h1>{cluster.formula}</h1>
            <h2>x: {cluster.natoms}, y: {cluster.energy}</h2>
            <p>{cluster.config} , {cluter.mag}, {cluster.projectId} </p>
          </div>
        ))}

    </div>
  );
}

// // export default GetClusterData;

// export const data = {
//   datasets: [
//     {
//       label: "Gold Nano Clusters {project id}, {calc_id}",
//       data: Array.from({ length: 50 }, () => ({
//         //here i have to pass clusters.natoms
//         x: faker.datatype.number({ min: -100, max: 100 }),  JHU
//          //here i have to pass clusters.energy
//         y: faker.datatype.number({ min: -100, max: 100 }),
//         // Cicles radios
//         r: faker.datatype.number({ min: 5, max: 20 }),
//       })),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

// export const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };
