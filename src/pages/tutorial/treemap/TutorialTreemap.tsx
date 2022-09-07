import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

type NodeType =
  | { name: string; children: NodeType[] }
  | { name: string; value: number };

const TutorialTreemap: FC<{
  data: NodeType;
  height?: number;
  width?: number;
  padding?: number;
}> = ({ data, padding = 10, height = 300, width }) => {
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

      const treemap = d3
        .treemap()
        .size([width - 2 * padding, height - 2 * padding])
        .padding(5)
        .paddingTop(30)(
        d3
          .hierarchy(data)
          // .count()
          .sum((d) => (d as { value: number }).value || 0)
      );

      const color = d3
        .scaleOrdinal()
        .range(
          d3.quantize(
            (t) => d3.interpolateCool(t * 0.8 + 0.1),
            (treemap.ancestors()[0].children?.length || 0) + 1
          )
        );
      const calcColor = (d: d3.HierarchyRectangularNode<unknown>) => {
        while (d.depth > 1 && d.parent) d = d.parent;
        return color((d.data as NodeType).name) as string;
      };

      const cells = svg
        .selectAll()
        .data(treemap.descendants())
        .enter()
        .append("g")
        .attr("class", "cell")
        .attr("transform", (d) => `translate(${d.x0}, ${d.y0})`);

      cells
        .append("rect")
        .attr("x", 0)
        .attr("x", 0)
        .attr("width", (d) => d.x1 - d.x0)
        .attr("y", 0)
        .attr("height", (d) => d.y1 - d.y0)
        .attr("rx", 4)
        .attr("fill", calcColor)
        .attr("fill-opacity", 0.35)
        .attr("stroke", calcColor)
        .attr("stroke-width", 1);

      cells
        .append("text")
        .text((d) => (d.data as NodeType).name)
        .attr("text-anchor", "middle")
        // .attr("fill", calcColor)
        .attr("fill", "#fff")
        .attr("transform", (d) => `translate(${(d.x1 - d.x0) / 2}, ${20})`);

      console.log();
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
        height,
        width,
        overflow: "hidden",
      }}
    />
  );
};

export default TutorialTreemap;
