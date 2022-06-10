// src/components/SetCalculator.js

import { useState } from "react";
import axios from "axios";
import CalculatorCard from "./CalculatorCard";

const API_URL = "http://localhost:5005";

function SetCalc() {
  const [calculator, SetCalculator] = useState("Light");

  const toggleCalculator = (event) => SetCalculator(event.target.value);

  return (
    <div>
      <div className="AddTask">
        <h3>Select Calculator</h3>

        <select onChange={toggleCalculator}>
          <option value="Select a Calculator please">
            Here i have to map the calculator avalables{" "}
          </option>
          <option value="dark"> Dark </option>
        </select>
      </div>
      <div className="TaskCard card">
      <h1>{calculator}</h1>
      </div>
    </div>
  );
}

export default SetCalc;
