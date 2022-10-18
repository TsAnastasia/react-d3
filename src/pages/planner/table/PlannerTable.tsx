import { FC, useRef } from "react";
import { HEAD_HEIGHT } from "../libs/constants";
import { IPlannerTask } from "../libs/types";

import scss from "./plannerTable.module.scss";
import PlannerTableTask from "./task/PlannerTableTask";

const PlannerTable: FC<{ tasks: IPlannerTask[] }> = ({ tasks }) => {
  const headRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className={scss.head} style={{ height: HEAD_HEIGHT }} ref={headRef}>
        <p>Имя задачи</p>
        <p>Начало</p>
        <p>Окончание</p>
      </div>
      <ul className={scss.table}>
        {tasks.map((task) => (
          <PlannerTableTask
            key={task.id}
            task={task}
            offsetTop={
              headRef.current
                ? headRef.current.offsetTop + headRef.current.offsetHeight
                : 0
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default PlannerTable;
