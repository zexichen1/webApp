import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControl from "./AssignmentControl";
export default function Assignments() {
    return (
      <div>
  <AssignmentControl /><br /><br /><br /><br />
  <ul id="wd-modules" className="list-group rounded-0">
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary">
      <BsGripVertical className="me-2 fs-3" />
         Assignment
      <ModuleControlButtons />
      </div>
      <ul className="wd-lessons list-group rounded-0">
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <a
              className="wd-assignment-link text-black"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - ENV + HTML
            </a>
          <LessonControlButtons />
          <div>
              Multiple Modules | Not available until May 6 at 12:00am | Due May
              13 at 11:59pm | 100 pts
            </div>
          </li>
          
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <a
              className="wd-assignment-link text-black"
              href="#/Kanbas/Courses/1234/Assignments/124"
            >
              A2 - CSS + BOOTSTRAP
            </a>
          <LessonControlButtons />
          <div>
              Multiple Modules | Not available until May 13 at 12:00am | Due May
              20 at 11:59pm | 100 pts
            </div>
          </li>
          
        <li className="wd-lesson list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" />
        <a
              className="wd-assignment-link text-black"
              href="#/Kanbas/Courses/1234/Assignments/125"
            >
              A3 - JAVASCRIPT + REACT
            </a>
          <LessonControlButtons />
          <div>
              Multiple Modules | Not available until May 20 at 12:00am | Due May
              27 at 11:59pm | 100 pts
            </div>
          </li>
        
        
      </ul>
    </li>
  </ul> </div>

    );
  }
  