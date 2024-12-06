import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const profile = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
  return response.data;
};
export const signup = async (user: any) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
  return response.data;
};
export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};
export const findAllUsers = async () => {
  try {
    const response = await axiosWithCredentials.get(USERS_API);
    return response.data;
  } catch (error) {
    console.error("Error in findAllUsers:", error);
    throw error;
  }
};

export const updateUser = async (user: any) => {
  const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};
export const findOtherCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/other_courses`);
  return data;
};
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};
export const enrollUserInCourse = async (userId: any, courseId: any) => {
  try {
    const response = await axios.post(`${ENROLLMENTS_API}/${userId}/${courseId}`, { userId, courseId });
    console.log("ADDED");
    if (response.status === 201) {
      const { enrollment, allEnrollments } = response.data;
    
      if (allEnrollments.some((e: { _id: any; }) => e._id === enrollment._id)) {
        console.log("Enrollment successfully added!");
      } else {
        console.error("Enrollment not found in database.");
      }
    }
    return response.data; // Return the created enrollment
  } catch (error) {
    console.error("Error enrolling user in course:", error);
    throw error;
  }
};
export const deleteEnrollment = async (userId: any, courseId: any) => {
  try {
    const response = await axios.delete(`${ENROLLMENTS_API}/${userId}/${courseId}`);

    console.log("DELETED");

    if (response.status === 200) {
      const { message, allEnrollments } = response.data;

      console.log(message); // Log success message

      // Optionally verify that the enrollment was deleted
      const isDeleted = !allEnrollments.some(
        (e: { user: any; course: any }) => e.user === userId && e.course === courseId
      );

      if (isDeleted) {
        console.log("Enrollment successfully deleted!");
      } else {
        console.error("Enrollment still exists in the database.");
      }
    }

    return response.data; // Return the updated enrollments or success message
  } catch (error) {
    console.error("Error deleting enrollment:", error);
    throw error;
  }
};
export const findUsersByRole = async (role: string) => {
  const response = await
    axios.get(`${USERS_API}?role=${role}`);
  return response.data;
};
