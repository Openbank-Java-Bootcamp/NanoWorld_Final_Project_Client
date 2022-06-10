// src/pages/ProjectDetailsPage.js
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddCluster from "../components/AddCluster";
import CalculatorCard from "../components/CalculatorCard";
import ClusterCard from "../components/ClusterCard";
import SetCalculator from "../components/SetCalc";

const API_URL = "http://localhost:5005";

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  const getProject = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProject = response.data;
        console.log(oneProject);
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}

      <h1>Calculator:</h1>
      {/* <SetCalculator/> */}
     
      {project && (
        <>
          <CalculatorCard calculator={project.calculator}/>
        </>
      )}


      {/* NO TOCAR ESTA BIEN */}
      <h1>Clusters:</h1>
      <AddCluster refreshProject={getProject} projectId={projectId} />

      {project &&
        project.clusters.map((cluster) => (
          <ClusterCard key={cluster.id} {...cluster} />
        ))}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
