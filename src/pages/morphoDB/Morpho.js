import "./morpho.css";
import nanoparticleJSON from "../../data/morpho.json";
import { useState } from "react";

function Morpho() {
  const [nanoparticles, setNanoparticles] = useState(
     //nanoparticleJSON.slice(0, 5)
    );
  const [remainingNanoparticles, setRemainingNanoparticles] = useState(
    // nanoparticleJSON.slice(5, nanoparticleJSON.length)
  );

  function addRandomNanoparticles() {
    // make a copy of the remaining contacts
    const updateRemaining = [...remainingNanoparticles];

    let randomNum = Math.floor(Math.random() * remainingNanoparticles.length);
    // remove a random element from the copy
    let randomNanoparticle = updateRemaining.splice(randomNum, 1)[0];
    // add that contact to a new array
    const updatedNanoparticles = [...nanoparticles, randomNanoparticle];
    // update the contacts and the remaining contacts with the corresponding arrays
    setNanoparticles(updatedNanoparticles);
    setRemainingNanoparticles(updateRemaining);
  }

  return (
    <div className="App">
      <h1>Gold Nanoparticles Morphologies</h1>
      <button onClick={() => addRandomNanoparticles()}>
        Add Random Nanoparticle
      </button>
      <table>
        <thead>
          <tr>
            <th>IMG</th>
            <th>DOI</th>
            <th>Main class</th>
          </tr>
        </thead>
        <tbody>
          {nanoparticles?.map((nanoparticle, j) => {
            // return (
                nanoparticle?.map((eachNanoparticle, i)=>{
                    <tr key={i}>
                    <td>
                      <img
                        src={eachNanoparticle.Composite_Figure_URL}
                        className="contact-picture"
                        alt="contact profile"
                      />
                    </td>
                    <td>{eachNanoparticle.DOI}</td>
                    <td>{eachNanoparticle.Main_class}</td>
                    
                  </tr>
                })
             
            // );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Morpho;
