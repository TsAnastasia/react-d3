import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDataTask, TaskIdType } from "../../pages/planner/libs/interfaces";
import { formatPlannerData } from "../../pages/planner/planner/libs/formatData";
import {
  IPlannerTaskGroup,
  IPlannerTasks,
} from "../../pages/planner/planner/libs/interfaces";

const initialState = {
  structure: null as IPlannerTaskGroup | null,
  tasks: {} as IPlannerTasks,
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
    updateTaskEdges: (
      state,
      action: PayloadAction<{
        type: "start" | "finish";
        value: string;
        taskId: TaskIdType;
      }>
    ) => {
      const { type, value, taskId } = action.payload;
      state.tasks[taskId][type] = value;
    },
  },
});

export const { resetState, setData, updateTaskEdges } = plannerSlice.actions;

export default plannerSlice.reducer;
