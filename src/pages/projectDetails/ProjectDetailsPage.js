// src/pages/ProjectDetailsPage.js
import "./projectDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddCluster from "./AddCluster";
import EditProject from "./EditProject";
import CalculatorCard from "../../components/CalculatorCard";
import ClusterCard from "../../components/clusterCard/ClusterCard";
import EditProjectPage from "./EditProject";

const API_URL = "http://localhost:5005";

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();

  //GET to get project by Id
  const getProject = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className="projectList" id="main">
      <div className="projectTitleContainer">
        <h1 className="projectTitle">Project Details</h1>

        <Link to="/projects">
          <button className="formButton">Back to projects</button>
        </Link>
      </div>

      <div className="projectContainer">
        {/* Project Show Details */}
        <div className="projectShow">
          <div className="projectShowTop">
            {/* Project Show Top Details */}
            {project && (
              <>
                <div className="projectShowTopTitle">
                  <span className="projectShowprojectname">
                    {project.title}
                  </span>
                  <span className="projectShowprojectTitle">
                    Creadted by: {project.creator}
                  </span>
                  <span className="projectShowprojectTitle">
                    {project.description}
                  </span>
                </div>
              </>
            )}
          </div>
          {/* <div className="projectTitleContainer cardscontainer">
              <div className="projectShowTitle">Created by:   </div>
            </div> */}
          <hr></hr>
          {/* Project Show Bottom Details */}
          {/* Calculator Details  */}
          <div className="projectShowBottom">
            <div className="projectTitleContainer cardscontainer">
              <div className="projectShowTitle">Calculator </div>
              {project && (
                <>
                  <span className="projectShowInfo">
                    <Link to={`/calculators/${project.calculator.id}`} className="link">
                      <h1 className="sidebarListItem ">Id: {project.calculator.id}</h1>
                    </Link>
                  </span>
                </>
              )}
            </div>
            {/* Clusters Details */}
            <div className="projectTitleContainer cardscontainer">
              <span className="projectShowTitle">Clusters Details</span>
              <div className="projectShowInfo">
                <span/>
                {project &&
                  project.clusters.map((cluster) => (
                    <ClusterCard key={cluster.id} {...cluster} />
                  ))}
              </div>
            </div>
          </div>
        </div>
        {/* Project Updates */}
        <div className="projectUpdate">
          {/* Edit Project Top Details */}
          <div className="projectEditDetails">
            <span className="projectUpdateTitle">Edit Project</span>
            <EditProject refreshProject={getProject} projectId={projectId} />
          </div>
          {/* Add Cluster to projects */}
          <div className="projectAddCluster">
            <span className="projectUpdateTitle">Add New Cluster</span>
            <AddCluster refreshProject={getProject} projectId={projectId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
