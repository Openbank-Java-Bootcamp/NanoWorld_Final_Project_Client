import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/api/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formPage"  id="main">
      <h1 className="formTitle">Log In</h1>
      <form className="formFormat" onSubmit={handleLoginSubmit}>
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
        <button className="formButton" type="submit">
          Login
        </button>
      </form>
      <span className="space">
        <p>
          <br />
        </p>
      </span>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="signUpLoginItem">
        Don't have an account yet?
        <br />
        <Link to={"/signup"} className="link2">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
