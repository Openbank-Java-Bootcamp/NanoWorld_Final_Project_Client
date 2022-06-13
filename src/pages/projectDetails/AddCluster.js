// src/components/AddCluster.js

import { useState } from "react";
import axios from "axios";
import "./projectDetails.css";

const API_URL = "http://localhost:5005";

function AddCluster(props) {
  const [formula, setFormula] = useState("");
  const [energy, setEnergy] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { projectId } = props;
    // const requestBody = { formula, natoms, energy, forces, magmon, projectId };
    const requestBody = { formula, energy, projectId };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/clusters`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setFormula("");
        setEnergy("");

        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form className="projectUpdateForm" onSubmit={handleSubmit}>
        <div className="projectUpdateLeft">
          <div className="projectUpdateItem">
            <label>Formula:</label>
            <input
              type="text"
              name="formula"
              value={formula}
              onChange={(e) => setFormula(e.target.value)}
            />
          </div>
          <div className="projectUpdateItem">
            <label>Energy:</label>
            <input
              type="number"
              name="energy"
              value={energy}
              onChange={(e) => setEnergy(e.target.value)}
            />
          </div>
          <div className="projectUpdateItem">
            <button type="submit" className="projectUpdateButton">
              Add Cluster
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddCluster;
