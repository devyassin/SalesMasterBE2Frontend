import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  let token = false;
  if (token) {
    return <Navigate to="/signup" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
