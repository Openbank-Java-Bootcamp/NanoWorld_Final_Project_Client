import "./calculatorList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function CalculatorListPage() {
  // UseStates and Variables
  const [isLoading, setLoading] = useState(true);
  const [calculators, setCalculators] = useState([]);
  const navigate = useNavigate();

  // GET request to get the projects
  const getAllCalculators = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/calculators`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setCalculators(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCalculators();
  }, []);

  //DELETE request to delete the project
  const deleteProject = (id) => {
    const storedToken = localStorage.getItem("authToken");
    setLoading(true);
    axios
      .delete(`${API_URL}/api/calculators/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        console.log(id);
        getAllCalculators();
        navigate("/calculators");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="listPage">
      <div className="listTitleContainer">
        <h1 className="formTitle">Calculators List</h1>
        <Link to="/calculators/newCalculator">
          <button className="goldButton">Create</button>
        </Link>
      </div>
      <div className="cardscontainer">
        {calculators.map((calculator) => (
          <div className="card" key={calculator.id}>
            <span className="cardTitle">ID: {calculator.id}</span>
            <span className="cardSubtitle">Description</span>
            <div className="cardInfo">
              <div className="cardDescription">{calculator.description}</div>
            </div>
            <Link to={`/calculators/${calculator.id}`} className="link">
              <button className="formButton"> More Info</button>
            </Link>
          </div>
        ))}
      </div>
      {/* <NewCalculator refreshCalculators={getAllCalculators} /> */}
    </div>
  );
}

export default CalculatorListPage;
