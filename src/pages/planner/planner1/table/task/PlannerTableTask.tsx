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

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setCurrent((state) => ({
      ...state,
      [event.target.name]:
        event.target.type === "date"
          ? new Date(event.target.value)
          : event.target.value,
    }));
  }, []);

  useEffect(() => {
    setCurrent(task);
  }, [task]);

  // CHECK: update task top
  useEffect(() => {
    task.top = (ref.current?.offsetTop || 0) - offsetTop;
  }, [offsetTop, task]);

  useEffect(() => {
    task.start = current.start;
    task.finish = current.finish;
    task.name = current.name;
    onUpdate(current);
  }, [current, onUpdate, task]);

  return (
    <li className={scss.root} ref={ref} style={{ height: TASK_LINE_HEIGHT }}>
      <input
        type="text"
        name="name"
        value={current.name}
        onChange={handleChange}
      />
      <input
        type="date"
        name="start"
        value={formatDateForInput(current.start)}
        onChange={handleChange}
        max={formatDateForInput(current.finish)}
      />
      <input
        type="date"
        name="finish"
        value={formatDateForInput(current.finish)}
        onChange={handleChange}
        min={formatDateForInput(current.start)}
      />
    </li>
  );
};

export default PlannerTableTask;
