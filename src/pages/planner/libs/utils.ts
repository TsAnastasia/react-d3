import { IData, IPlannerLink, IPlannerTask } from "./types";

export const createId = () => Math.random().toString(16).slice(-8);

export const formatPlannerData: (data: IData) => {
  tasks: IPlannerTask[];
  links: IPlannerLink[];
} = ({ tasks, links }) => {
  const plannerTasks: IPlannerTask[] = tasks.map((item) => ({
    ...item,
    start: new Date(item.start),
    finish: new Date(item.finish),
  }));

  const plannerLinks: IPlannerLink[] = [];
  links.forEach((l) => {
    const source = plannerTasks.find((t) => t.id === l.source);
    const target = plannerTasks.find((t) => t.id === l.target);
    if (source && target)
      plannerLinks.push({ id: createId(), type: l.type, source, target });
  });

  return { tasks: plannerTasks, links: plannerLinks };
};

export const formatDateForInput = (date: Date) =>
  Intl.DateTimeFormat("ru").format(date).split(".").reverse().join("-");
