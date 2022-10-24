import { TASKS } from "./libs/data";
import Planner from "./planner/Planner";
import Planner1 from "./planner1/Planner1";
import scss from "./plannerPage.module.scss";

const PlannerPage = () => {
  return (
    <main className={scss.root}>
      <Planner data={TASKS} />
      <Planner1 />
    </main>
  );
};

export default PlannerPage;
