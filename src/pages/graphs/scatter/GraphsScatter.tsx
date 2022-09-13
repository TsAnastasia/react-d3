import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";
import data from "./data.json";

type NodeType = typeof data[number];
const SCALE_SIZE = 30;
const XSCALE_RANGE = [4, 8];
const YSCALE_RANGE = [0, 9];

const GraphsScatter: FC<{
  height?: number;
  width?: number;
  padding?: number;
}> = ({ height = 300, width, padding = 20 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const boxSize = containerRef.current.getBoundingClientRect();
      const width = boxSize.width - SCALE_SIZE - 2 * padding;
      const height = boxSize.height - SCALE_SIZE - 2 * padding;

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width + SCALE_SIZE + 2 * padding)
        .attr("height", height + SCALE_SIZE + 2 * padding)
        .append("g")
        .attr("transform", `translate(${SCALE_SIZE + padding},${padding})`);

      // X axis
      const x = d3.scaleLinear().domain(XSCALE_RANGE).range([0, width]);
      const xAxis = svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      // Y axis
      const y = d3.scaleLinear().domain(YSCALE_RANGE).range([height, 0]);
      const yAxis = svg.append("g").call(d3.axisLeft(y));

      // Add a clipPath: everything out of this area won't be drawn.
      // const clip =
      svg
        .append("defs")
        .append("SVG:clipPath")
        .attr("id", "clip")
        .append("SVG:rect")
        .attr("width", width + padding)
        .attr("height", height + padding)
        .attr("x", 0)
        .attr("y", -padding);

      // Create the scatter variable: where both the circles and the brush take place
      const scatter = svg.append("g").attr("clip-path", "url(#clip)");

      scatter
        .selectAll()
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("cx", (d) => x(d.Sepal_Length))
        .attr("cy", function (d) {
          return y(d.Petal_Length);
        })
        .attr("r", 8)
        .style("fill", "#61a3a9")
        .style("opacity", 0.5);

      // invisible rect on top of the chart area, where recover pointer events (necessary to understand when the user zoom)
      svg
        .append("rect")
        .attr("width", width)
        .attr("height", height)
        .style("fill", "none")
        .style("pointer-events", "all")
        .call(
          d3
            .zoom()
            .scaleExtent([0.5, 20])
            .translateExtent([
              [0, 0],
              [width, height],
            ])
            .extent([
              [0, 0],
              [width, height],
            ])
            .on("zoom", (event) => {
              // recover the new scale
              const newX = event.transform.rescaleX(x);
              const newY = event.transform.rescaleY(y);

              // update axes with these new boundaries
              xAxis.call(d3.axisBottom(newX));
              yAxis.call(d3.axisLeft(newY));

              // update circle position
              scatter
                .selectAll(".node")
                .attr("cx", (d) => newX((d as NodeType).Sepal_Length))
                .attr("cy", (d) => newY((d as NodeType).Petal_Length));
            }) as never
        );
    }
  }, [padding]);

  return (
    <div
      ref={containerRef}
      style={{ border: "1px solid black", width, height }}
    />
  );
};

export default GraphsScatter;
