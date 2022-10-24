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
          level={level}
          isGroup={true}
        />
      </div>
      {open && (
        <ul className={scss.details}>
          {level !== 0 && (
            <span className={scss.line} style={{ left: (level - 1) * 20 }} />
          )}
          {group.details.map((item) =>
            typeof item === "string" || typeof item === "number" ? (
              <li key={item}>
                <PlannerTableTask task={tasks[item]} level={level + 1} />
              </li>
            ) : (
              <li key={item.activity_id} className={scss.item}>
                <PlannerTableDetails group={item} level={level + 1} />
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
};

export default PlannerTableDetails;
