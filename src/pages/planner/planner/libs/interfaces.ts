import { TaskIdType } from "../../libs/interfaces";

export interface IPlannerTaskBase {
  activity_id: TaskIdType;
  activity_name: string;
  type: "task" | "group";
}

export interface IPlannerTask extends IPlannerTaskBase {
  type: "task";
  start: string;
  finish: string;
  res_fact: {
    electrician: number;
  };
}

export type IPlannerTasks = { [key: TaskIdType]: IPlannerTask };

export interface IPlannerTaskGroup extends IPlannerTaskBase {
  type: "group";
  open: boolean;
  details: (TaskIdType | IPlannerTaskGroup)[];
  tasksIds: TaskIdType[];
}
