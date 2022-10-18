import { IPlannerTask } from "../../planner1/libs/types";

export interface IRef {
  scale: TimeScaleType;
}

export type TimeScaleType = d3.ScaleTime<number, number, never>;

export type CreateTaskType = (props: {
  container: HTMLDivElement;
  task: IPlannerTask;
}) => void;

export type CreateScaleType = (props: {
  container: HTMLDivElement;
  tasks: IPlannerTask[];
}) => {
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;
  clean: () => void;
  scale: TimeScaleType;
};
