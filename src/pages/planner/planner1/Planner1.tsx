import { useCallback, useEffect, useState } from "react";
import PlannerGantt from "./gantt/PlannerGantt";
import { DATA } from "./libs/data";
import { IPlannerTask } from "./libs/types";
import { formatPlannerData } from "./libs/utils";
import scss from "./planner1.module.scss";
import PlannerTable from "./table/PlannerTable";

const Planner1 = () => {
  const [tasks, setTasks] = useState<IPlannerTask[]>([]);
  // const [links, setLinks] = useState<IPlannerLink[]>([]);

  const onUpdateTask = useCallback(
    (task: IPlannerTask) =>
      setTasks((state) => state.map((t) => (t.id === task.id ? task : t))),
    []
  );

  useEffect(() => {
    const { tasks /* , links  */ } = formatPlannerData(DATA);
    setTasks(tasks);
    // setLinks(links);
  }, []);

  return (
    <section className={scss.root}>
      <h1>Планировщик 1</h1>
      <div className={scss.planner}>
        <PlannerTable tasks={tasks} onUpdate={onUpdateTask} />
        <PlannerGantt tasks={tasks} className={scss.gantt} />
      </div>
    </section>
  );
};

export default Planner1;
