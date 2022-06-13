// src/components/CalculatorCard.js

function CalculatorCard(props) {
  return (
    <div className="projectContainer">
      <div className="projectShow">
        <div className="projectShowTopTitle">
          <span className="projectShowprojectname">calculator.title</span>
          <span className="projectShowprojectTitle">
            calculator.description
          </span>
        </div>
        <div className="projectShowInfo">
          <p>Id: {props.calculator.id}</p>
        </div>
        <div className="projectShowInfo">
          <p>ediffg: {props.calculator.ediffg}</p>
        </div>
        <div className="projectShowInfo">
          <p>encut: {props.calculator.encut}</p>
        </div>
        <div className="projectShowInfo">
          <p>ispin: {props.calculator.ispin}</p>
        </div>
        <div className="projectShowInfo">
          <p>kpts: {props.calculator.kpts}</p>
        </div>
      </div>
    </div>
  );
}

export default CalculatorCard;
