import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ProjectListPage from "./pages/projectList/ProjectListPage";
import ProjectDetailsPage from "./pages/projectDetails/ProjectDetailsPage";
import SignupPage from "./pages/signUp/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import CalculatorListPage from "./pages/calculatorList/CalculatorListPage";
import CalculatorDetailsPage from "./pages/calculatorDetails/CalculatorDetailsPage";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import NewProject from "./pages/projectNew/NewProject";
import NewCalculator from "./pages/calculatorNew/NewCalculator";
import Morpho from "./pages/morphoDB/Morpho";
import EnergyPlot from "./pages/energyPage/EnergyPlot";
import ComingSoon from "./pages/comingSoon/comingSoon";
import IsProfessor from "./components/IsProfessor";
import IsLoading from "./components/IsLoading/IsLoading";

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
            path="/projects/newProject"
            element={
              <IsProfessor>
                <IsPrivate>
                  {" "}
                  <NewProject />{" "}
                </IsPrivate>
              </IsProfessor>
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

          <Route
            path="/calculators/newCalculator"
            element={
              <IsProfessor>
                <IsPrivate>
                  {" "}
                  <NewCalculator />{" "}
                </IsPrivate>
              </IsProfessor>
            }
          />

          <Route path="/energy" element={<EnergyPlot />} />
          <Route path="/energy/nanoparticles" element={<EnergyPlot />} />

          
          <Route path="/comingsoon" element={<ComingSoon />} />
          {/* <Route path="/comingsoon" element={<IsLoading />} /> */}
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
