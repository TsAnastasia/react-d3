import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

const TutorialPie: FC<{
  data: number[];
  labels?: (string | number)[];
  height?: number;
  width?: number;
  padding?: number;
  radius?: number;
  pieWidth?: number;
}> = ({
  data,
  labels = data,
  height = 300,
  width = height,
  padding = 20,
  radius,
  pieWidth,
}) => {
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
        data.length
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
        .data(d3.pie().sort(null)(data))
        .enter()
        .append("g")
        .attr("class", "arc");

      arcs
        .append("path")
        .attr("class", "arc__path")
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
          (d) =>
            `translate(${arc
              // .innerRadius(RADIUS - 40)
              // .outerRadius(RADIUS)
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              .centroid(d as any)})`
        )
        .attr("text-anchor", "middle")
        .text((d, i) => String(labels[i]))
        .attr("class", "arc__value");
    }
  }, [height, padding, pieWidth, radius, width, data, labels]);

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

export default TutorialPie;
