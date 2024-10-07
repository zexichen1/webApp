import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-5">
      {/* Assignment Name */}
      <div className="mb-3">
        <label htmlFor="wd-name">Assignment Name</label>
        <input
          id="wd-name"
          className="form-control"
          value="A1 - ENV + HTML"
        />
      </div>

      {/* Assignment Description */}
      <div className="mb-3">
        <label htmlFor="wd-description">Description</label>
        <textarea
          id="wd-description"
          className="form-control"
          rows = {4}
        >
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Link to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
      </div>

      {/* Points, Assignment Group, Display Grade, Submission Type */}
      <div className="row mb-3">
        <div className="col-md-12 mb-3">
          <label htmlFor="wd-points">Points</label>
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={100}
          />
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="wd-assignment-group">Assignment Group</label>
          <select id="wd-assignment-group" className="form-control">
            <option>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12 mb-3">
          <label htmlFor="wd-display-grade">Display Grade as</label>
          <select id="wd-display-grade" className="form-control">
            <option>Percentage</option>
            <option>Points</option>
          </select>
        </div>
        <div className="col-md-12 mb-3">
          <label htmlFor="wd-submission-type">Submission Type</label>
          <select id="wd-submission-type" className="form-control">
            <option>Online</option>
          </select>

          {/* Checkboxes */}
          <div className="form-check mt-2">
            <input className="form-check-input" type="checkbox" id="text-entry" />
            <label className="form-check-label" htmlFor="text-entry">Text Entry</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="website-url" />
            <label className="form-check-label" htmlFor="website-url">Website URL</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="media-recordings" />
            <label className="form-check-label" htmlFor="media-recordings">Media Recordings</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="student-annotation" />
            <label className="form-check-label" htmlFor="student-annotation">Student Annotation</label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="file-uploads" />
            <label className="form-check-label" htmlFor="file-uploads">File Uploads</label>
          </div>
        </div>
      </div>

      {/* Assign To, Due Date, Available From, Until */}
      <div className="row mb-3">
        <div className="col-md-12">
          <label htmlFor="wd-assign-to">Assign To</label>
          <input id="wd-assign-to" className="form-control" value="Everyone" />
        </div>
        <div className="col-md-12">
          <label htmlFor="wd-due-date">Due</label>
          <input id="wd-due-date" type="date" className="form-control" value="2024-05-13" />
        </div>
      </div>

      <div className="row mb-1">
        <div className="col-md-12 mb-2">
          <label htmlFor="wd-available-from">Available from</label>
          <input id="wd-available-from" type="date" className="form-control" value="2024-05-06" />
        </div>
        <div className="col-md-12">
          <label htmlFor="wd-until">Until</label>
          <input id="wd-until" type="date" className="form-control" value="2024-05-20" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-primary">Save</button>
      </div>
    </div>
  );
}
