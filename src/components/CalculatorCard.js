// src/components/CalculatorCard.js

function CalculatorCard(props) {
    return (
      <div className="TaskCard card">

        <p>Id: {props.calculator.id}</p>
        <p>ediffg: {props.calculator.ediffg}</p>
        <p>encut: {props.calculator.encut}</p>
        <p>ispin: {props.calculator.ispin}</p>
        <p>kpts: {props.calculator.kpts}</p>
        
      </div>
    );
  }
  
  export default CalculatorCard;
  