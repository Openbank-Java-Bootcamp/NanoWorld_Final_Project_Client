import "./Topbar.css";
import "./shineLogo.scss";
import React from "react";
import { Home, Settings } from "@material-ui/icons";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
// import avatar from "../../assets/java_error_in_idea_1214.gif"
import avatar from "../../assets/nanoparticle.gif";

export default function Topbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" className="link">
            <div>
              <span className="logo ">NanoWorld</span>
              {/* <h1 className="gold-text" data-text="NanoClusters">
              <span className="gold-text__highlight" data-text="NanoClusters">
                NanoClusters
              </span>
            </h1> */}
            </div>
          </Link>
        </div>

        {isLoggedIn && (
          <>
            <div className="topRight  geek">
              <img
                src="https://i.pinimg.com/originals/49/e5/66/49e5662ed44056e92920cf8d66033de5.jpg"
                alt=""
                className="topAvatar"
              />
              {/* <img src={avatar} alt="" className="topAvatar" /> */}
              <div className="topbarIconContainer">
                <div onClick={logOutUser} className="goldButton">
                  <ExitToAppRoundedIcon />
                </div>
              </div>
              <div className="logo username">
                <p>
                  {" "}
                  Hello <br /> {user && user.name}
                </p>
              </div>
            </div>
          </>
        )}

        {!isLoggedIn && (
          <>
            <div className="topRight">
              <div className="topbarIconContainer">
                <Link to="/signup">
                  <button className="goldButton">Sign Up</button>
                </Link>
              </div>
              <div className="topbarIconContainer">
                <Link to="/login">
                  <button className="goldButton">
                    <VpnKeyRoundedIcon />
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
