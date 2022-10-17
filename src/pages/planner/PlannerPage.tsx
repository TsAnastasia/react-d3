import { useEffect, useState } from "react";
import { DATA } from "./libs/data";
import { IPlannerLink, IPlannerTask } from "./libs/types";
import { formatPlannerData } from "./libs/utils";
import PlannerTable from "./table/PlannerTable";

import scss from "./plannerPage.module.scss";

const PlannerPage = () => {
  const [tasks, setTasks] = useState<IPlannerTask[]>([]);
  const [links, setLinks] = useState<IPlannerLink[]>([]);

  useEffect(() => {
    const { tasks, links } = formatPlannerData(DATA);
    setTasks(tasks);
    setLinks(links);
  }, []);

  useEffect(() => {
    console.log("links", links);
  }, [links]);

  return (
    <main className={scss.root}>
      <h1>Планировщик</h1>
      <div className={scss.planner}>
        <PlannerTable tasks={tasks} />
        <div>gannt</div>
      </div>
    </main>
  );
};

export default PlannerPage;
