import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import RoleBasedRoute from "../RoleBasedRoute";
export default function LessonControlButtons(
  { moduleId, openDeleteDialog}:
   { moduleId: string; openDeleteDialog: (moduleId: string) => void;}) 
  {
  return (
    <div className="float-end d-flex align-items-center">
      <RoleBasedRoute>
      <FaTrash className="text-danger me-4 mb-1" onClick={() => openDeleteDialog(moduleId)}/>
      </RoleBasedRoute>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-2 ms-3" />
    </div>
);}
