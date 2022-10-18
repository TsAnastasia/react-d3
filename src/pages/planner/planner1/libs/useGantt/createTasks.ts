import { IPlannerTask } from "../types";
import { ClassesEnum, GTaskType, SVGType } from "./types";

export const createTaksFunc: (props: {
  svg: SVGType;
  tasks: IPlannerTask[];
}) => { gTask: GTaskType } = ({ svg, tasks }) => {
  const gTask = svg
    .select<SVGGElement>("." + ClassesEnum.TASKS)
    .selectAll()
    .data(tasks)
    .enter()
    .append("g")
    .attr("class", (t) => `task ${t.id}`);

  gTask
    .append("rect")
    .attr("class", ClassesEnum.TASK)
    .attr("fill-opacity", 0.75)
    .attr("height", 16)
    .attr("y", (t) => t.top + 7);
  // .attr("stroke", (t) => colorsScale(t.group))
  // .style("cursor", "grab");

  gTask
    .append("text")
    .style("pointer-events", "none")
    .style("fill", "#000")
    .attr("font-size", 11)
    .attr("font-family", "Roboto")
    .attr("font-weight", 300)
    .text((d) => d.name)
    .attr("y", (t) => t.top + 19);

  return { gTask };
};
