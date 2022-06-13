import "./Topbar.css";
import "./shineLogo.scss";
import React from "react";
import { Home, Settings } from "@material-ui/icons";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

export default function Topbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="container">
            <span className="logo" >NanoClusters</span>
            {/* <h1 className="gold-text" data-text="NanoClusters">
              <span className="gold-text__highlight" data-text="NanoClusters">
              NanoClusters
              </span>
            </h1> */}
          </div>
        </div>

        {isLoggedIn && (
          <>
            <div className="topRight">
              <Link to="/">
                <div className="topbarIconContainer">
                  <Home />
                </div>
              </Link>
              <div className="topbarIconContainer">
                <div onClick={logOutUser}>
                  <ExitToAppRoundedIcon />
                </div>
              </div>
              <img
                src="https://i.pinimg.com/originals/49/e5/66/49e5662ed44056e92920cf8d66033de5.jpg"
                alt=""
                className="topAvatar"
              />

              <span>{user && user.name}</span>
            </div>
          </>
        )}

        {!isLoggedIn && (
          <>
            <div className="topRight">
              <Link to="/signup">
                <button className="goldButton">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="goldButton">
                  <VpnKeyRoundedIcon />
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
