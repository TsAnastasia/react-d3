import { FC, useRef } from "react";
import { HEAD_HEIGHT } from "../libs/constants";
import { IPlannerTask } from "../libs/types";

import scss from "./plannerTable.module.scss";
import PlannerTableTask from "./task/PlannerTableTask";

const PlannerTable: FC<{
  tasks: IPlannerTask[];
  onUpdate: (task: IPlannerTask) => void;
}> = ({ tasks, onUpdate }) => {
  const tableRef = useRef<HTMLUListElement>(null);

  return (
    <div className={scss.root}>
      <div className={scss.head} style={{ height: HEAD_HEIGHT }}>
        <p>Имя задачи</p>
        <p>Начало</p>
        <p>Окончание</p>
      </div>
      <ul className={scss.table} ref={tableRef}>
        {tasks.map((task) => (
          <PlannerTableTask
            key={task.id}
            task={task}
            offsetTop={tableRef.current?.offsetTop || 0}
            onUpdate={onUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default PlannerTable;
