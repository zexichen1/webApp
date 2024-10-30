import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {enrollments} from "./Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
      addEnrollment: (state, { payload: enrollments }) => {
        const newModule: any = {
          _id: Math.floor(Math.random() * 1000000),
          user: enrollments.user,
          course: enrollments.course,
        };
        state.enrollments = [...state.enrollments, newModule] as any;  
      },
      deleteEnrollment: (state, { payload: enrollments }) => {
        state.enrollments = state.enrollments.filter(
          (m: any) => !(m.user === enrollments.user && m.course === enrollments.course))
      },
    },
  });
  
  // Export actions for use in components
  export const { addEnrollment, deleteEnrollment} = enrollmentsSlice.actions;
  
  // Export the reducer to add it to the store
  export default enrollmentsSlice.reducer;