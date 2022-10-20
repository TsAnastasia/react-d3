import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataTask } from "../../pages/planner/libs/interfaces";
import { formatPlannerData } from "../../pages/planner/planner/libs/formatData";
import {
  IPlannerTask,
  IPlannerTaskGroup,
} from "../../pages/planner/planner/libs/interfaces";

const initialState = {
  structure: null as IPlannerTaskGroup | null,
  tasks: [] as IPlannerTask[],
};

export const plannerSlice = createSlice({
  name: "planner",
  initialState,
  reducers: {
    resetState: () => initialState,
    setData: (state, action: PayloadAction<{ tasks: IDataTask[] }>) => {
      const { tasks, structure } = formatPlannerData(action.payload);
      state.structure = structure;
      state.tasks = tasks;
    },
  },
});

export const { resetState, setData } = plannerSlice.actions;

export default plannerSlice.reducer;
