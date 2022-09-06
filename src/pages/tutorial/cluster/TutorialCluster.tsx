import * as d3 from "d3";
import { useEffect, useRef } from "react";

const TutorialCluster = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // const svg =
      d3.select(containerRef.current)
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ border: "1px solid #000", display: "inline-block" }}
    />
  );
};

export default TutorialCluster;
