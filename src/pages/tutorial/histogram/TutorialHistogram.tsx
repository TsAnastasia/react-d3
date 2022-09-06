import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

const SCALE_SIZE = 30;

const TutorialHistogram: FC<{
  data: number[];
  height?: number;
  width?: number;
  padding?: number;
  between?: number;
}> = ({ data, padding = 20, height = 300, width, between = 5 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();

      const xRange = [padding, width - 2 * padding - SCALE_SIZE];
      const yRange = [height - SCALE_SIZE, padding];

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const histogram = d3.bin().thresholds(10)(data);

      const xDomain = [
        histogram[0].x0 || 0,
        histogram[histogram.length - 1].x1 || 0,
      ];
      const yDomain = [0, d3.max(histogram.map((i) => i.length)) || 0];

      const xScale = d3.scaleLinear(xDomain, xRange);
      const yScale = d3.scaleLinear(yDomain, yRange);

      const bars = svg
        .append("g")
        .attr("transform", `translate(${padding}, 0)`)
        .selectAll()
        .data(histogram)
        .enter()
        .append("g");

      bars
        .append("rect")
        .attr("x", (d) => xScale(d.x0 || 0) + between / 2)
        .attr("width", (d) =>
          Math.max(0, xScale(d.x1 || 0) - xScale(d.x0 || 0) - between)
        )
        .attr("y", (d) => yScale(d.length))
        .attr("height", (d) => height - yScale(d.length) - SCALE_SIZE)
        .attr("fill", "#c2c4c4");

      svg
        .append("g")
        .attr("transform", `translate(${SCALE_SIZE}, ${0})`)
        .call(d3.axisLeft(yScale));

      svg
        .append("g")
        .attr("transform", `translate(${padding}, ${height - SCALE_SIZE})`)
        .call(d3.axisBottom(xScale));

      console.log(histogram);
    }

    return () => {
      containerRef.current = null;
    };
  }, [between, data, padding]);

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
