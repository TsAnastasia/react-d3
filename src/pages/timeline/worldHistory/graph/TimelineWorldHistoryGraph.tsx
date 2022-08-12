import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";
import csv from "./TimelineWorldHistoryGraphData.json";
import { SortingType } from "./TimelineWorldHistoryGraphTypes";

const height = 1000;
const width = 700;
const margin = { top: 30, right: 30, bottom: 30, left: 30 };

const colors: { [ke: string]: string } = {
  "Middle East": "red",
  "South Asia": "green",
  "Europe (and colonial offshoots)": "orange",
  "East Asia": "blue",
  "Sub-Saharan Africa": "black",
  "pre-colonial Americas": "grey",
  "the Steppe": "yellow",
};

const data = csv
  .map((d) => ({
    ...d,
    start: +d.start,
    end: +d.end,
    color: colors[d.region],
  }))
  .sort((a, b) => a.start - b.start);

// const regions = Array.from(new Set(data.map((d) => d.region)));
// const color = d3.scaleOrdinal(d3.schemeSet2).domain(regions);

const x = d3
  .scaleLinear()
  .domain([
    d3.min(data, (d) => d.start) as number,
    d3.max(data, (d) => d.end) as number,
  ])
  .range([0, width - margin.left - margin.right]);

const y = d3
  .scaleBand()
  .domain(String(d3.range(data.length)))
  .range([0, height - margin.bottom - margin.top])
  .padding(0.2);

const TimelineWorldHistoryGraph: FC<{ sorting: SortingType }> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const filteredData = data;

      const div = d3.select(containerRef.current);

      const svg = div
        .append("svg")
        .style("width", "100%")
        .style("height", height);

      const g = svg
        .append("g")
        .attr("transform", () => `translate(${margin.left} ${margin.top})`);

      const groups = g
        .selectAll("g")
        .data(filteredData)
        .enter()
        .append("g")
        .attr("class", "civ");

      // const tooltip = d3
      //   .select(document.createElement("div"))
      //   .call(createTooltip);
      const line = svg
        .append("line")
        .attr("y1", margin.top - 10)
        .attr("y2", height - margin.bottom)
        .attr("stroke", "rgba(0,0,0,0.2)")
        .style("pointer-events", "none");

      groups.attr("transform", (d, i) => `translate(0 ${y(String(i))})`);

      groups.each(function (d) {
        const el = d3.select(this);
        const sx = x(d.start);
        const w = x(d.end) - x(d.start);
        const isLabelRight = true;
        // sx > width / 2 ? sx + w < width : sx - w > 0;

        el.style("cursor", "pointer");

        el.append("rect")
          .attr("x", sx)
          .attr("height", y.bandwidth())
          .attr("width", w)
          .attr("fill", d.color);

        el.append("text")
          .text(d.civilization)
          .attr("x", isLabelRight ? sx - 5 : sx + w + 5)
          .attr("y", 2.5)
          .attr("fill", "black")
          .style("text-anchor", isLabelRight ? "end" : "start")
          .style("dominant-baseline", "hanging");
      });
      //   .on("mouseover", function (d) {
      //     d3.select(this).select("rect").attr("fill", d.color.darker());

      //     tooltip.style("opacity", 1).html(getTooltipContent(d));
      //   })
      //   .on("mouseleave", function (d) {
      //     d3.select(this).select("rect").attr("fill", d.color);
      //     tooltip.style("opacity", 0);
      //   });

      svg
        .append("g")
        .attr(
          "transform",
          () => `translate(${margin.left} ${margin.top - 10})`
        );
      // .call(axisTop);

      svg
        .append("g")
        .attr(
          "transform",
          () => `translate(${margin.left} ${height - margin.bottom})`
        );
      // .call(axisBottom);

      // svg.on("mousemove", function (d) {
      //   let [x, y] = d3.mouse(this);
      //   line.attr("transform", `translate(${x} 0)`);
      //   y += 20;
      //   if (x > width / 2) x -= 100;

      //   tooltip.style("left", x + "px").style("top", y + "px");
      // });

      // parent.appendChild(svg.node());
      // parent.appendChild(tooltip.node());
      // parent.groups = groups;

      console.log(line);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflowX: "auto", position: "relative" }}
    ></div>
  );
};

export default TimelineWorldHistoryGraph;
