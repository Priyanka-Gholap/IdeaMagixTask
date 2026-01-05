import Sidebar from "../../components/Sidebar";
import TopHeader from "../../components/TopHeader";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
        {/* TOP HEADER */}
        <TopHeader title="Admin" />

        {/* PAGE CONTENT */}
        <div className="admin-content">
          <h2 className="page-title">Admin Dashboard</h2>

          {/* STATS */}
          <div className="stats-grid">
            <div className="stat-card blue">
              <p>Total Courses</p>
              <h2>1</h2>
            </div>

            <div className="stat-card green">
              <p>Total Instructors</p>
              <h2>5</h2>
            </div>

            <div className="stat-card orange">
              <p>Upcoming Lectures</p>
              <h2>0</h2>
            </div>

            <div className="stat-card purple">
              <p>Total Lectures</p>
              <h2>1</h2>
            </div>
          </div>

          {/* RECENT COURSES */}
          <div className="section-card">
            <h3 className="section-title">Recent Courses</h3>

            <div className="course-card">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png"
                alt="course"
              />

              <div className="course-info">
                <span className="badge">Beginner</span>
                <h4>MERN Stack</h4>
                <p>
                  Learn full stack development using MongoDB, Express, React and Node.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
