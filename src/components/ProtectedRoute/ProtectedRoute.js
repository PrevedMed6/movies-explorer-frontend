import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ component: Comp, ...props }) => {
  return props.loggedIn ? <Comp {...props} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
