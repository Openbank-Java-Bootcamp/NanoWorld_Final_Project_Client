// src/App.js

import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT

import Navbar from "./components/Navbar"; // <== IMPORT
import HomePage from "./pages/homePage/HomePage";
import EnergyPage from "./pages/energyPage/EnergyPage";
import ProjectListPage from "./pages/projectList/ProjectListPage";
import ProjectDetailsPage from "./pages/projectDetails/ProjectDetailsPage";
import EditProject from "./pages/projectDetails/EditProject";
import SignupPage from "./pages/signUp/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import CalculatorListPage from "./pages/CalculatorListPage";
import CalculatorDetailsPage from "./pages/CalculatorDetailsPage";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import NewProject from "./pages/newProject/NewProject";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/projects"
            element={
              <IsPrivate>
                {" "}
                <ProjectListPage />{" "}
              </IsPrivate>
            }
          />

          <Route
            path="/projects/:projectId"
            element={
              <IsPrivate>
                {" "}
                <ProjectDetailsPage />{" "}
              </IsPrivate>
            }
          />

          <Route
            path="/projects/edit/:projectId"
            element={
              <IsPrivate>
                {" "}
                <EditProject />{" "}
              </IsPrivate>
            }
          />

          <Route
            path="/projects/newProject"
            element={
              <IsPrivate>
                {" "}
                <NewProject />{" "}
              </IsPrivate>
            }
          />

          <Route
            path="/calculators"
            element={
              <IsPrivate>
                {" "}
                <CalculatorListPage />{" "}
              </IsPrivate>
            }
          />

          <Route
            path="/calculators/:calculatorId"
            element={
              <IsPrivate>
                {" "}
                <CalculatorDetailsPage />{" "}
              </IsPrivate>
            }
          />

          <Route path="/energy" element={<EnergyPage />} />

          <Route
            path="/signup"
            element={
              <IsAnon>
                {" "}
                <SignupPage />{" "}
              </IsAnon>
            }
          />
          <Route
            path="/login"
            element={
              <IsAnon>
                {" "}
                <LoginPage />{" "}
              </IsAnon>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
