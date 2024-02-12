import { createSlice } from "@reduxjs/toolkit";
import { lastSixDays } from "./habitHelper";

export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    addHabit: (state, action) => {
      const newHabit = {
        lastSixDays,
        ...action.payload,
      };
      const newState = [...state, newHabit];
      return newState;
    },
    deleteHabit: (state, action) => {
      const filteredState = state.filter((habit, i) => i != action.payload);
      return filteredState;
    },

    doneHabit: (state, action) => {
      const { id, index, done } = action.payload;
      const updatedState = state.map((habit, i) => {
        if (i == id) {
          // Use the spread operator to create a new habit object with the updated 'done' property
          return {
            ...habit,
            lastSixDays: habit.lastSixDays.map((data, j) => {
              if (j == index) {
                return { ...data, done };
              }
              return data;
            }),
          };
        }
        return habit;
      });
      return updatedState;
    },
  },
});
export const selectHabits = (state) => state.habits;
export const { addHabit, deleteHabit, doneHabit } = habitSlice.actions;

export default habitSlice.reducer;
