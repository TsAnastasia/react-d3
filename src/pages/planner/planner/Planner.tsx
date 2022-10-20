import { FC, useEffect } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { resetState, setData } from "../../../redux/planner/plannerSlice";
import { IDataTask } from "../libs/interfaces";
import PlannerTable from "./table/PlannerTable";

import scss from "./planner.module.scss";

const Planner: FC<{ data: IDataTask[] }> = ({ data }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setData({ tasks: data }));
    // console.log("SET Data", res);
    return () => {
      dispatch(resetState());
    };
  }, [data, dispatch]);

  return (
    <section className={scss.root}>
      <h1 className={scss.title}>Планировщик</h1>
      <div className={scss.planner}>
        <PlannerTable />
      </div>
    </section>
  );
};

export default Planner;
