import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useParams } from "react-router";
import * as db from "../../Database";
interface AssignmentEditorProps {
  onSave: (assignment: any) => void;
  onCancel: () => void;
}
export default function AssignmentEditor() {
  const navigate = useNavigate();
  const { cid, aid } = useParams();

  const assignments_database = db.assignments;
  const assignment = assignments_database.find(assign => assign._id === aid);

  const [name, setName] = useState(assignment?.title || "");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState<number | "">("");
  const [dueDate, setDueDate] = useState("");
  const [availableFromDate, setAvailableFromDate] = useState("");
  const [availableUntilDate, setAvailableUntilDate] = useState("");

  const handleSave = () => {
    const newAssignment = {
      _id: aid,
      name,
      description,
      points: Number(points),
      dueDate,
      availableFromDate,
      availableUntilDate,
      course: cid,
    };
    // Pass assignment data back to Assignments page
    navigate(`/Kanbas/Courses/${cid}/Assignments`, { state: { newAssignment } });
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder= {assignment?.title || ""}
        />
      </div>

      <div className="row mb-3 py-3">
        <div className="col-12">
          <div className="form-group">
        <label>Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Assignment description"
        />
      </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-points" className="form-label">Points</label>
        </div>
        <div className="col-md-8">
        <input
          type="number"
          className="form-control"
          value={points}
          onChange={(e) => setPoints(e.target.value ? Number(e.target.value) : "")}
          placeholder="Points"
        />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
        </div>
        <div className="col-md-8">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="PROJECTS">PROJECTS</option>
            <option value="EXAMS">EXAMS</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex align-items-center justify-content-end">
        <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
        </div>
        <div className="col-md-8">
          <select id="wd-display-grade-as" className="form-select">
            <option value="Percentage">Percentage</option>
            <option value="GPA">GPA</option>
          </select>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4 d-flex justify-content-end">
        <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
        </div>
        <div className="col-md-8">
          <div className="border p-3 rounded">
            <select id="wd-submission-type" className="form-select mb-2">
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <label className="form-label fw-bold py-3">Online Entry Options</label>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-website-url"/>
              <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-4 d-flex justify-content-end">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
        </div>
        <div className="col-md-8">
        <div className="border p-3 rounded mb-3">
          <div className="mb-3">
            <label className="form-label fw-bold">Assign to</label>
            <input type="text" className="form-control" value="Everyone" />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Due</label>
            <div className="input-group">
            <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <span className="input-group-text">
                <FaRegCalendarAlt />
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Available from</label>
              <div className="input-group">
              <input
                type="date"
                className="form-control"
                value={availableFromDate}
                onChange={(e) => setAvailableFromDate(e.target.value)}
              />
                <span className="input-group-text">
                  <FaRegCalendarAlt /> 
                </span>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Until</label>
              <div className="input-group">
              <input
                type="date"
                className="form-control"
                value={availableUntilDate}
                onChange={(e) => setAvailableUntilDate(e.target.value)}
              />
                <span className="input-group-text">
                  <FaRegCalendarAlt />
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end">
      <button className="btn btn-primary me-2" onClick={handleSave}>Save</button>
      <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
}

  