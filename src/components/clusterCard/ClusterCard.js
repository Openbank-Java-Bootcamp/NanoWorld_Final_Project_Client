import "./clusterCard.css";
function ClusterCard({ formula, energy, mag, config }) {
  return (
    <div className="ClusterCard">
      <h3>{formula}</h3>
      <hr></hr>
      <div className="clusterInfo">
        <h4>Energy:</h4>
        <p>{energy}</p>
      </div>
      <div className="clusterInfo">
        <h4>Magnetization:</h4>
        <p>{mag}</p>
      </div>
      {/* {!{ config } ? (
        <hr/>
      ) : (
        <div className="clusterInfo">
          <h4>Config:</h4>
          <p>{config}</p>
        </div>
      )} */}
    </div>
  );
}

export default ClusterCard;
