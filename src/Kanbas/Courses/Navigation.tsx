import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); // 获取当前课程的 ID
  const { pathname } = useLocation(); // 获取当前路径

  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link.path}
          to={`/Kanbas/Courses/${cid}/${link.path}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link.path) ? "active text-white bg-danger" : "text-danger"
          }`}
          id={`wd-course-${link.path.toLowerCase()}-link`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
