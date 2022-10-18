import { useEffect, useState } from "react";
import PlannerGantt from "./gantt/PlannerGantt";
import { DATA } from "./libs/data";
import { IPlannerTask } from "./libs/types";
import { useGantt } from "./libs/useGantt/useGantt";
import { formatPlannerData } from "./libs/utils";
import scss from "./planner1.module.scss";
import PlannerTable from "./table/PlannerTable";

const Planner1 = () => {
  const [tasks, setTasks] = useState<IPlannerTask[]>([]);
  // const [links, setLinks] = useState<IPlannerLink[]>([]);

  const { createSvg, redrawContent, redrawTask } = useGantt();
  // const onUpdateTask = useCallback(
  //   (task: IPlannerTask) =>
  //     setTasks((state) => state.map((t) => (t.id === task.id ? task : t))),
  //   []
  // );

  // const handleRedrawTask = useCallback(
  //   (task: IPlannerTask) => {
  //     redrawTask(task);
  //   },
  //   [redrawTask]
  // );

  useEffect(() => {
    const { tasks /* , links  */ } = formatPlannerData(DATA);
    setTasks(tasks);
    // setLinks(links);
  }, []);

  return (
    <section>
      <h1>Планировщик 1</h1>
      <div className={scss.planner}>
        <PlannerTable tasks={tasks} onUpdate={redrawTask} />
        <PlannerGantt
          tasks={tasks}
          className={scss.gantt}
          createSvg={createSvg}
          redrawContent={redrawContent}
        />
      </div>
    </section>
  );
};

export default Planner1;
