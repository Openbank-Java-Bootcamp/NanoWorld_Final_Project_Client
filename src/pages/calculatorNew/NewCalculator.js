// import "./newCalculator.css";

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";

function NewCalculator(props) {
  const [xc, setXc] = useState("");
  const [lreal, setLreal] = useState(false);
  const [ibrion, setIbrion] = useState(0);
  const [encut, setEncut] = useState(0);
  const [ediffg, setEdiffg] = useState(0);
  const [ispin, setIspin] = useState(0);
  const [ncore, setNcore] = useState(0);
  const [nsw, setNsw] = useState(0);
  const [command, setCommand] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  // POST request to submit New Calculator
  const handleSubmit = (e) => {
    e.preventDefault();

    const { calculatorId } = props;

    const requestBody = {
      xc,
      nsw,
      ncore,
      lreal,
      ispin,
      ibrion,
      encut,
      ediffg,
      command,
    };
    const storedToken = localStorage.getItem("authToken");

    axios
      .post(`${API_URL}/api/calculators`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setXc("");
        setLreal(false);
        setIbrion(0);
        setEncut(0);
        setEdiffg(0);
        setIspin(0);
        setNcore(0);
        setNsw(0);
        setCommand("");

        navigate("/calculators");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="formPage" id="main">
      <div className="projectTitleContainer">
        <h1 className="formTitle">New Calculator</h1>
        <Link to="/calculators">
          <button className="formButton">Back to calculators</button>
        </Link>
      </div>

      <form className="formFormat" onSubmit={handleSubmit}>
        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="https://www.vasp.at/wiki/index.php/GGA"
            >
              Xc:
            </a>
          </label>
          <input
            type="text"
            name="xc"
            value={xc}
            onChange={(e) => setXc(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="https://www.vasp.at/wiki/index.php/LREAL"
            >
              Lreal:
            </a>
          </label>
          <select
            className="formItem"
            type="text"
            name="lreal"
            value={lreal}
            onChange={(e) => setLreal(e.target.value)}
          >
            <option value={true}> Real space </option>
            <option value={false}> Reciprocal space </option>
          </select>
        </div>
        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="https://www.vasp.at/wiki/index.php/IBRION "
            >
              Ibrion:
            </a>
          </label>
          <input
            type="number"
            name="ibrion"
            value={ibrion}
            onChange={(e) => setIbrion(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="ttps://www.vasp.at/wiki/index.php/ENCUT"
            >
              Encut:
            </a>
          </label>
          <input
            type="number"
            name="encut"
            value={encut}
            onChange={(e) => setEncut(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="ttps://www.vasp.at/wiki/index.php/ENCUT"
            >
              Ediffg:
            </a>
          </label>
          <input
            type="number"
            name="ediffg"
            value={ediffg}
            onChange={(e) => setEdiffg(e.target.value)}
          />
        </div>
        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="ttps://www.vasp.at/wiki/index.php/ENCUT"
            >
              Ispin:
            </a>
          </label>
          <input
            type="number"
            name="ispin"
            value={ispin}
            onChange={(e) => setIspin(e.target.value)}
          />
        </div>

        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="ttps://www.vasp.at/wiki/index.php/ENCUT"
            >
              Ncore:
            </a>
          </label>
          <input
            type="number"
            name="ncore"
            value={ncore}
            onChange={(e) => setNcore(e.target.value)}
          />
        </div>

        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="ttps://www.vasp.at/wiki/index.php/ENCUT"
            >
              Nsw:
            </a>
          </label>
          <input
            type="number"
            name="nsw"
            value={nsw}
            onChange={(e) => setNsw(e.target.value)}
          />
        </div>

        <div className="formItem">
          <label>
            {" "}
            <a
              classname="linkTitle"
              href="ttps://www.vasp.at/wiki/index.php/ENCUT"
            >
              Command:
            </a>
          </label>
          <input
            type="text"
            name="command"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
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
