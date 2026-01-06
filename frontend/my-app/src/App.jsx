import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import AddCourse from "./pages/Admin/AddCourse";
import AssignLecture from "./pages/Admin/AssignLecture";
import AllInstructors from "./pages/Admin/AllInstructors";
import AllLectures from "./pages/Admin/AllLectures";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* ADMIN ROUTES */}
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
          path="/admin/assign-lecture"
          element={
            <ProtectedRoute role="admin">
              <AssignLecture />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/instructors"
          element={
            <ProtectedRoute role="admin">
              <AllInstructors />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/lectures"
          element={
            <ProtectedRoute role="admin">
              <AllLectures />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
