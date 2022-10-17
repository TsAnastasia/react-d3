import { FC } from "react";
import { HEAD_HEIGHT } from "../libs/constants";
import { IPlannerTask } from "../libs/types";

import scss from "./plannerTable.module.scss";
import PlannerTableTask from "./task/PlannerTableTask";

const PlannerTable: FC<{ tasks: IPlannerTask[] }> = ({ tasks }) => {
  return (
    <div>
      <div className={scss.head} style={{ height: HEAD_HEIGHT }}>
        <p>Имя задачи</p>
        <p>Начало</p>
        <p>Окончание</p>
      </div>
      <ul className={scss.table}>
        {tasks.map((task) => (
          <PlannerTableTask key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default PlannerTable;
