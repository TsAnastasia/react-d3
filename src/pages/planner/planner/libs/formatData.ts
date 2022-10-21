import {
  IDataTask,
  IDataTaskGroup,
  IDataTaskSingle,
  TaskIdType,
} from "../../libs/interfaces";
import { IPlannerTask, IPlannerTaskGroup, IPlannerTasks } from "./interfaces";

const formatPlannerTask: (task: IDataTaskSingle) => IPlannerTask = (task) => ({
  ...task,
  type: "task",
  // start: new Date(task.start),
  // finish: new Date(task.finish),
});

const formatPlannerGroup: (
  group: IDataTaskGroup,
  tasks: IPlannerTasks
) => IPlannerTaskGroup = (group, tasks) => {
  const tasksIds: TaskIdType[] = [];

  const details: (TaskIdType | IPlannerTaskGroup)[] = group.details.map(
    (item) => {
      if ((item as IDataTaskSingle).start) {
        const task = formatPlannerTask(item as IDataTaskSingle);
        // tasks.push(task);
        tasks[task.activity_id] = task;
        tasksIds.push(task.activity_id);
        return task.activity_id;
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
    open: true,
    details,
    tasksIds,
  };
};

export const formatPlannerData: (data: { tasks: IDataTask[] }) => {
  structure: IPlannerTaskGroup;
  tasks: IPlannerTasks;
} = ({ tasks }) => {
  const plannerTasks: IPlannerTasks = {};
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
  allTasks: IPlannerTasks
): IPlannerTask => {
  // const currentTasks: IPlannerTask[] = allTasks.filter((t) =>
  //   group.tasksIds.includes(t.activity_id)
  // );
  // console.log("all task", allTasks.length);
  // const currentTasks = group.tasks;
  const currentTasks: IPlannerTask[] = group.tasksIds.map((i) => allTasks[i]);

  return {
    ...group,
    type: "task",
    start: new Date(
      Math.min(...currentTasks.map((i) => Number(new Date(i.start))))
    ).toISOString(),
    finish: new Date(
      Math.max(...currentTasks.map((i) => Number(new Date(i.finish))))
    ).toISOString(),
    res_fact: {
      electrician: currentTasks.reduce(
        (sum, task) => sum + task.res_fact.electrician,
        0
      ),
    },
  };
};
