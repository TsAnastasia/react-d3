import * as d3 from "d3";
import { HEAD_HEIGHT } from "../constants";
import { ClassesEnum, CreateSvg } from "./types";

export const createSvgFunc: CreateSvg = ({ container, name = "gantt" }) => {
  const svg = d3.select(container).append("svg").attr("id", name);

  svg
    .append("g")
    .attr("class", ClassesEnum.XSCALE)
    .attr("transform", `translate(0,${HEAD_HEIGHT})`);

  const content = svg
    .append("g")
    .attr("class", ClassesEnum.CONTENT)
    .attr("transform", `translate(0,${HEAD_HEIGHT})`);
  content.append("g").attr("class", ClassesEnum.GRID);
  content.append("g").attr("class", ClassesEnum.TASKS);

  return svg;
};
