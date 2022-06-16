import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import IsLoading from "./IsLoading/IsLoading.js";
import ErrorPage from "../pages/errorPage/ErrorPage.js";
function IsProfessor({ children }) {
  const { isLoading, user } = useContext(AuthContext);

  // If the authentication is still loading
  if (isLoading) return <IsLoading />;

  if (user.role == "ROLE_TEACHER") {
    return children;
  } else {
    return <ErrorPage />;
  }
}

export default IsProfessor;
