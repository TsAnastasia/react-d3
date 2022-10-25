import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IDataTask } from "../../libs/interfaces";
import { formatPlannerData } from "./formatData";
import { IPlannerTaskGroup, IPlannerTasks } from "./interfaces";

interface IPlannerContext {
  structure: IPlannerTaskGroup | null;
  tasks: IPlannerTasks;
}

const PlannerContext = createContext<IPlannerContext>({
  structure: null,
  tasks: {},
});

export const PlannerProvider: FC<{
  children: ReactNode;
  data: { tasks: IDataTask[] };
}> = ({ children, data }) => {
  const [structure, setStructure] = useState<IPlannerTaskGroup | null>(null);
  const [tasks, setTasks] = useState<IPlannerTasks>({});

  useEffect(() => {
    const { tasks, structure } = formatPlannerData({ tasks: data.tasks });
    setStructure(structure);
    setTasks(tasks);
  }, [data]);

  return (
    <PlannerContext.Provider value={{ structure, tasks }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlannerContext = () => useContext(PlannerContext);
