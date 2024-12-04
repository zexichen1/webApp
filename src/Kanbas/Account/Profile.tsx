import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profileData, setProfileData] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const initializeProfile = () => {
    if (!currentUser) return navigate("/Kanbas/Account/Signin");
    setProfileData(currentUser);
  };

  const handleSignout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kanbas/Account/Signin");
  };

  useEffect(() => {
    initializeProfile();
  }, []);

  return (
    <div className="profile-container">
      <h3>Profile</h3>
      {profileData && (
        <div>
          <input
            defaultValue={profileData.username}
            id="username-input"
            className="form-control mb-2"
            onChange={(e) => setProfileData({ ...profileData, username: e.target.value })}
          />
          <input
            defaultValue={profileData.password}
            id="password-input"
            className="form-control mb-2"
            onChange={(e) => setProfileData({ ...profileData, password: e.target.value })}
          />
          <input
            defaultValue={profileData.firstName}
            id="firstname-input"
            className="form-control mb-2"
            onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
          />
          <input
            defaultValue={profileData.lastName}
            id="lastname-input"
            className="form-control mb-2"
            onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
          />
          <input
            defaultValue={profileData.dob}
            id="dob-input"
            className="form-control mb-2"
            onChange={(e) => setProfileData({ ...profileData, dob: e.target.value })}
            type="date"
          />
          <input
            defaultValue={profileData.email}
            id="email-input"
            className="form-control mb-2"
            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
          />
          <select
            defaultValue={profileData.role}
            onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
            className="form-control mb-2"
            id="role-select"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            onClick={handleSignout}
            className="btn btn-danger w-100 mb-2"
            id="signout-button"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
