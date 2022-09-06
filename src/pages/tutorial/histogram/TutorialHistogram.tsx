import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

const SCALE_SIZE = 20;

const TutorialHistogram: FC<{
  data: number[];
  height?: number;
  width?: number;
  padding?: number;
  between?: number;
  thresholds?: number;
}> = ({
  data,
  padding = 20,
  height = 300,
  width,
  between = 5,
  thresholds = 5,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const xRange = [0, width - SCALE_SIZE - 2 * padding];
      const yRange = [height - SCALE_SIZE - 2 * padding, 0];

      const calcHeight = (d: d3.Bin<number, number>) =>
        height - yScale(d.length) - SCALE_SIZE - 2 * padding;
      const calcWidth = (d: d3.Bin<number, number>) =>
        Math.max(0, xScale(d.x1 || 0) - xScale(d.x0 || 0) - between);

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${padding}, ${padding})`);

      const histogram = d3.bin().thresholds(thresholds)(data);

      const xDomain = [
        histogram[0].x0 || 0,
        histogram[histogram.length - 1].x1 || 0,
      ];
      const yDomain = [0, d3.max(histogram.map((i) => i.length)) || 0];

      const xScale = d3.scaleLinear(xDomain, xRange);
      const yScale = d3.scaleLinear(yDomain, yRange);

      const bars = svg
        .append("g")
        .attr("transform", `translate(${SCALE_SIZE}, 0)`)
        .selectAll()
        .data(histogram)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d) =>
            `translate(${xScale(d.x0 || 0) + between / 2}, ${yScale(d.length)})`
        );

      bars
        .append("rect")
        .attr("x", 0)
        .attr("width", calcWidth)
        .attr("y", 0)
        .attr("height", calcHeight)
        .attr("fill", (d) => d3.interpolateCool(1 - d.length / yDomain[1]));

      bars
        .append("text")
        .text((d) => d.length)
        .attr("fill", "#fff")
        .attr("text-anchor", "middle")
        .attr("font-size", 12)
        .attr(
          "transform",
          (d) => `translate(${calcWidth(d) / 2}, ${calcHeight(d) / 2 + 5})`
        );

      svg
        .append("g")
        .attr("transform", `translate(${SCALE_SIZE}, 0)`)
        .call(d3.axisLeft(yScale));

      svg
        .append("g")
        .attr(
          "transform",
          `translate(${SCALE_SIZE}, ${height - SCALE_SIZE - 2 * padding})`
        )
        .call(d3.axisBottom(xScale));
    }

    return () => {
      containerRef.current = null;
    };
  }, [between, data, padding, thresholds]);

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid #000",
        height,
        width,
      }}
    />
  );
};

export default TutorialHistogram;
