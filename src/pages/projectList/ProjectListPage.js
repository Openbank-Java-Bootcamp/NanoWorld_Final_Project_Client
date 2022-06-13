// src/pages/ProjectListPage.js
import "./projectList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import AddProject from "../../components/AddProject";
import ProjectCard from "../../components/ProjectCard";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const getAllProjects = () => {
    const storedToken = localStorage.getItem("authToken");

    // GET request to get the projects
    axios
      .get(`${API_URL}/api/projects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  //DELETE request to delete the project
  const deleteProject = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      // .delete(`${API_URL}/api/projects/${projectId}`, {
      .delete(`${API_URL}/api/projects/${projects.row.id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };

  // COLUMNAS    // ///////////////////////////////////////////////////////
  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 140 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "description", headerName: "Description", width: 400 },
    {
      field: "  ",
      headerName: "  ",
      width: 100,
      renderCell: (projects) => {
        return (
          <>
            <Link to={"/projects/" + projects.row.id}>
              <button className="projectListEdit">See More</button>
            </Link>
          </>
        );
      },
    },
    {
      field: "    ",
      headerName: "    ",
      width: 20,
      renderCell: (projects) => {
        return (
          <>
            <DeleteOutline
              className="projectListDelete"
              // onClick={() => handleDelete(projects.row.id)}
              onClick={deleteProject}
            />
          </>
        );
      },
    },
  ];

  // ///////////////////////////////////////////////////////

  return (
    <div className="projectList">
      {/* {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
      <AddProject refreshProjects={getAllProjects} />
 */}
      <div className="projectTitleContainer">
        <h1 className="projectTitle">Project Details</h1>

        <Link to="/newproject">
          <button className="projectAddButton">Create</button>
        </Link>
      </div>

      <DataGrid
        rows={projects}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

export default ProjectListPage;
