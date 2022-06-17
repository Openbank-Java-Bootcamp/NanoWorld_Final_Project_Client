// src/components/CalculatorCard.js
import "./calculatorCard.css";
function CalculatorCard(props) {
  return (
    <div className="ClusterCard">
      <h3>Calulator Id: {props.calculator.id}</h3>
      <hr></hr>
      <div className="clusterInfo">
        <h4>
          {" "}
          <a target="_blank" 
            classname="linkTitle"
            href="https://www.vasp.at/wiki/index.php/GGA"
          >
            Xc:
          </a>{" "}
          {props.calculator.xc}
        </h4>
      </div>

      <div className="clusterInfo">
        <h4>
          {" "}
          <a target="_blank"
            classname="linkTitle"
            href="https://www.vasp.at/wiki/index.php/IBRION "
          >
            Ibrion:
          </a>{" "}
          {props.calculator.ibrion}
        </h4>
      </div>

      <div className="clusterInfo">
        <h4>
          <a target="_blank"
            classname="linkTitle"
            href="ttps://www.vasp.at/wiki/index.php/ENCUT"
          >
            Nsw:
          </a>
          {props.calculator.nsw}
        </h4>
      </div>

      <div className="clusterInfo">
        <h4>
          <a target="_blank"
            classname="linkTitle"
            href="ttps://www.vasp.at/wiki/index.php/ENCUT"
          >
            Ediffg:
          </a>{" "}
          {props.calculator.ediffg}
        </h4>
      </div>

      <div className="clusterInfo">
        <h4>
          <a target="_blank"
            classname="linkTitle"
            href="ttps://www.vasp.at/wiki/index.php/ENCUT"
          >
            Encut:
          </a>{" "}
          {props.calculator.encut}
        </h4>
      </div>

      <div className="clusterInfo">
        <h4>
          <a target="_blank"
            classname="linkTitle"
            href="ttps://www.vasp.at/wiki/index.php/ENCUT"
          >
            Ispin:
          </a>
          {props.calculator.ispin}
        </h4>
      </div>

      <div className="clusterInfo">
        <h4>
          <a target="_blank"
            classname="linkTitle"
            href="ttps://www.vasp.at/wiki/index.php/ENCUT"
          >
            Command:
          </a>
          {props.calculator.command}
        </h4>
      </div>

  
    </div>
  );
}

export default CalculatorCard;
