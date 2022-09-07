import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";
import mapData from "./mapData.json";

const TutorialMap: FC<{
  height?: number;
  width?: number;
  padding?: number;
}> = ({ height = 700, width, padding = 20 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();

      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${padding}, ${padding})`);

      const group = svg.selectAll().data(mapData.features).enter().append("g");

      const path = d3
        .geoPath()
        .projection(d3.geoMercator().fitSize([width, height], mapData));

      // const areas =
      group
        .append("path")
        .attr("d", path)
        .attr("class", "area")
        .attr("fill", "#c4c4c4");

      group
        .append("text")
        .attr("x", (d) => path.centroid(d)[0])
        .attr("y", (d) => path.centroid(d)[1])
        .text((d) => d.properties.name_en);
    }

    return () => {
      containerRef.current = null;
    };
  }, [padding]);

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid #000",
        width,
        height,
        overflow: "hidden",
      }}
    />
  );
};

export default TutorialMap;
