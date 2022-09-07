import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";

interface INodeData {
  name: string;
  children?: INodeData[];
}

const TutorialTree: FC<{
  data: INodeData;
  height?: number;
  width?: number;
  padding?: number;
}> = ({ data, height = 300, width, padding = 20 }) => {
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

      const link = d3
        .linkHorizontal()
        .x((d) => d[0])
        .y((d) => d[1]);

      const tree = d3.tree().size([width - 2 * padding, height - 2 * padding])(
        d3.hierarchy(data)
      );

      const nodes = tree.descendants();
      const links = tree.links();

      const colors = d3.quantize(
        (t) => d3.interpolateRainbow(t * 0.8 + 0.1),
        nodes.length
      );

      svg
        .append("g")
        .attr("class", "links")
        .selectAll()
        .data(links)
        .join("path")
        .attr("d", (d) =>
          link({
            source: [d.source.x, d.source.y],
            target: [d.target.x, d.target.y],
          })
        )
        .attr("class", "link")
        .attr("fill", "none")
        .attr("stroke", (_, i) => colors[i + 1]);

      const node = svg
        .append("g")
        .attr("class", "nodes")
        .selectAll()
        .data(nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", (d) => `translate(${d.x}, ${d.y})`);

      node
        .append("circle")
        .attr("r", 5)
        .attr("fill", (_, i) => colors[i]);

      node
        .append("text")
        .text((d) => (d.data as { name: string }).name)
        .attr("fill", (_, i) => colors[i])
        .attr("transform", "translate(10,5)");
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
        overflow: "hidden",
      }}
    />
  );
};

export default TutorialTree;
