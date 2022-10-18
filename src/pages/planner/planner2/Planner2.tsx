import { useEffect, useRef, useState } from "react";
import { DATA } from "../planner1/libs/data";
import { IPlannerTask } from "../planner1/libs/types";
import { formatPlannerData } from "../planner1/libs/utils";
import PlannerTask from "./task/PlannerTask";

import scss from "./planner2.module.scss";
import { usePlanner } from "./libs/usePlanner";

const Planner2 = () => {
  const [tasks, setTasks] = useState<IPlannerTask[]>([]);
  const scaleRef = useRef<HTMLDivElement>(null);
  // const [links, setLinks] = useState<IPlannerLink[]>([]);
  const { createTask, createScale } = usePlanner();

  useEffect(() => {
    const { tasks /* , links  */ } = formatPlannerData(DATA);
    setTasks(tasks);
    // setLinks(links);
  }, []);

  useEffect(() => {
    if (scaleRef.current) {
      const { clean } = createScale({
        container: scaleRef.current,
        tasks,
      });

      return () => {
        clean();
      };
    }
  }, [createScale, tasks]);

  return (
    <section>
      <h2>Планировщик 2</h2>
      <div className={scss.head}>
        <span>head</span>
        <div ref={scaleRef}></div>
      </div>
      <ul className={scss.content}>
        {tasks.map((task) => (
          <PlannerTask key={task.id} task={task} drawTask={createTask} />
        ))}
      </ul>
    </section>
  );
};

export default Planner2;
