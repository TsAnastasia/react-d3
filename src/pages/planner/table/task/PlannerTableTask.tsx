import { FC } from "react";
import { TASK_LINE_HEIGHT } from "../../libs/constants";
import { IPlannerTask } from "../../libs/types";
import { formatDateForInput } from "../../libs/utils";
import scss from "./plannerTableTask.module.scss";

const PlannerTableTask: FC<{ task: IPlannerTask }> = ({ task }) => {
  return (
    <li className={scss.root} style={{ height: TASK_LINE_HEIGHT }}>
      <input type="text" name="name" value={task.name} disabled={true} />
      <input
        type="date"
        name="start"
        value={formatDateForInput(task.start)}
        disabled={true}
      />
      <input
        type="date"
        name="finish"
        value={formatDateForInput(task.finish)}
        disabled={true}
      />
    </li>
  );
};

export default PlannerTableTask;
