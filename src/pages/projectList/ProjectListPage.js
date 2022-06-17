import "./projectList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import IsLoading from "../../components/IsLoading/IsLoading";

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

        getAllProjects();
        navigate("/projects");
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 10,
      cellClassName: "projectListBody",
      headerClassName: "projectListHeader",
    },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      cellClassName: "projectListBody Vip",
      headerClassName: "projectListHeader",
    },
    {
      field: "creator",
      headerName: "Creator",
      width: 200,
      cellClassName: "projectListBody Vip",
      headerClassName: "projectListHeader",
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
      cellClassName: "projectListBody",
      headerClassName: "projectListHeader",
    },
    {
      field: "  ",
      headerName: "  ",
      width: 100,
      headerClassName: "projectListHeader",
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
      headerClassName: "projectListHeader",
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
    <div className="projectList" id="main">
      {isLoading && (
        <>
          <p>
            <IsLoading /> 
          </p>
        </>
      )}
      {!isLoading && (
        <>
          <div className="projectTitleContainer">
            <h1 className="projectTitle">Project Details</h1>

            <Link to="/projects/newProject">
              <button className="goldButton">Create</button>
            </Link>
          </div>
          <div className="dataGrid">
            <DataGrid
              rows={projects}
              disableSelectionOnClick
              columns={columns}
              autoHeight 
              getEstimatedRowHeight={() => 200}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectListPage;
