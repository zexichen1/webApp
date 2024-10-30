import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Assignment type
interface Assignment {
  _id: string;
  title: string;
  course: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
}

// Define the initial state for assignments
interface AssignmentsState {
  assignments: Assignment[];
}

const initialState: AssignmentsState = {
  assignments: [], // Start with an empty array
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
      addAssignment: (state, action: PayloadAction<Assignment>) => {
        state.assignments.push(action.payload);
      },
      updateAssignment: (state, action: PayloadAction<Assignment>) => {
        const index = state.assignments.findIndex(a => a._id === action.payload._id);
        if (index >= 0) {
          state.assignments[index] = action.payload;
        }
      },
      deleteAssignment: (state, action: PayloadAction<string>) => {
        state.assignments = state.assignments.filter(a => a._id !== action.payload);
      },
    },
  });
  
  // Export actions for use in components
  export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
  
  // Export the reducer to add it to the store
  export default assignmentsSlice.reducer;