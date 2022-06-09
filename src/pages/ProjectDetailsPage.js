// src/pages/ProjectDetailsPage.js
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; 
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";

const API_URL = "http://localhost:5005"; 

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams(); 

  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getProject = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
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
    // <== ADD AN EFFECT
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

      <AddTask refreshProject={getProject} projectId={projectId} />

      {project &&
        project.tasks.map((task) => <TaskCard key={task.id} {...task} />)}

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      {/*    ADD    */}
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
