import { FC, useEffect, useRef } from "react";
import { IPlannerTask } from "../libs/types";
import { CreateSvgType, RedrawContentType } from "../libs/useGantt/types";

const PlannerGantt: FC<{
  tasks: IPlannerTask[];
  className?: string;
  createSvg: CreateSvgType;
  redrawContent: RedrawContentType;
}> = ({ className, tasks, createSvg, redrawContent }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  // const { createSvg, redrawContent } = useGantt();

  useEffect(() => {
    if (ref.current) {
      createSvg({
        container: ref.current,
      });
    }
  }, [createSvg]);

  useEffect(() => {
    if (ref.current) {
      console.log("draw");
      const { width, height } = ref.current.getBoundingClientRect();
      const { clean } = redrawContent({
        width,
        height,
        tasks,
      });
      return () => {
        console.log("end");
        clean();
      };
    }
  }, [redrawContent, tasks]);

  return <div ref={ref} className={className} />;
};

export default PlannerGantt;
