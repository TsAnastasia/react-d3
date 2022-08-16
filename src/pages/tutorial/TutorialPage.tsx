import * as d3 from "d3";
import { useEffect, useRef } from "react";
import TutorialChart from "./chart/TutorialChart";
import TutorialShapes from "./shapes/TutorialShapes";

const TutorialPage = () => {
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
    <main>
      <h1>Tutorial</h1>

      <section>
        <h1>example</h1>{" "}
        <div
          ref={containerRef}
          style={{ border: "1px solid #000", display: "inline-block" }}
        />
      </section>

      <TutorialShapes />
      <TutorialChart />
    </main>
  );
};

export default TutorialPage;
