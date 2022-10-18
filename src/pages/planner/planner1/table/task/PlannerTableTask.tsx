import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TASK_LINE_HEIGHT } from "../../libs/constants";
// import { TASK_LINE_HEIGHT } from "../../libs/constants";
import { IPlannerTask } from "../../libs/types";
import { formatDateForInput } from "../../libs/utils";
import scss from "./plannerTableTask.module.scss";

const PlannerTableTask: FC<{
  task: IPlannerTask;
  offsetTop: number;
  onUpdate: (task: IPlannerTask) => void;
}> = ({ task, offsetTop, onUpdate }) => {
  const [current, setCurrent] = useState(task);
  const ref = useRef<HTMLLIElement>(null);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.type === "date") {
        // task[event.target.name as "start" | "finish"] = new Date(
        //   event.target.value
        // );
        // setCurrent((state) => ({
        //   ...state,
        //   [event.target.name]: new Date(event.target.value),
        // }));
        // TODO: format value
        onUpdate({
          ...task,
          [event.target.name]: new Date(event.target.value),
        });
        // console.log("new date", new Date(event.target.value));
      }
    },
    [onUpdate, task]
  );

  useEffect(() => {
    setCurrent(task);
  }, [task]);

  // CHECK: update task top
  useEffect(() => {
    task.top = (ref.current?.offsetTop || 0) - offsetTop;
  }, [offsetTop, task]);

  return (
    <li className={scss.root} ref={ref} style={{ height: TASK_LINE_HEIGHT }}>
      <input type="text" name="name" value={task.name} disabled={true} />
      <input
        type="date"
        name="start"
        value={formatDateForInput(current.start)}
        onChange={handleChange}
        // disabled={true}
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
