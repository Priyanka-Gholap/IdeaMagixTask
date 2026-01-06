import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const TopHeader = () => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // ✅ FIX

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="top-header">
      <h2>Admin Panel</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default TopHeader;
