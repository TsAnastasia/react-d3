import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";
const DATA: number[] = [
  10, 50, 80, 90, 20, 70, 100, 60, 50, 100, 60, 60, 10, 50, 80, 90, 20, 70, 100,
  60, 50, 100, 60, 60,
];

const TutorialPie: FC<{
  height?: number;
  width?: number;
  padding?: number;
  radius?: number;
  pieWidth?: number;
}> = ({ height = 300, width, padding = 20, radius, pieWidth }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const RADIUS =
        radius ||
        d3.min([(height - 2 * padding) / 2, (width - 2 * padding) / 2]) ||
        50;

      const colors = d3.quantize(
        (t) => d3.interpolateRainbow(t * 0.8 + 0.1),
        DATA.length
      );

      const arc = d3
        .arc()
        .innerRadius(pieWidth ? RADIUS - pieWidth : 0)
        .outerRadius(RADIUS);

      const arcs = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr(
          "transform",
          `translate(${padding + RADIUS}, ${padding + RADIUS})`
        )
        .selectAll()
        .data(d3.pie().sort(null)(DATA))
        .enter()
        .append("g");
      // .attr("class", "arc");

      arcs
        .append("path")
        .attr("stroke-width", 0.5)
        .attr("stroke", "#fff")
        .attr(
          "d",
          arc as d3.ValueFn<
            SVGPathElement,
            unknown,
            string | number | boolean | readonly (string | number)[] | null
          > | null
        )
        .attr("fill", (_, i) => colors[i]);

      arcs
        .append("text")
        .attr(
          "transform",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (d) => `translate(${arc.innerRadius(100).centroid(d as any)})`
        )
        .attr("text-anchor", "middle")
        .text((d) => String(d.data));
    }
  }, [height, padding, pieWidth, radius, width]);

  return (
    <section>
      <h1>Pie chart</h1>
      <div
        ref={containerRef}
        style={{
          border: "1px solid #000",
          width,
          height,
        }}
      />
    </section>
  );
};

export default TutorialPie;