import {
  IDataTask,
  IDataTaskGroup,
  IDataTaskSingle,
} from "../../libs/interfaces";
import { IPlannerTask, IPlannerTaskGroup } from "./interfaces";

const formatPlannerTask: (task: IDataTaskSingle) => IPlannerTask = (task) => ({
  ...task,
  type: "task",
  start: new Date(task.start),
  finish: new Date(task.finish),
});

const formatPlannerGroup: (
  group: IDataTaskGroup,
  tasks: IPlannerTask[]
) => IPlannerTaskGroup = (group, tasks) => {
  const tasksIds: (string | number)[] = [];

  const details: (IPlannerTask | IPlannerTaskGroup)[] = group.details.map(
    (item) => {
      if ((item as IDataTaskSingle).start) {
        const task = formatPlannerTask(item as IDataTaskSingle);
        tasks.push(task);
        tasksIds.push(task.activity_id);
        return task;
      } else {
        const foramtedGroup = formatPlannerGroup(item as IDataTaskGroup, tasks);
        tasksIds.push(...foramtedGroup.tasksIds);
        return foramtedGroup;
      }
    }
  );

  return {
    ...group,
    type: "group",
    open: false,
    details,
    tasksIds,
  };
};

export const formatPlannerData: (data: { tasks: IDataTask[] }) => {
  structure: IPlannerTaskGroup;
  tasks: IPlannerTask[];
} = ({ tasks }) => {
  const plannerTasks: IPlannerTask[] = [];
  const structure = formatPlannerGroup(
    {
      activity_id: "structure",
      activity_name: "project",
      details: tasks,
    },
    plannerTasks
  );
  structure.open = true;

  return {
    structure,
    tasks: plannerTasks,
  };
};

export const formatTaskGrouptoTask = (
  group: IPlannerTaskGroup,
  allTasks: IPlannerTask[]
): IPlannerTask => {
  const currentTasks: IPlannerTask[] = allTasks.filter((t) =>
    group.tasksIds.includes(t.activity_id)
  );

  return {
    ...group,
    type: "task",
    start: new Date(Math.min(...currentTasks.map((i) => +i.start))),
    finish: new Date(Math.max(...currentTasks.map((i) => +i.finish))),
    res_fact: {
      electrician: 0,
    },
  };
};
