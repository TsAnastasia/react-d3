import { IPlannerTask } from "../types";

export type SVGType = d3.Selection<SVGSVGElement, unknown, null, undefined>;

export interface IRef {
  svg: SVGType;
}

export enum ClassNames {
  XSCALE = "x-scale",
  CONTENT = "content",
  GRID = "grid",
  TASKS = "tasks",
}

export type CreateSvg = (props: {
  container: HTMLDivElement;
  name?: string;
}) => SVGType;

export type RedrawTasks = (props: {
  width: number;
  tasks: IPlannerTask[];
}) => void;
