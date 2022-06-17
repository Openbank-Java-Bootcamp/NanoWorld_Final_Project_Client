// src/components/AddCluster.js

import { useState } from "react";
import axios from "axios";
import "./projectDetails.css";

const API_URL = "http://localhost:5005";

function AddCluster(props) {
  const [formula, setFormula] = useState("");
  const [energy, setEnergy] = useState(0);
  const [natoms, setNatoms] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { projectId } = props;
    // const requestBody = { formula, natoms, energy, forces, magmon, projectId };
    const requestBody = { formula, natoms, energy, projectId };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/clusters`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setFormula("");
        setEnergy("");
        setNatoms("");
        props.refreshProject();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form className="projectUpdateForm" onSubmit={handleSubmit}>
        {/* <div className="projectUpdateLeft"> */}
        <div className="formItem">
          <label>Formula:</label>
          <input
            type="text"
            name="formula"
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>Number of Atoms:</label>
          <input
            type="number"
            name="natoms"
            value={natoms}
            onChange={(e) => setNatoms(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>Energy:</label>
          <input
            type="number"
            name="energy"
            value={energy}
            onChange={(e) => setEnergy(e.target.value)}
          />
        </div>

        <button className="formButton" type="submit">
          Add Cluster
        </button>
      </form>
    </>
  );
}

export default AddCluster;
