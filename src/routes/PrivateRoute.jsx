import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location =useLocation()

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }

  if (user) {
    return children;
  }

  //<Navigate state={location.pathname} to="/login"></Navigate>

  return <Navigate to="/login" state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
