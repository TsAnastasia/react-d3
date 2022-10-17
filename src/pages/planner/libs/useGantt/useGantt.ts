import { useCallback, useRef } from "react";
import * as d3 from "d3";
import { ClassNames, CreateSvg, IRef, RedrawTasks, SVGType } from "./types";
import {
  GRID_COLOR,
  GRID_LINE_WIDTH,
  HEAD_HEIGHT,
  TASK_LINE_HEIGHT,
} from "../constants";

export const useGantt = () => {
  const ref = useRef<IRef>({
    svg: d3.create("svg") as SVGType,
  });

  const createSvg = useCallback<CreateSvg>(({ container, name = "gantt" }) => {
    const svg = d3.select(container).append("svg").attr("id", name);

    svg.append("g").attr("class", ClassNames.XSCALE);

    const content = svg
      .append("g")
      .attr("class", ClassNames.CONTENT)
      .attr("transform", `translate(0,${HEAD_HEIGHT})`);
    content.append("g").attr("class", ClassNames.GRID);
    content.append("g").attr("class", ClassNames.TASKS);

    ref.current.svg = svg;
    return svg;
  }, []);

  const redrawTasks = useCallback<RedrawTasks>(({ width, tasks }) => {
    const { svg } = ref.current;
    svg
      .attr("width", width)
      .attr("height", HEAD_HEIGHT + tasks.length * TASK_LINE_HEIGHT);

    svg
      .selectAll("." + ClassNames.GRID)
      .selectAll()
      .data(tasks)
      .enter()
      .append("line")
      .attr("x1", 0)
      .attr("x2", width)
      .attr("y1", (_, i) => i * TASK_LINE_HEIGHT)
      .attr("y2", (_, i) => i * TASK_LINE_HEIGHT)
      .attr("stroke", GRID_COLOR)
      .attr("stroke-width", GRID_LINE_WIDTH);
  }, []);

  return {
    createSvg,
    redrawTasks,
  };
};
