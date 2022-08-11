import * as d3 from "d3";
import { useEffect, useRef } from "react";
import data from "./data.json";

const height = 200;
const width = 12000;
const margin = { top: 30, right: 30, bottom: 30, left: 30 };
const groups = ["P", "DM", "DPU/ADE"];

const subsets = groups.map((name) =>
  data
    .filter((d) => d.type === name)
    .reduce((prev, curr) => {
      if (prev.length) {
        prev[prev.length - 1].end = curr.start;
        prev[prev.length - 1].duration =
          curr.start - prev[prev.length - 1].start;
      }
      prev.push(curr);
      return prev;
    }, [] as typeof data)
);

const alldates = data.map((p) => p.start);

const TimelineWorksGraph = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const div = d3.select(containerRef.current);

      const domain1 = d3.extent(alldates) as number[];
      const color1 = d3
        .scaleOrdinal(d3.schemeSet2)
        .domain(alldates.map((i) => String(i)));

      const x = d3
        .scaleLinear()
        .domain(domain1)
        .range([0, width - margin.left - margin.right]);

      const svg = div
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .style("width", width)
        .style("height", height);

      subsets.forEach((subset, i) => {
        const g1 = svg.append("g").attr("transform", `translate(0, ${i * 20})`);
        g1.selectAll()
          .data(subset)
          .join((enter) => enter.append("rect"))
          .attr("x", (d) => x(d.start))
          .attr("y", 2)
          .attr("width", (d) => x(d.end) - x(d.start) - 2)
          .attr("height", "18")
          .attr("fill", (d, i) => color1(String(i)));

        const div1 = div
          .append("div")
          .style("position", "absolute")
          .style("top", "0")
          .style("left", "0");

        div1
          .selectAll()
          .data(subset)
          .join((enter) => enter.append("div"))
          .style("position", "absolute")
          .style("margin", "4px")
          .style("left", (d) => x(d.start) + "px")
          .style("top", `${i * 20 + 2}px`)
          .style("width", (d) => `${x(d.end) - x(d.start) - 2}px`)
          .style("height", "auto")
          .text((d) => d.name);
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflowX: "auto", position: "relative" }}
    ></div>
  );
};

export default TimelineWorksGraph;
