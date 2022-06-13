// import "./newCalculator.css";

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function NewCalculator(props) {
  const [ediffg, setEdiffg] = useState(0);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  // POST request to submit New Calculator
  const handleSubmit = (e) => {
    e.preventDefault();

    const { calculatorId } = props;

    const requestBody = { ediffg };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/calculators`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setEdiffg(0);

        navigate("/calculators");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formPage">
      <h1 className="formTitle">New Calculator</h1>

      <form className="formFormat" onSubmit={handleSubmit}>
        <div className="formItem">
          <label>ediffg:</label>
          <textarea
            type="number"
            name="ediffg"
            value={ediffg}
            onChange={(e) => setEdiffg(e.target.value)}
          />
        </div>
        <button type="submit" className="formButton">
          Submit
        </button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default NewCalculator;
