import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";
import data from "./data.json";

const SCALE_SIZE = 30;

const GraphsScatter: FC<{
  height?: number;
  width?: number;
  padding?: number;
}> = ({ height = 300, width }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const boxSize = containerRef.current.getBoundingClientRect();
      const width = boxSize.width - SCALE_SIZE;
      const height = boxSize.height - SCALE_SIZE;

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${SCALE_SIZE}, ${0})`);

      const x = d3.scaleLinear().domain([4, 8]).range([0, width]);
      const xAxis = svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(x));

      const y = d3.scaleLinear().domain([0, 9]).range([height, 0]);
      const yAxis = svg.append("g").call(d3.axisLeft(y));

      const clip = svg
        .append("defs")
        .append("SVG:clipPath")
        .attr("id", "clip")
        .append("SVG:rect")
        .attr("width", width)
        .attr("height", height)
        .attr("x", 0)
        .attr("y", 0);

      const scatter = svg.append("g").attr("clip-path", "url(#clip)");

      scatter
        .selectAll()
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", (d) => x(d.Sepal_Length))
        .attr("cy", (d) => y(d.Petal_Length))
        .attr("r", 8)
        .style("fill", "#61a3a9")
        .style("opacity", 0.5);

      const zoom = d3
        .zoom()
        .scaleExtent([0.5, 20]) // This control how much you can unzoom (x0.5) and zoom (x20)
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
            .selectAll("circle")
            .attr("cx", (d) => newX(d.Sepal_Length))
            .attr("cy", function (d) {
              return newY(d.Petal_Length);
            });
        });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ border: "1px solid black", width, height }}
    ></div>
  );
};

export default GraphsScatter;
