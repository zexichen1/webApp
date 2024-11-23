import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//import {assignments} from "../../Database";

interface Assignment {
  _id: string;
  title: string;
  courseId: string;
}
interface AssignmentsState {
  assignments: Assignment[];
}

// Initial state
const initialState: AssignmentsState = {
  assignments: []
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      setAssignments: (state, action) => {
        state.assignments = action.payload;
      },
      addAssignment: (state, { payload: assignments }) => {
        const newModule: any = {
          _id: assignments._id,
          title: assignments.title,
          course: assignments.course,
        };
        state.assignments = [...state.assignments, newModule] as any;  
      },
      updateAssignment: (state, { payload: assignments }) => {
        state.assignments = state.assignments.map((m: any) =>
          m._id === assignments._id ? assignments : m
        ) as any;
  
      },
      deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
          (m: any) => m._id !== assignmentId)
      },
    },
  });
  
  // Export actions for use in components
  export const { addAssignment, updateAssignment, deleteAssignment, setAssignments } = assignmentsSlice.actions;
  
  // Export the reducer to add it to the store
  export default assignmentsSlice.reducer;