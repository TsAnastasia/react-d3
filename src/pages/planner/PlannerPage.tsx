import { TASKS } from "./libs/data";
import Planner from "./planner/Planner";
import Planner1 from "./planner1/Planner1";
// import Planner2 from "./planner2/Planner2";
import scss from "./plannerPage.module.scss";

const PlannerPage = () => {
  return (
    <main className={scss.root}>
      <Planner1 />
      {/* <Planner2 /> */}
      <Planner data={TASKS} />
    </main>
  );
};

export default PlannerPage;
