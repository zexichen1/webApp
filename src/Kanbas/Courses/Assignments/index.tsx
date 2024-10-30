import { FaPlus } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';
import { MdAssignment, MdDoNotDisturbAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoCaretDown } from "react-icons/io5";
import {  useParams } from "react-router";
import { useState } from "react";
import RoleBasedRoute from "../RoleBasedRoute";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { deleteAssignment } from "./reducer";
export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const assignments = useSelector((state: RootState) => state.assignments.assignments);
  
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  const confirmDeleteModule = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
      setAssignmentToDelete(null);
      setIsDeleteDialogOpen(false);
    }
  };

  const openDeleteDialog = (moduleId: string) => {
    setAssignmentToDelete(moduleId);
    setIsDeleteDialogOpen(true);
  };

  const cancelDelete = () => {
    setAssignmentToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  const handleNavigation = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
  };

    return (
      <div id="wd-assignments">
        <div id="wd-assignments-controls" className="d-flex align-items-center mb-3">
        <div className="input-group input-group-lg w-50 me-auto">
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
            aria-label="Search..."
          />
        </div>
        <RoleBasedRoute>
          <button id="wd-add-assignments-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={handleNavigation}>
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment</button>
          <button id="wd-add-assignments-btn" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>
        </RoleBasedRoute>
        </div><br />
        <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoCaretDown className="me-2" />
            ASSIGNMENTS
            <ModuleControlButtons />
            <div className="badge rounded-pill border px-3 py-2 float-end text-dark border-dark">
              40% of Total
            </div>
          </div>

          <ul className="list-group rounded-0">
          {assignments
          .filter((assignments: any) => assignments.course === cid)
          .map((assignments: any) => (
            <li className="wd-lesson list-group-item d-flex align-items-center justify-content-between  p-3 ps-1">
              <div className="d-flex align-items-center w-75">
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="fs-3" />
                  <MdAssignment className="text-success fs-3"/>
                </div>
                
                <div>
                  <RoleBasedRoute>
                    <a className="fw-bold text-dark" href={`#/Kanbas/Courses/${cid}/Assignments/${assignments._id}`}>
                    {assignments.title} </a>
                  </RoleBasedRoute>
                  {!currentUser || currentUser.role !== "FACULTY" ? (
                    <span className="fw-bold text-dark">{assignments.title}</span>
                  ) : null}
                  <br />
                    <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              
              {/* Delete Confirmation Modal */}
              {isDeleteDialogOpen && (
                <div className="modal fade show d-block" tabIndex={-1} role="dialog" aria-labelledby="deleteModalLabel" aria-hidden="true" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Confirm Delete</h5>
                        <button type="button" className="btn-close" onClick={cancelDelete} aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        Are you sure you want to delete this assignment?
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={cancelDelete}>
                          No
                        </button>
                        <button type="button" className="btn btn-danger" onClick={confirmDeleteModule}>
                          Yes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <AssignmentControlButtons moduleId={assignments._id} openDeleteDialog={openDeleteDialog}/>
            </li>
          ))}
          </ul>
        </li>
      </ul>
      </div>
    );
  }