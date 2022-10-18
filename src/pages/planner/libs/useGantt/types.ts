import { IPlannerTask } from "../types";

export type SVGType = d3.Selection<SVGSVGElement, unknown, null, undefined>;
export type TimeScaleType = d3.ScaleTime<number, number, never>;

export interface IRef {
  svg: SVGType;
  scale: TimeScaleType;
}

export enum ClassesEnum {
  XSCALE = "x-scale",
  CONTENT = "content",
  GRID = "grid",
  TASKS = "tasks",
}

export type CreateSvg = (props: {
  container: HTMLDivElement;
  name?: string;
}) => SVGType;

export type RedrawContent = (props: {
  width: number;
  height: number;
  tasks: IPlannerTask[];
}) => void;
