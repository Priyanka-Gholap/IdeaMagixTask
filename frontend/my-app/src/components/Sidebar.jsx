import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/admin/dashboard">Dashboard</NavLink>
      <NavLink to="/admin/add-course">Add Course</NavLink>
      <NavLink to="/admin/assign-lecture">Assign Lecture</NavLink>
      <NavLink to="/admin/instructors">All Instructors</NavLink>
      <NavLink to="/admin/lectures">All Lectures</NavLink>
    </div>
  );
};

export default Sidebar;
