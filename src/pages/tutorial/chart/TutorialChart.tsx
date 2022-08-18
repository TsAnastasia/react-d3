import * as d3 from "d3";
import { useEffect, useRef } from "react";

const dataArr = [20, 40, 50, 70, 120];
const MAX = Math.max(...dataArr);
const PADDING = 20;
const WIDTH = 500;
const HEIGHT = 500;

const TutorialChart = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const widthScale = d3.scaleLinear().domain([0, MAX]).range([0, WIDTH]);

      const colors = d3
        .scaleLinear()
        .domain([0, dataArr.length])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .range(["red", "blue"] as any);

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", WIDTH + 2 * PADDING)
        .attr("height", HEIGHT + 2 * PADDING)
        .append("g")
        .attr("transform", `translate(${PADDING}, ${PADDING})`);

      // const bars =
      svg
        .selectAll("rect")
        .data(dataArr)
        .enter()
        .append("rect")
        .attr("width", (d) => widthScale(d))
        .attr("height", 50)
        .attr("fill", (d, i) => colors(i))
        .attr("y", (d, i) => 70 * i);

      svg
        .append("g")
        .attr("transform", `translate(${0}, ${HEIGHT - 100})`)
        .call(d3.axisBottom(widthScale));
    }
  }, []);

  return (
    <section>
      <h2>Visualizing data</h2>
      <div
        ref={containerRef}
        style={{ border: "1px solid #000", display: "inline-block" }}
      />
    </section>
  );
};

export default TutorialChart;
