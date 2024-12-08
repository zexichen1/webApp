import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Dashboard");
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        value={credentials.username || ""}
        onChange={(e) => handleInputChange("username", e.target.value)}
        className="form-control mb-2"
        placeholder="Username"
        id="wd-username"
      />
      <input
        value={credentials.password || ""}
        onChange={(e) => handleInputChange("password", e.target.value)}
        className="form-control mb-2"
        placeholder="Password"
        type="password"
        id="wd-password"
      />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
        Sign in
      </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
