import { FC } from "react";
import { useAppSelector } from "../../../../hooks/redux";
import PlannerTableDetails from "./details/PlannerTableDetails";
// import scss from "./plannerTable.module.scss";

const PlannerTable: FC = () => {
  const { structure } = useAppSelector((state) => state.planner);

  return (
    <div>
      <div>table head</div>
      {structure && <PlannerTableDetails group={structure} />}
    </div>
  );
};

export default PlannerTable;
