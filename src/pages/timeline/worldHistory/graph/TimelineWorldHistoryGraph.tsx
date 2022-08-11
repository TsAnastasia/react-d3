import * as d3 from "d3";
import { FC, useEffect, useRef } from "react";
import csv from "./TimelineWorldHistoryGraphData.json";
import { SortingType } from "./TimelineWorldHistoryGraphTypes";

const height = 1000;
const margin = { top: 30, right: 30, bottom: 30, left: 30 };

const data = csv
  .map((d) => ({
    ...d,
    start: +d.start,
    end: +d.end,
  }))
  .sort((a, b) => a.start - b.start);

const TimelineWorldHistoryGraph: FC<{ sorting: SortingType }> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      // let filteredData;
      // if(sorting !== "time") {
      //   filteredData = [].concat.apply([], dataByRegion.map(d=>d.values));
      // } else {
      //   filteredData = data.sort((a,b)=>  a.start-b.start);
      // }

      // filteredData.forEach(d=> d.color = d3.color(color(d.region)))

      const div = d3.select(containerRef.current);

      const svg = div
        .append("svg")
        .style("width", "100%")
        .style("height", height);

      svg
        .append("g")
        .attr("transform", () => `translate(${margin.left} ${margin.top})`);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflowX: "auto", position: "relative" }}
    ></div>
  );
};

export default TimelineWorldHistoryGraph;
