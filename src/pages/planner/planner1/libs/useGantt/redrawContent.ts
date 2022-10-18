import * as d3 from "d3";

import { GRID_COLOR, GRID_LINE_WIDTH, HEAD_HEIGHT } from "../constants";
import { IPlannerTask } from "../types";
import { fotmatTimeScaleTick } from "../utils";
import { createTaksFunc } from "./createTasks";
import { layoutTasksFunc } from "./layoutTasks";
import { ClassesEnum, RedrawContent, SVGType, TimeScaleType } from "./types";

export const redrawContentFunc: (
  props: Parameters<RedrawContent>[0] & {
    svg: SVGType;
    updateScale: (scale: TimeScaleType) => void;
  }
) => ReturnType<RedrawContent> & { scale: TimeScaleType } = ({
  width,
  height,
  tasks,
  svg,
  updateScale,
}) => {
  svg.attr("width", width);

  const gHeight = height - HEAD_HEIGHT;

  const content = svg.select<Element>("." + ClassesEnum.CONTENT);
  content.attr("height", gHeight);

  // create time scale
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
  svg.select<SVGGElement>("." + ClassesEnum.XSCALE).call(
    d3
      .axisTop(scale)
      // TODO: auto format time Scale
      .tickFormat((d) => fotmatTimeScaleTick(d as Date, "day"))
  );

  // TODO: time grid

  // create grid
  const gGrid = svg
    .selectAll("." + ClassesEnum.GRID)
    .selectAll()
    .data(tasks)
    .enter()
    .append("line")
    .attr("x1", 0)
    .attr("x2", width)
    .attr("stroke", GRID_COLOR)
    .attr("stroke-width", GRID_LINE_WIDTH);

  // layout grid
  gGrid.attr("y1", (t) => t.top).attr("y2", (t) => t.top);

  const { gTask } = createTaksFunc({
    svg,
    tasks,
  });
  // layout task
  layoutTasksFunc({ gTask, scale });

  // creay=te zoom
  content
    .append("rect")
    .attr("width", width)
    .attr("height", gHeight)
    .attr("fill", "none")
    .attr("class", ClassesEnum.ZOOM)
    .style("pointer-events", "all");

  const zoom = d3
    .zoom()
    .extent([
      [0, 0],
      [width, gHeight],
    ])
    .translateExtent([
      [-Infinity, 0],
      [Infinity, gHeight],
    ])
    // .scaleExtent([1, Infinity])
    .on("zoom", (event) => {
      console.log(event.transform);
      if (event.transform.k < 1) event.transform.k = 1;

      const newX = event.transform.rescaleX(scale);
      updateScale(newX);
      svg
        .select<SVGGElement>("." + ClassesEnum.XSCALE)
        .call(
          d3
            .axisTop(newX)
            .tickFormat((d) => fotmatTimeScaleTick(d as Date, "day"))
        );

      layoutTasksFunc({
        gTask: svg.selectAll<SVGGElement, IPlannerTask>(
          `.${ClassesEnum.TASKS} g`
        ),
        scale: newX,
      });
    });

  content.call(zoom);

  //deleteZoom = zoom.on("zoom", null);
  // resetZoom: () =>
  //   content.transition().duration(750).call(zoom.transform, d3.zoomIdentity),

  return {
    scale,
    clean: () => {
      svg
        .selectAll("." + ClassesEnum.GRID)
        .selectAll("*")
        .remove();
      svg
        .selectAll("." + ClassesEnum.TASKS)
        .selectAll("*")
        .remove();
      svg.selectAll("." + ClassesEnum.ZOOM).remove();
      content.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
      zoom.on("zoom", null);
    },
  };
};
