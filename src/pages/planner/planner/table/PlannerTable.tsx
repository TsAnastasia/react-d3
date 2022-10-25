import { FC } from "react";
import { usePlannerContext } from "../libs/plannerContext";
import PlannerTableDetails from "./details/PlannerTableDetails";
import PlannerTableHead from "./head/PlannerTableHead";
import scss from "./plannerTable.module.scss";

const PlannerTable: FC = () => {
  const { structure } = usePlannerContext();

  return (
    structure && (
      <div className={scss.root}>
        <PlannerTableHead />
        {structure && <PlannerTableDetails group={structure} />}
      </div>
    )
  );
};

export default PlannerTable;
