// src/components/SetCalculator.js

import { useState, useEffect } from "react";
import axios from "axios";
import CalculatorCard from "./CalculatorCard";

const API_URL = "http://localhost:5005";

function SetCalc() {
  const [calculator, SetCalculator] = useState("Light");
  const [calculators, setCalculators] = useState([]);
  const toggleCalculator = (event) => SetCalculator(event.target.value);

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

  return (
    <div>
      <select onChange={toggleCalculator}>
        <option value="Select a Calculator please">
          Here i have to map the calculator avalables{" "}
        </option>
        {calculators.map((calculator) => (
          <option value={calculator.id}> {calculator.command} </option>
        ))}
      </select>
    </div>
  );
}

export default SetCalc;
