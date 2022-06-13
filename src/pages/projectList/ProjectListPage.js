import "./projectList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
   // UseStates and Variables
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  // GET request to get the projects
  const getAllProjects = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/projects`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  //DELETE request to delete the project
  const deleteProject = (id) => {
    const storedToken = localStorage.getItem("authToken");
    setLoading(true);
    axios
      .delete(`${API_URL}/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        console.log(id);
        getAllProjects();
        navigate("/projects");
      })
      .catch((err) => console.log(err));
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
              //onClick={() => handleDelete(projects.row.id)}
              onClick={() => deleteProject(projects.row.id)}
            />
          </>
        );
      },
    },
  ];

  // ///////////////////////////////////////////////////////

  return (
    <div className="projectList">
      <div className="projectTitleContainer">
        <h1 className="projectTitle">Project Details</h1>

        <Link to="/projects/newProject">
          <button className="projectAddButton">Create</button>
          {/* <AddProject refreshProjects={getAllProjects} /> */}
        </Link>
      </div>
      {isLoading && <p>Is loading</p>}
      {!isLoading && (
        <DataGrid
          rows={projects}
          disableSelectionOnClick
          columns={columns}
          checkboxSelection
        />
      )}
    </div>
  );
}

export default ProjectListPage;
