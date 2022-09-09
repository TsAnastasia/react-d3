import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";
import data from "./data.json";

const SCALE_SIZE = 40;

const GraphsBar: FC<{
  height?: number;
  width?: number;
  padding?: number;
  color?: string;
}> = ({ height = 300, width, padding = 10, color = "lightblue" }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let svg: d3.Selection<SVGSVGElement, unknown, null, undefined>;

    if (containerRef.current) {
      const boxSize = containerRef.current.getBoundingClientRect();
      const width = boxSize.width - 2 * padding;
      const height = boxSize.height - 2 * padding;

      svg = d3
        .select(containerRef.current)
        .append("svg")
        // .attr("width", width)
        // .attr("height", height)
        .attr("viewBox", [0, 0, width + 2 * padding, height + 2 * padding])
        // --- zooming ----
        .call((svg) => {
          const extent: [[number, number], [number, number]] = [
            [padding, padding],
            [width - padding, height - padding],
          ];
          svg.call(
            d3
              .zoom()
              .scaleExtent([1, 8])
              .translateExtent(extent)
              .extent(extent)
              .on(
                "zoom",
                (event) => {
                  x.range(
                    [padding, width].map((d) => event.transform.applyX(d))
                  );
                  bars
                    .attr("x", (d) => x(d.name) || 0)
                    .attr("width", x.bandwidth());
                  // svg.selectAll(".x-axis").call(xAxis);
                  xAxis.call(createXAxis);
                } // eslint-disable-next-line @typescript-eslint/no-explicit-any
              ) as any
          );
        });

      const content = svg
        .append("g")
        .attr("transform", `translate(${padding},${padding})`);

      const x = d3
        .scaleBand()
        .domain(data.map((i) => i.name))
        .range([0, width - SCALE_SIZE])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([
          d3.min(data, (d) => d.value) || 0,
          d3.max(data, (d) => d.value) || 0,
        ])
        .range([height - SCALE_SIZE, 0]);

      // --- BARS -------------------------------------------------------------
      const bars = content
        .append("g")
        .attr("class", "bars")
        .attr("transform", `translate(${SCALE_SIZE}, 0)`)
        .attr("fill", color)
        .selectAll()
        .data(data)
        .join("rect")
        .attr("x", (d) => x(d.name) || 0)
        .attr("y", (d) => y(d.value) || 0)
        .attr("width", x.bandwidth())
        .attr("height", (d) => y(0) - y(d.value));
      // ----------------------------------------------------------------------
      // --- TOOLTIP ----------------------------------------------------------
      //  TODO
      // bars.call((bar) =>
      //   bar.on("mouseover", () =>
      //     bar.attr("stroke-width", 2).attr("stroke", "#000")
      //   )
      // );
      // ----------------------------------------------------------------------
      // --- AXIES ------------------------------------------------------------

      const createXAxis = (
        g: d3.Selection<SVGGElement, unknown, null, undefined>
      ) =>
        g
          .attr(
            "transform",
            `translate(${SCALE_SIZE}, ${height - SCALE_SIZE + 2})`
          )

          .call(d3.axisBottom(x).tickSizeOuter(0));

      const xAxis = content
        .append("g")
        .attr("class", "x-axis")
        .call(createXAxis);

      // const yAxis =
      content
        .append("g")
        .attr("class", "y-axis")
        .call((g) =>
          g
            .attr("transform", `translate(${SCALE_SIZE}, 0)`)
            .call(d3.axisLeft(y))
            .call((g) => g.select(".domain").remove())
        );
      // ----------------------------------------------------------------------
    }
    return () => {
      // TODO: fix in another components
      svg && svg.remove();
    };
  }, [color, padding]);

  return (
    <div
      style={{
        width,
        height,
        border: "1px solid black",
        // boxSizing: "border-box",
      }}
      ref={containerRef}
    ></div>
  );
};

export default GraphsBar;
