import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

const SCALE_HEIGHT = 20;
const SLICE_HEIGHT = 25;
const SLICE_BETWEEN = 20;

const TutorialChart: FC<{
  data: number[];
  height?: number;
  width?: number;
  padding?: number;
}> = ({
  data,
  padding = 20,
  height = data.length * (SLICE_HEIGHT + SLICE_BETWEEN) +
    2 * padding +
    SCALE_HEIGHT,
  width,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();

      const widthScale = d3
        .scaleLinear()
        .domain([0, Math.max(...data)])
        .range([0, width - 2 * padding]);

      const colors = d3
        .scaleLinear()
        .domain([0, data.length])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .range(["red", "blue"] as any);

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${padding}, ${padding})`);

      // const bars =
      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("width", (d) => widthScale(d))
        .attr("height", SLICE_HEIGHT)
        .attr("fill", (_, i) => colors(i))
        .attr("fill-opacity", 0.65)
        .attr("y", (d, i) => (SLICE_HEIGHT + SLICE_BETWEEN) * i)
        .attr("stroke", (_, i) => colors(i))
        .attr("stroke-width", 1)
        .attr("rx", 3);

      svg
        .append("g")
        .attr(
          "transform",
          `translate(${0}, ${height - SCALE_HEIGHT - 2 * padding})`
        )
        .call(d3.axisBottom(widthScale));
    }

    return () => {
      containerRef.current = null;
    };
  }, [data, padding]);

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid #000",
        width,
        height,
      }}
    />
  );
};

export default TutorialChart;
