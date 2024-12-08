import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const location = useLocation();

  const links = [
    { path: "/Kanbas/Account/Signin", label: "Signin", condition: !currentUser },
    { path: "/Kanbas/Account/Signup", label: "Signup", condition: !currentUser },
    { path: "/Kanbas/Account/Profile", label: "Profile", condition: currentUser },
    { 
      path: "/Kanbas/Account/Users", 
      label: "User", 
      condition: currentUser && currentUser.role === "ADMIN" 
    },
  ];

  const getLinkClass = (path: string) =>
    location.pathname.startsWith(path)
      ? "list-group-item active border border-0"
      : "list-group-item text-danger border border-0";

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links
        .filter((link) => link.condition)
        .map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            id={`wd-account-${label.toLowerCase()}-link`}
            className={getLinkClass(path)}
          >
            {label}
          </Link>
        ))}
    </div>
  );
}
