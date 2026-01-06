import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddCourse from "./pages/Admin/AddCourse";
import AddLecture from "./pages/Admin/AddLecture";
import AssignLecture from "./pages/Admin/AssignLecture";
import CourseList from "./pages/Admin/CourseList";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ROOT FIX */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/add-course"
        element={
          <ProtectedRoute role="admin">
            <AddCourse />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/add-lecture"
        element={
          <ProtectedRoute role="admin">
            <AddLecture />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/assign-lecture"
        element={
          <ProtectedRoute role="admin">
            <AssignLecture />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/courses"
        element={
          <ProtectedRoute role="admin">
            <CourseList />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
