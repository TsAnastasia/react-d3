import { FC, useEffect, useRef } from "react";
import { IPlannerTask } from "../libs/types";
import { useGantt } from "../libs/useGantt/useGantt";

const PlannerGantt: FC<{ tasks: IPlannerTask[]; className?: string }> = ({
  className,
  tasks,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { createSvg, redrawTasks } = useGantt();

  useEffect(() => {
    if (ref.current) {
      createSvg({
        container: ref.current,
      });
    }
  }, [createSvg]);

  useEffect(() => {
    redrawTasks({
      width: ref.current?.clientWidth || 100,
      tasks,
    });
  }, [redrawTasks, tasks]);

  return <div ref={ref} className={className} />;
};

export default PlannerGantt;
