import { BaseType } from "d3";
import { IPlannerTask } from "../types";

export type SVGType = d3.Selection<HTMLDivElement, unknown, null, undefined>;
export type GTaskType = d3.Selection<
  SVGGElement,
  IPlannerTask,
  BaseType,
  unknown
>;
export type TimeScaleType = d3.ScaleTime<number, number, never>;

export interface IRef {
  svg: SVGType;
  scale: TimeScaleType;
}

export enum ClassesEnum {
  XSCALE = "x-scale",
  CONTENT = "content",
  GRID = "grid",
  ZOOM = "zoom",

  TASKS = "tasks",
  TASK = "task-rect",
  TASK_EDGE = "task-edge",
  TASK_START = "task-start",
  TASK_FINISH = "task-finish",
}

export type CreateSvg = (props: {
  container: HTMLDivElement;
  name?: string;
}) => SVGType;

export type RedrawContent = (props: {
  width: number;
  height: number;
  tasks: IPlannerTask[];
}) => { clean: () => void };
