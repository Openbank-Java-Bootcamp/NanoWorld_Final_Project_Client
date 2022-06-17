import "./Sidebar.css";
import {
  Timeline,
  DashboardRounded,
  MenuBookRounded,
  DialpadRounded,
  AllInboxRounded,
  EventRounded,
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

          <Link to="/comingsoon" className="link">
            <li className="sidebarListItem">
              <MenuBookRounded className="sidebarIcon" />
              Articles
            </li>
          </Link>
          <Link to="/comingsoon" className="link">
            <li className="sidebarListItem">
              <EventRounded className="sidebarIcon" />
              Events
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
          <Link to="/comingSoon" className="link">
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
          <Link to="/comingSoon" className="link">
            <li className="sidebarListItem">
              <DialpadRounded className="sidebarIcon" />
              Search Calculator
            </li>
          </Link>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Energy Plots</h3>
        <ul className="sidebarList">
          <Link to="/energy" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              NanoClusters
            </li>
          </Link>
          <Link to="/energy/nanoparticles" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              NanoParticles
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
