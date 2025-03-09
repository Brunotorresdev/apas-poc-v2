import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./modules/Login/Login";

import Home from "./modules/Home/Home";
import ProtectedRoute from "./routes/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
