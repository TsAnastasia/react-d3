import { ClassesEnum, GTaskType, TimeScaleType } from "./types";

export const layoutTasksFunc: (props: {
  gTask: GTaskType;
  scale: TimeScaleType;
}) => void = ({ gTask, scale }) => {
  gTask
    .select("." + ClassesEnum.TASK)
    .attr("width", (t) => scale(t.finish) - scale(t.start))
    .attr("x", (t) => scale(t.start));
  // gTask.select("." + ClassesEnum.TASK_START).attr("x", (t) => xScale(t.start));
  // gTask
  //   .select("." + ClassesEnum.TASK_FINISH)
  //   .attr("x", (t) => xScale(t.finish) - TASK_EDGE_WIDTH);
  gTask.select("text").attr("x", (t) => scale(t.finish) + 2);
};
