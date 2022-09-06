import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

type NodeType =
  | { name: string; children: NodeType[] }
  | { name: string; value: number };

const TutorialCluster: FC<{
  data: NodeType;
  height?: number;
  width?: number;
  padding?: number;
  nodePadding?: number;
}> = ({ data, padding = 20, height = 300, width, nodePadding = 5 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", `translate(${padding}, ${padding})`);

      const pack = d3
        .pack()
        .size([width - 2 * padding, height - 2 * padding])
        .padding(nodePadding)(
        d3
          .hierarchy(data)
          // .count()
          .sum((d) => (d as { value: number }).value || 0)
      );

      const nodes = pack.descendants();
      const colors = d3.quantize(
        (t) => d3.interpolateCool(t * 0.8 + 0.1),
        pack.height + 1
      );

      const node = svg
        .selectAll()
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

      node
        .append("circle")
        .attr("r", (d) => d.r)
        .attr("fill", (d) => colors[d.height])
        .attr("fill-opacity", 0.25)
        .attr("stroke", (d) => colors[d.height])
        .attr("stroke-width", 1);

      node
        .append("text")
        .text((d) =>
          (d.data as { children: NodeType[] }).children
            ? ""
            : (d.data as NodeType).name
        )
        .attr("fill", (d) => colors[d.height])
        .attr("text-anchor", "middle")
        .attr("transform", "translate(0, 5)");
    }

    return () => {
      containerRef.current = null;
    };
  }, [data, nodePadding, padding]);

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

export default TutorialCluster;
