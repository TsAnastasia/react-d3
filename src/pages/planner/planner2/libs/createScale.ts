import * as d3 from "d3";
import { fotmatTimeScaleTick } from "../../planner1/libs/utils";
import { CreateScaleType } from "./types";

export const creteScaleFunc: CreateScaleType = ({ container, tasks }) => {
  const { width, height } = container.getBoundingClientRect();

  const svg = d3
    .select(container)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const auxScale = d3
    .scaleTime()
    .domain([
      d3.min(tasks, (d) => d.start) || 0,
      d3.max(tasks, (d) => d.finish) || 0,
    ])
    .range([5, width - 100]);

  const scale = d3.scaleTime().range([0, width]);

  scale.domain([auxScale.invert(-5), auxScale.invert(width - 100)]);
  // draw scale
  svg
    .append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(
      d3
        .axisTop(scale)
        // TODO: auto format time Scale
        .tickFormat((d) => fotmatTimeScaleTick(d as Date, "day"))
    );

  return {
    svg,
    clean: () => {
      svg.remove();
    },
    scale,
  };
};
