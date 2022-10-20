import { FC } from "react";
import { formatDateForInput } from "../../../libs/utils";
import { IPlannerTask } from "../../libs/interfaces";
import scss from "./plannerTableTask.module.scss";

const PlannerTableTask: FC<{ task: IPlannerTask; level?: number }> = ({
  task,
}) => {
  return (
    <div className={scss.row}>
      <input
        type="text"
        name="name"
        value={task.activity_name}
        // onChange={handleChange}
        disabled={true}
      />
      <input
        type="date"
        name="start"
        value={formatDateForInput(task.start)}
        // onChange={handleChange}
        max={formatDateForInput(task.finish)}
        disabled={true}
      />
      <input
        type="date"
        name="finish"
        value={formatDateForInput(task.finish)}
        // onChange={handleChange}
        min={formatDateForInput(task.start)}
        disabled={true}
      />
      <input
        type="number"
        name="electrician"
        value={task.res_fact.electrician}
        // onChange={handleChangeRes}
        disabled={true}
      />
    </div>
  );
};

export default PlannerTableTask;
