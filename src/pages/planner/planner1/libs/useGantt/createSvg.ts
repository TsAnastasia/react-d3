import * as d3 from "d3";
import { HEAD_HEIGHT } from "../constants";
import { ClassesEnum, CreateSvgType } from "./types";

export const createSvgFunc: CreateSvgType = ({ container, name = "gantt" }) => {
  const svg = d3
    .select(container)
    .append("div")
    .attr("id", name)
    .style("position", "relative");

  svg
    .append("svg")
    .attr("height", HEAD_HEIGHT)
    .style("width", "100%")
    .style("position", "sticky")
    .style("top", 0)
    .style("background", "#ffffff")
    .append("g")
    .attr("class", ClassesEnum.XSCALE)
    .attr("transform", `translate(0,${HEAD_HEIGHT})`);

  const content = svg
    .append("svg")
    .style("width", "100%")
    .attr("class", ClassesEnum.CONTENT);
  content.append("g").attr("class", ClassesEnum.GRID);
  content.append("g").attr("class", ClassesEnum.TASKS);

  return svg;
};
