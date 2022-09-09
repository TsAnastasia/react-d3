import * as d3 from "d3";
import { useEffect, useRef } from "react";
import { data } from "./data";

const BLOCK_HEIGHT = 50;
const PADDING = 20;
const ROW_STEP = 50;

const DATA_ROWS = Math.max(...data.map((i) => i.row));
const DATA_HEIGHT =
  (BLOCK_HEIGHT + ROW_STEP) * DATA_ROWS - ROW_STEP + 2 * PADDING;
// const DATA_WIDTH =
//   Math.max(...data.map((i) => i.end)) - Math.min(...data.map((i) => i.start));

const colors = d3
  .scaleLinear()
  .domain([0, DATA_ROWS])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .range(["#00DFFF", "#07C2D5 "] as any);

const TimelineWorksGraph = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();

      const widthScale = d3
        .scaleLinear()
        .domain([0, Math.max(...data.map((i) => i.end))])
        .range([0, width - 2 * PADDING]);

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("viewBox", [-PADDING, -PADDING, width, height])
        .call(
          d3.zoom().on(
            "zoom",
            (event) => svgGroup.attr("transform", event.transform)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ) as any
        );

      const svgGroup = svg.append("g");

      // svgGroup.selectAll().data(data).enter(w=> console.log("w", w));

      // const works =
      data.map((work) => {
        const workBox = svgGroup
          .append("g")
          .attr(
            "transform",
            `translate(${work.start}, ${
              (work.row - 1) * (BLOCK_HEIGHT + ROW_STEP)
            })`
          );

        workBox
          .append("rect")
          .attr("width", work.end - work.start)
          .attr("height", BLOCK_HEIGHT)
          .attr("fill", () => colors(work.row))
          .attr("rx", 5);

        workBox
          .append("g")
          // TODO: transform label
          // .attr("transform-origin", `center`)
          // .attr(
          //   "transform",
          //   `translate(${(work.end - work.start) / 2}, ${BLOCK_HEIGHT / 2})`
          // )
          .attr("transform", `translate(${10}, ${30})`)
          .append("text")
          .text(work.name)
          .attr("color", "red");
      });

      svgGroup
        .append("g")
        .attr("transform", `translate(${0}, ${height - 100})`)
        .call(d3.axisBottom(widthScale));
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: DATA_HEIGHT + 100,
        maxHeight: 700,
        border: "1px solid black",
      }}
    />
  );
};

export default TimelineWorksGraph;
