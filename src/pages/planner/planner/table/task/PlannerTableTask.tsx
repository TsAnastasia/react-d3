import { ChangeEvent, FC, memo, useCallback } from "react";
import { useAppDispatch } from "../../../../../hooks/redux";
import { updateTaskEdges } from "../../../../../redux/planner/plannerSlice";
import { formatDateForInput } from "../../../libs/utils";
import { IPlannerTask } from "../../libs/interfaces";
import scss from "./plannerTableTask.module.scss";

const PlannerTableTask: FC<{
  task: IPlannerTask;
  level: number;
  open?: boolean;
  onToggleOpen?: () => void;
  isGroup?: boolean;
}> = ({ task, level, open, onToggleOpen, isGroup = false }) => {
  const dispatch = useAppDispatch();
  const handleChangeEdges = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        updateTaskEdges({
          taskId: task.activity_id,
          type: event.target.name as "start" | "finish",
          value: new Date(event.target.value).toISOString(),
        })
      );
    },
    [dispatch, task]
  );

  return (
    <div className={scss.root} style={{ height: 30 }}>
      <div style={{ paddingLeft: (level - 1) * 20 }} className={scss.open}>
        {!!level && <div className={scss.line} />}
        {onToggleOpen && (
          <button type="button" onClick={onToggleOpen} className={scss.btn}>
            {open ? "-" : "+"}
          </button>
        )}
      </div>
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
        onChange={handleChangeEdges}
        max={formatDateForInput(task.finish)}
        disabled={isGroup}
      />
      <input
        type="date"
        name="finish"
        value={formatDateForInput(task.finish)}
        onChange={handleChangeEdges}
        min={formatDateForInput(task.start)}
        disabled={isGroup}
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

export default memo(PlannerTableTask);
