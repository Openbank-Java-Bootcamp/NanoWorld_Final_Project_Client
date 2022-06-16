import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name, role };

    axios
      // .post(`${API_URL}/api/auth/signup`, requestBody)
      .post(`${API_URL}/api/auth/signup/withRole`, requestBody)

      .then((response) => {
        navigate("/login");
        console.log(requestBody);
        console.log(role);
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formPage" id="main">
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
        <div className="formItem">
          <label></label>
          <div className="formOcupation">
            <label htmlFor="professor">Professor</label>
            <input
              type="radio"
              name="ocupattion"
              id="professor"
              value="ROLE_TEACHER"
              onChange={handleRole}
            />
            <label htmlFor="student">Student</label>
            <input
              type="radio"
              name="ocupattion"
              id="student"
              value="ROLE_STUDENT"
              onChange={handleRole}
            />
          </div>
        </div>
        <button className="formButton" type="submit">
          Sign Up
        </button>
      </form>
      <span className="space">
        <p>
          <br />
        </p>
      </span>
      <div className="formItem">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
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
