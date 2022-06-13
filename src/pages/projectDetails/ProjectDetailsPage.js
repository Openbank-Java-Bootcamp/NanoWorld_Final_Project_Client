// src/pages/ProjectDetailsPage.js
import "./projectDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddCluster from "./AddCluster";
import EditProject from "./EditProject";
import CalculatorCard from "../../components/CalculatorCard";
import ClusterCard from "../../components/ClusterCard";
import EditProjectPage from "./EditProject";

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
    <div className="project">
      <div className="projectTitleContainer">
        <h1 className="projectTitle">Project Details</h1>

        <Link to="/projects">
          <button className="projectAddButton">Back to projects</button>
        </Link>
        {/* <Link to={`/projects/edit/${projectId}`}>
          <button className="projectAddButton">Edit Project</button>
        </Link> */}
      </div>

      <div className="projectContainer">
        <div className="projectShow">
          <div className="projectShowTop">
            {project && (
              <>
                <div className="projectShowTopTitle">
                  <span className="projectShowprojectname">{project.title}</span>
                  <span className="projectShowprojectTitle">
                    {project.description}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="projectShowBottom">
            <span className="projectShowTitle">Calculator Details</span>
            <div className="projectShowInfo">
              {project && (
                <>
                  {/* <CalculatorCard calculator={project.calculator} /> */}
                  <span className="projectShowInfoTitle">
                    <Link to={`/calculators/${project.calculator.id}`}>
                      <p>Id: {project.calculator.id}</p>
                    </Link>
                  </span>
                </>
              )}
            </div>

            <span className="projectShowTitle">Clusters Details</span>
            <div className="projectShowInfo">
              <span className="projectShowInfoTitle">
                {project &&
                  project.clusters.map((cluster) => (
                    <ClusterCard key={cluster.id} {...cluster} />
                  ))}
              </span>
            </div>
          </div>
        </div>

        <div className="projectUpdate">
          <div className="editProject">
            <span className="projectUpdateTitle">Edit Project</span>
            <EditProject refreshProject={getProject} projectId={projectId} />
          </div>
          <div className="addCluster">
            <span className="projectUpdateTitle">Add New Cluster</span>
            <AddCluster refreshProject={getProject} projectId={projectId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;