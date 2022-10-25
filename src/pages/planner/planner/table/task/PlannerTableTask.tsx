import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
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
  // const dispatch = useAppDispatch();
  const [state, setState] = useState(task);

  const handleChangeEdges = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setState((state) => {
        task[event.target.name as "start" | "finish"] = new Date(
          event.target.value
        ).toISOString();
        return {
          ...state,
          [event.target.name as "start" | "finish"]: new Date(
            event.target.value
          ).toISOString(),
        };
      });
      // dispatch(
      //   updateTaskEdges({
      //     taskId: task.activity_id,
      //     type: event.target.name as "start" | "finish",
      //     value: new Date(event.target.value).toISOString(),
      //   })
      // );
    },
    [task]
  );

  // const handleChangeResFact = useCallback(
  //   (event: ChangeEvent<HTMLInputElement>) => {
  //     dispatch(
  //       updateTaskResFact({
  //         taskId: task.activity_id,
  //         value: Number(event.target.value),
  //       })
  //     );
  //   },
  //   [dispatch, task]
  // );

  useEffect(() => {
    console.log("change statet", state);
  }, [state]);

  return (
    <div className={scss.root} style={{ height: 30 }}>
      <div style={{ paddingLeft: (level - 1) * 20 }} className={scss.name}>
        <div className={scss.open}>
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
      </div>
      <input
        type="date"
        name="start"
        value={formatDateForInput(state.start)}
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
        // onChange={handleChangeResFact}
        disabled={true}
      />
    </div>
  );
};

export default PlannerTableTask;