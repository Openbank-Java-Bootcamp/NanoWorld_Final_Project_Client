import "./Sidebar.css";
import {
  LineStyle,
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
      <div className="sidebarWrapper">
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
            <Link to="/projects" className="link">
              <li className="sidebarListItem">
                <AllInboxRounded className="sidebarIcon" />
                Projects
              </li>
            </Link>
            <Link to="/calculators" className="link">
              <li className="sidebarListItem">
                <DialpadRounded className="sidebarIcon" />
                Calculators
              </li>
            </Link>
            <Link to="/energy" className="link">
              <li className="sidebarListItem">
               
                <Timeline className="sidebarIcon" />
                Energy
              </li>
            </Link>
            <Link to="/energy" className="link">
              <li className="sidebarListItem">
                <FitnessCenterRounded className="sidebarIcon" />
                Forces
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
