import * as d3 from "d3";
import { useEffect, useRef } from "react";
import TutorialChart from "./chart/TutorialChart";
import TutorialPie from "./pie/TutorialPie";
import TutorialShapes from "./shapes/TutorialShapes";
import TutorialTree from "./tree/TutorialTree";

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
      <TutorialTree />

      <section>
        <h1>example</h1>
        <div
          ref={containerRef}
          style={{ border: "1px solid #000", display: "inline-block" }}
        />
      </section>

      <TutorialShapes />
      <TutorialChart />

      <TutorialPie
        data={[10, 42, 25, 36]}
        // labels={Array(4)
        //   .fill("")
        //   .map((_, i) => i + 1)}
      />
    </main>
  );
};

export default TutorialPage;
