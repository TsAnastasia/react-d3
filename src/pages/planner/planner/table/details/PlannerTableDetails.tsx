import { FC, useCallback, useState } from "react";
import { useAppSelector } from "../../../../../hooks/redux";
import { formatTaskGrouptoTask } from "../../libs/formatData";
import { IPlannerTaskGroup } from "../../libs/interfaces";
import PlannerTableTask from "../task/PlannerTableTask";
import scss from "./plannerTableDetails.module.scss";

const PlannerTableDetails: FC<{
  group: IPlannerTaskGroup;
  level?: number;
}> = ({ group, level = 0 }) => {
  const { tasks } = useAppSelector((state) => state.planner);
  const [open, setOpen] = useState(group.open);

  const handleOpenToggle = useCallback(() => {
    // TODO: update open group
    setOpen((state) => !state);
  }, []);

  return (
    <>
      <div>
        <PlannerTableTask
          task={formatTaskGrouptoTask(group, tasks)}
          open={open}
          onToggleOpen={handleOpenToggle}
          level={level + 1}
        />
      </div>
      {open && (
        <ul className={scss.details}>
          {group.details.map((item) => (
            <li key={item.activity_id}>
              {item.type === "group" ? (
                <PlannerTableDetails group={item} level={level + 1} />
              ) : (
                <PlannerTableTask task={item} level={level + 1} />
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PlannerTableDetails;
