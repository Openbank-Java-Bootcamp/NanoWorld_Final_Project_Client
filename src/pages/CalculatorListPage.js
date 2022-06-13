// src/pages/CalculatorListPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CalculatorCard from "../components/CalculatorCard";
import AddCalculator from "../components/AddCalculator";

const API_URL = "http://localhost:5005";

function CalculatorListPage() {
  const [calculators, setCalculators] = useState([]);

  const getAllCalculators = () => {
 
    const storedToken = localStorage.getItem("authToken");

    // GET request to get the projects
    axios
      .get(`${API_URL}/api/calculators`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setCalculators(response.data)}
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCalculators();
  }, []);

  return (
    <div className="ProjectListPage">
      <h1>Calculators List</h1>
       {calculators.map((calculator) => (
        // <CalculatorCard key={calculator.id} {...calculator} />
        <div className="TaskCard card" key={calculator.id}>
        <Link to={`/calculators/${calculator.id}`}>
         <p>Id: {calculator.id}</p>
        </Link>
      </div>
      ))}
      <AddCalculator refreshCalculators={getAllCalculators} />

     
    </div>
  );
}

export default CalculatorListPage;
