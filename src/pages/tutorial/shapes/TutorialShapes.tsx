import * as d3 from "d3";
import { useEffect, useRef } from "react";

const TutorialShapes = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const svg = d3
        .select(containerRef.current)
        .append("svg")
        .attr("height", 400)
        .attr("width", 400);

      svg
        .append("circle") // круг
        .attr("cx", 150) // координата X цента
        .attr("cy", 150) // координата Y цента
        .attr("r", 50) // радиус
        .attr("fill", "red");

      svg
        .append("rect") // прямоугольник
        .attr("width", 100) // ширина прямоугольника
        .attr("height", 50); // высота прямоугольника
      // .attr("fill", "red");

      svg
        .append("line") // линия
        .attr("x1", 0) // координата X начала линии
        .attr("y1", 100) //  координата Y начала линии
        .attr("x2", 400) // координата X начала линии
        .attr("y2", 400) //  координата Y начала линии
        .attr("stroke", "green")
        .attr("stroke-width", 2);
    }

    return () => {
      containerRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ border: "1px solid #000", display: "inline-block" }}
    />
  );
};

export default TutorialShapes;
