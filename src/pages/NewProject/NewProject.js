import "./newProject.css";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import SetCalculator from "../../components/SetCalc";

const API_URL = "http://localhost:5005";

function NewProject(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const navigate = useNavigate();

  // to Set Calculator
  const [calculatorId, setCalculatorId] = useState(0);
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
    const requestBody = { title, description, calculatorId };

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

        navigate("/projects"); 
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="newProject">
      <h1 className="newProjectTitle">New project</h1>

      <form className="newProjectForm" onSubmit={handleSubmit}>
        <div className="newProjectItem">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Project title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="newProjectItem">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Project description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="newProjectItem">
          <label>Select Calculator:</label>
          <select
            className="newProjectSelect"
            type="number"
            name="calculator"
            defaultValue={{ label: "Select calculator", value: "Select calculator" }}
            onChange={(e) => setCalculatorId(e.target.value)}
          >
            {calculators.map((calculator) => (
              <option key={calculator.id} value={calculator.id}>
                {calculator.command}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="newProjectButton">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewProject;
