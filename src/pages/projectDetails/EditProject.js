// src/pages/EditProject.js

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./projectDetails.css";

const API_URL = "http://localhost:5005";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    // GET request to get the project by id
    axios
      .get(`${API_URL}/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);

        props.refreshProject();
      })
      .catch((error) => console.log(error));
  }, [projectId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    const requestBody = { title, description };

    //PUT request to update the project
    axios
      .put(`${API_URL}/api/projects/${projectId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate("/projects/" + projectId);
      });
  };

 
  return (
    <>
      <form className="projectUpdateForm" onSubmit={handleFormSubmit}>
        <div className="projectUpdateLeft">
          <div className="projectUpdateItem">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="projectUpdateItem">
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />{" "}
          </div>
          <div className="projectUpdateItem">
            <button type="submit" className="projectUpdateButton">
              Update Project
            </button>
          </div>
          {/* <div className="projectUpdateItem">
            <button onClick={deleteProject} className="projectUpdateButton">
              Delete Project
            </button>
          </div> */}
        </div>
      </form>
    </>
  );
}

export default EditProjectPage;