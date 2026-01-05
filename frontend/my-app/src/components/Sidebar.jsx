import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>

      <nav>
        <NavLink to="/admin" end>
          Dashboard
        </NavLink>

        <NavLink to="/admin/add-course">
          Add Course
        </NavLink>

        <NavLink to="/admin/assign-lecture">
          Assign Lecture
        </NavLink>

        <NavLink to="/admin/instructors">
          Instructors
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
