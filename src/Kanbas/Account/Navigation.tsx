import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();
  const getLinkClass = (path: string) =>
    location.pathname.startsWith(path)
      ? "list-group-item active border border-0"
      : "list-group-item text-danger border border-0";
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-account-signin-link"
        className={getLinkClass("/Kanbas/Account/Signin")}> Signin </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-account-signup-link"
        className={getLinkClass("/Kanbas/Account/Signup")}> Signup </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-account-profile-link"
        className={getLinkClass("/Kanbas/Account/Profile")}> Profile </Link>
          {currentUser && currentUser.role === "ADMIN"  && (
        <Link to="/Kanbas/Account/Users" id="wd-account-user-link"
      className={getLinkClass("/Kanbas/Account/Users")}> User </Link>)}
    </div>
);}
