import Planner1 from "./planner1/Planner1";
import Planner2 from "./planner2/Planner2";
import scss from "./plannerPage.module.scss";

const PlannerPage = () => {
  return (
    <main className={scss.root}>
      <Planner1 />
      <Planner2 />
    </main>
  );
};

export default PlannerPage;
