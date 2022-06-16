import "./Sidebar.css";
import {
  Timeline,
  DashboardRounded,
  MenuBookRounded,
  DialpadRounded,
  AllInboxRounded,
  FitnessCenterRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <ul className="sidebarList">
          <Link to="/" className="link">
            <li className="sidebarListItem active">
              <DashboardRounded className="sidebarIcon" />
              Home
            </li>
          </Link>

          <Link to="/articles" className="link">
            <li className="sidebarListItem">
              <MenuBookRounded className="sidebarIcon" />
              Articles
            </li>
          </Link>
          <Link to="/energy" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Energy Graph 
            </li>
          </Link>
          <Link to="/morpho" className="link">
            <li className="sidebarListItem">
              <FitnessCenterRounded className="sidebarIcon" />
              Forces
            </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Projects</h3>
        <ul className="sidebarList">
          <Link to="/projects" className="link">
            <li className="sidebarListItem">
              <AllInboxRounded className="sidebarIcon" />
              Projects List
            </li>
          </Link>
          <Link to="/projects/newProject" className="link">
            <li className="sidebarListItem">
              <AllInboxRounded className="sidebarIcon" />
              New Project
            </li>
          </Link>
          <Link to="/projects/1" className="link">
            <li className="sidebarListItem">
              <AllInboxRounded className="sidebarIcon" />
              Search Project
            </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Calculators</h3>
        <ul className="sidebarList">
          <Link to="/calculators" className="link">
            <li className="sidebarListItem">
              <DialpadRounded className="sidebarIcon" />
              Calculators List
            </li>
          </Link>
          <Link to="/calculators/newCalculator" className="link">
            <li className="sidebarListItem">
              <DialpadRounded className="sidebarIcon" />
              New Calculator
            </li>
          </Link>
          <Link to="/calculators/1" className="link">
            <li className="sidebarListItem">
              <DialpadRounded className="sidebarIcon" />
              Search Calculator
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
