import * as d3 from "d3";
import { useEffect, useRef } from "react";

const TimelineWorksGraph = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const div = d3.select(containerRef.current);
    }
  }, []);

  return <div ref={containerRef} />;
};

export default TimelineWorksGraph;
