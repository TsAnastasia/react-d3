import { FC } from "react";
import { IDataTask } from "../libs/interfaces";
import PlannerTable from "./table/PlannerTable";

import { PlannerProvider } from "./libs/plannerContext";
import scss from "./planner.module.scss";

const Planner: FC<{ data: IDataTask[] }> = ({ data }) => {
  return (
    <PlannerProvider
      data={{
        tasks: data,
      }}
    >
      <section className={scss.root}>
        <h1 className={scss.title}>Планировщик</h1>
        <div className={scss.planner}>
          <PlannerTable />
        </div>
      </section>
    </PlannerProvider>
  );
};

export default Planner;
