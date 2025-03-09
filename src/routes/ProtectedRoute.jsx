import { Navigate } from "react-router-dom";
import { useAuthStore } from "../hooks/useAuthStore";

const ProtectedRoute = ({ element }) => {
  const { user } = useAuthStore((state) => state);

  return user ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
