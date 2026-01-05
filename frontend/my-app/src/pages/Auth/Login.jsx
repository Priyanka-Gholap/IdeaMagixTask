import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios";
import { AuthContext } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [mode, setMode] = useState("instructor-login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const res = await API.post("/auth/login", {
      email,
      password,
    });

    login(res.data.token, res.data.role);

    if (res.data.role === "admin") {
      navigate("/admin", { replace: true });
    } else if (res.data.role === "instructor") {
      navigate("/instructor", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  } catch (err) {
    alert(err.response?.data?.message || "Invalid email or password");
  }
};


  // SIGNUP (Instructor only → redirect to login)
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      alert("Signup successful. Please login to continue.");

      // reset fields
      setName("");
      setEmail("");
      setPassword("");

      // redirect to Instructor Login tab
      setMode("instructor-login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* LEFT INFO */}
        <div className="auth-info">
          <h1>Lecture Scheduling System</h1>
          <p>
            A role-based platform to manage courses, assign lectures, and prevent
            instructor schedule conflicts.
          </p>

          <ul>
            <li>Admin-controlled course & lecture scheduling</li>
            <li>Automatic lecture clash prevention</li>
            <li>Instructor lecture dashboard</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div className="auth-form">
          <div className="mode-switch">
            <button
              className={mode === "instructor-login" ? "active" : ""}
              onClick={() => setMode("instructor-login")}
            >
              Instructor Login
            </button>

            <button
              className={mode === "instructor-signup" ? "active" : ""}
              onClick={() => setMode("instructor-signup")}
            >
              Instructor Sign Up
            </button>

            <button
              className={mode === "admin-login" ? "active" : ""}
              onClick={() => setMode("admin-login")}
            >
              Admin Login
            </button>
          </div>

          {/* INSTRUCTOR LOGIN */}
          {mode === "instructor-login" && (
            <>
              <h2>Instructor Login</h2>
              <form onSubmit={handleLogin}>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="instructor@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />


                <button className="submit-btn">Login</button>
              </form>
            </>
          )}

          {/* INSTRUCTOR SIGNUP */}
          {mode === "instructor-signup" && (
            <>
              <h2>Create Instructor Account</h2>
              <form onSubmit={handleSignup}>
                <label>Full Name</label>
                <input
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <label>Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />


                <button className="submit-btn">Sign Up</button>
              </form>
            </>
          )}

          {/* ADMIN LOGIN */}
          {mode === "admin-login" && (
            <>
              <h2>Admin Login</h2>
              <form onSubmit={handleLogin}>
                <label>Admin Email</label>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />


                <button className="submit-btn">Login as Admin</button>
              </form>
            </>
          )}

          <div className="demo-box">
            <h4>Demo Credentials</h4>
            <p>
              <strong>Admin:</strong> admin@test.com / admin123
            </p>
            <p>
              <strong>Instructor:</strong> rahul@test.com / admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
