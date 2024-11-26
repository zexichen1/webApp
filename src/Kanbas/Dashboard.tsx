import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import RoleBasedRoute from "./Courses/RoleBasedRoute";
import {addEnrollment, deleteEnrollment} from "./reducer"
import * as userClient from "./Account/client";

export default function Dashboard({
  initialCourses,
  initialOtherCourses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  initialCourses: any[];
  initialOtherCourses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  // Local state for courses
  const [courses, setCourses] = useState(initialCourses);
  const [otherCourses, setOtherCourses] = useState(initialOtherCourses);
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Add enrollment for a course
  const addEnrollmentForCourse = async (course: any) => {
    try {
      // Enroll user in course
      await userClient.enrollUserInCourse(currentUser._id, course._id);

      // Update local courses state
      setCourses((prevCourses) => [...prevCourses, course]);
      setOtherCourses((prevOtherCourses) =>
        prevOtherCourses.filter((c) => c._id !== course._id)
      );
    } catch (error) {
      console.error("Failed to enroll user in course:", error);
    }
  };
  const deleteEnrollmentForCourse = async (course: any) => {
    try {
      // Delete enrollment for the current user and the selected course
      await userClient.deleteEnrollment(currentUser._id, course._id);
  
      // Update local courses state
      setCourses((prevCourses) =>
        prevCourses.filter((c) => c._id !== course._id)
      );
      setOtherCourses((prevOtherCourses) => [...prevOtherCourses, course]);
    } catch (error) {
      console.error("Failed to delete enrollment for course:", error);
    }
  };
  // Effect to sync courses with Redux state when enrollments change
  useEffect(() => {
    const enrolledCourseIds = enrollments.map((enrollment: any) => enrollment.course);
    setCourses(initialCourses);
    setOtherCourses(initialOtherCourses);
  }, [enrollments, initialCourses]);
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <RoleBasedRoute>
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={(event) => {
                    event.preventDefault();
                    addNewCourse();
                    dispatch(addEnrollment({user: currentUser._id, course: course._id}));
                  }} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={updateCourse} id="wd-update-course-click">
          Update
        </button>
      </h5><br />
      
      <input defaultValue={course.name} className="form-control mb-2" 
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <textarea defaultValue={course.description} className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      </RoleBasedRoute>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      {currentUser?.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      )}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        {!showAllCourses && courses
          .map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title fw-bold text-primary">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button className="btn btn-primary"> Go </button>
                    <RoleBasedRoute>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                    </button>
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                    </RoleBasedRoute>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        {showAllCourses && courses
          .map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <div
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title fw-bold text-primary">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteEnrollmentForCourse(course);
                    }} className="btn btn-danger"
                    id="wd-uneroll-course-click">
                    Unenroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {showAllCourses && 
          otherCourses
          .map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <div
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title fw-bold text-primary">
                      {course.name} </h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description} </p>
                    <button onClick={(event) => {
                      event.preventDefault();
                      addEnrollmentForCourse(course);
                    }} className="btn btn-success"
                    id="wd-eroll-course-click">
                    Enroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
);}
