// src/pages/CalculatorDetailsPage.js
import "./calculatorDetails.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CalculatorCard from "../../components/CalculatorCard";

const API_URL = "http://localhost:5005";

function CalculatorDetailsPage(props) {
  const [calculator, setCalculator] = useState(null);
  const { calculatorId } = useParams();

  //GET to get calculator by Id
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
    <div className="project">
      <div className="projectTitleContainer">
        <h1 className="formTitle">Calculator Details</h1>

        <Link to="/calculators">
          <button className="formButton">Back to Calculators</button>
        </Link>
      </div>
      <div className="projectShow">
        <div className="projectShowTop">
          {/* Project Show Top Details */}
          {calculator && (
            <>
              <div className="projectShowTopTitle">
                <span className="projectShowprojectname">
                  {calculator.title}
                </span>
                <span className="projectShowprojectTitle">
                  {calculator.description}
                </span>
              </div>
            </>
          )}
        </div>
        <div className="projectShowBottom">
          <div className="projectShowInfo">
            {/* Project Show Top Details */}
            {calculator && (
              <>
                <CalculatorCard calculator={calculator} />
              </>
            )}
          </div>
          {/* Clusters Details */}
        </div>
      </div>

      {/* ADD   
      <Link to={`/calculators/edit/${calculatorId}`}>
        <button>Edit Calculator</button>
      </Link> */}
    </div>
  );
}

export default CalculatorDetailsPage;
