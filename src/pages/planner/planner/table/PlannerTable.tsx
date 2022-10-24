import { FC } from "react";
import { useAppSelector } from "../../../../hooks/redux";
import PlannerTableDetails from "./details/PlannerTableDetails";
import PlannerTableHead from "./head/PlannerTableHead";
import scss from "./plannerTable.module.scss";

const PlannerTable: FC = () => {
  const { structure } = useAppSelector((state) => state.planner);

  return (
    <div className={scss.root}>
      <PlannerTableHead />
      {structure && <PlannerTableDetails group={structure} />}
    </div>
  );
};

export default PlannerTable;
