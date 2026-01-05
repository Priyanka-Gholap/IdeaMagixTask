import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";

import Login from "./pages/Auth/Login.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import InstructorDashboard from "./pages/Instructor/InstructorDashboard";

function App() {
  const { role } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/admin"
        element={
          role === "admin" ? <AdminDashboard /> : <Navigate to="/" />
        }
      />

      <Route
          path="/instructor"
          element={
          role === "instructor" ? <InstructorDashboard /> : <Navigate to="/" />
          }
      />

    </Routes>
  );
}

export default App;
