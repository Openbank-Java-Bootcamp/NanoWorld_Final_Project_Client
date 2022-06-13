import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${API_URL}/api/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formPage">
      <h1 className="formTitle">Sign Up</h1>

      <form className="formFormat" onSubmit={handleSignupSubmit}>
        <div className="formItem">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="formItem">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="formItem">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleName} />
        </div>
        <button className="formButton" type="submit">
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="signUpLoginItem">
        Already have account?
        <br />
        <Link to={"/login"} className="link2">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;