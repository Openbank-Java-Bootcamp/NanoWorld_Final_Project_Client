// // src/components/AddProject.js

import { useState, useEffect } from "react";
import axios from "axios";

import SetCalculator from "../components/SetCalc";

const API_URL = "http://localhost:5005";

function AddProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [calculatorId, setCalculatorId] = useState(0);

  /////////
  const [calculators, setCalculators] = useState([]);
  const getAllCalculators = () => {
    const storedToken = localStorage.getItem("authToken");

    // GET request to get the projects
    axios
      .get(`${API_URL}/api/calculators`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setCalculators(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCalculators();
  }, []);


  // const calcs = calculators.map((calculator) => ({ label : calculator.comm, value : calculator.id}))
  /////////

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, calculatorId};

    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios
      .post(`${API_URL}/api/projects`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setTitle("");
        setDescription("");
        setCalculatorId(0);
        props.refreshProjects();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}>
        {" "}
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Select Calculator:</label>
        {/* <SetCalc /> */}
        <select type="number" name="calculator"
          onChange={(e) => setCalculatorId(e.target.value)} >
            
          {calculators.map((calculator) => ( 
            <option key={calculator.id} value={calculator.id}> {calculator.id} </option>
          ))}
         
          </select>
       
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
