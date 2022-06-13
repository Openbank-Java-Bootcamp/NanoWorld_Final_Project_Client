// src/pages/CalculatorDetailsPage.js

import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom"; 
import CalculatorCard from "../components/CalculatorCard";

const API_URL = "http://localhost:5005"; 

function CalculatorDetailsPage(props) {
  const [calculator, setCalculator] = useState(null);
  const { calculatorId } = useParams();

 
  const getCalculator = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/calculators/${calculatorId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneCalculator = response.data;
        setCalculator(oneCalculator);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCalculator();
  }, []);

  return (
    <div className="ProjectDetails">
      {calculator && (
        <>
        <h1>Calculator Details</h1>
          <CalculatorCard calculator={calculator} />
        </>
      )}

      


      <Link to="/calculators">
        <button>Back to Calculators</button>
      </Link>

      {/*    ADD    */}
      <Link to={`/calculators/edit/${calculatorId}`}>
        <button>Edit Calculator</button>
      </Link>
    </div>
  );
}

export default CalculatorDetailsPage;