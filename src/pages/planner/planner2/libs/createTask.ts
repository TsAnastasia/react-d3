import * as d3 from "d3";
import { IPlannerTask } from "../../planner1/libs/types";
import { ClassesEnum } from "../../planner1/libs/useGantt/types";
import { TimeScaleType } from "./types";

export const creteTaskFunc: (props: {
  container: HTMLDivElement;
  scale: TimeScaleType;
  task: IPlannerTask;
}) => d3.Selection<SVGSVGElement, unknown, null, undefined> = ({
  container,
  task,
  scale,
}) => {
  const { width, height } = container.getBoundingClientRect();

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const gTask = svg
    .selectAll()
    .data([task])
    .enter()
    .append("g")
    .attr("class", (t) => `task ${t.id}`);

  gTask
    .append("rect")
    .attr("class", ClassesEnum.TASK)
    .attr("fill-opacity", 0.75)
    .attr("height", 16);

  gTask
    .append("text")
    .style("pointer-events", "none")
    .style("fill", "#000")
    .attr("font-size", 11)
    .attr("font-family", "Roboto")
    .attr("font-weight", 300)
    .attr("y", 16)
    .text((d) => d.name);

  gTask
    .select("." + ClassesEnum.TASK)
    .attr("width", (t) => scale(t.finish) - scale(t.start))
    .attr("x", (t) => scale(t.start));
  gTask.select("text").attr("x", (t) => scale(t.finish) + 2);

  return svg;
};
