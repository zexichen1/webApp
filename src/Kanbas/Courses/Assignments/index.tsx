import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControl from "./AssignmentControl";
import { useParams } from "react-router";  // 使用 useParams 钩子获取课程ID
import * as db from "../../Database";  // 导入数据库

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>(); // 从 URL 中获取 cid
  const assignments = db.assignments.filter(assignment => assignment.course === cid); // 根据 cid 过滤作业

  // 如果没有作业匹配当前课程
  if (assignments.length === 0) {
    return <div>No assignments available for this course.</div>;
  }

  return (
    <div>
      <AssignmentControl /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Assignments for Course: {cid}
            <ModuleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment) => (
              <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <a
                  className="wd-assignment-link text-black"
                  href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                >
                  {assignment.title}
                </a>
                <LessonControlButtons />
                <div>
                  Course: {assignment.course}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
