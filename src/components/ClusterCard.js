// src/components/ClusterCard.js

function ClusterCard({ formula, energy }) {
    return (
      <div className="TaskCard card">
        <h3>{formula}</h3>
        <h4>Energy:</h4>
        <p>{energy}</p>
     
      </div>
    );
  }
  
  export default ClusterCard;
  