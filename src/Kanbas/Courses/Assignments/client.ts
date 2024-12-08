import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export interface Assignment {
  _id: string;
  title?: string;
  description?: string;
  dueDate?: string;
  points?: number;
  [key: string]: any;
}

export const deleteAssignment = async (assignmentId: string): Promise<any> => {
  try {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAssignment = async (assignment: Assignment): Promise<any> => {
  try {
    const { data } = await axios.put(
      `${ASSIGNMENTS_API}/${assignment._id}`,
      assignment
    );
    return data;
  } catch (error) {
    throw error;
  }
};
