import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = () => {
    const user = db.users.find(
      (u: any) =>
        u.username === credentials.username && u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="signin-screen" className="signin-container">
      <h1 className="signin-title">Sign in</h1>
      <input
        type="text"
        id="username-input"
        placeholder="Username"
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="form-control mb-2"
      />
      <input
        type="password"
        id="password-input"
        placeholder="Password"
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="form-control mb-2"
      />
      <button
        onClick={handleSignin}
        id="signin-button"
        className="btn btn-primary w-100"
      >
        Sign in
      </button>
      <Link to="/Kanbas/Account/Signup" id="signup-link" className="signup-link">
        Sign up
      </Link>
    </div>
  );
}
