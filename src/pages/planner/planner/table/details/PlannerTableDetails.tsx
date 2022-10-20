import { FC } from "react";
import { IPlannerTask, IPlannerTaskGroup } from "../../libs/interfaces";
import PlannerTableTask from "../task/PlannerTableTask";
import scss from "./plannerTableDetails.module.scss";

const PlannerTableDetails: FC<{
  group: IPlannerTaskGroup;
}> = ({ group }) => {
  return (
    <>
      <div>
        {/* {hasDetail ? (
          <button type="button" onClick={handleOpenToggle}>
            {current.open ? "-" : "+"}
          </button>
        ) : (
          <span />
        )} */}
        {/* <PlannerTableTask task={formatTaskGrouptoTask(group, tasks)} /> */}
      </div>
      <ul className={scss.details}>
        {group.details.map((item) => (
          <li key={item.activity_id}>
            {item.type === "group" ? (
              // "group"
              <PlannerTableDetails group={group} />
            ) : (
              // <PlannerTableTask task={item} />
              item.activity_name
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlannerTableDetails;
