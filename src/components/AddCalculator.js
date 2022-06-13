// src/components/AddTask.js

import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

function AddCalculator(props) {
  const [ediffg, setEdiffg] = useState(0);

  const handleSubmit = (e) => {
    //  <== UPDATE THE FUNCTION
    e.preventDefault();

    // We need the project id when creating the new task
    const { calculatorId } = props;
    // Create an object representing the body of the POST request
    const requestBody = { ediffg };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/calculators`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        // Reset the state to clear the inputs
        setEdiffg(0);

        // Invoke the callback function coming through the props
        // from the ProjectDetailsPage, to refresh the project details
        props.refreshCalculators();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="AddTask">
      <h3>Add New Calculator</h3>

      <form onSubmit={handleSubmit}>
      

        <label>ediffg:</label>
        <textarea
          type="number"
          name="ediffg"
          value={ediffg}
          onChange={(e) => setEdiffg(e.target.value)}
        />

        <button type="submit">Add Calculator</button>
      </form>
    </div>
  );
}

export default AddCalculator;
