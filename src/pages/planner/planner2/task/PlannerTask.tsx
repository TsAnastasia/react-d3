import { FC, useEffect, useRef, useState } from "react";
import { IPlannerTask } from "../../planner1/libs/types";
import { formatDateForInput } from "../../planner1/libs/utils";
import { CreateTaskType } from "../libs/types";

import scss from "./plannerTask.module.scss";

const PlannerTask: FC<{ task: IPlannerTask; drawTask: CreateTaskType }> = ({
  task,
  drawTask,
}) => {
  const [current, setCurrent] = useState(task);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (graphRef.current) {
      setCurrent(task);
      drawTask({ container: graphRef.current, task });
    }
  }, [drawTask, task]);

  return (
    <li className={scss.root}>
      <div className={scss.data}>
        <input type="text" name="name" value={task.name} disabled={true} />
        <input
          type="date"
          name="start"
          value={formatDateForInput(current.start)}
          // onChange={handleChange}
          disabled={true}
        />
        <input
          type="date"
          name="finish"
          value={formatDateForInput(task.finish)}
          disabled={true}
        />
      </div>
      <div ref={graphRef} />
    </li>
  );
};

export default PlannerTask;
