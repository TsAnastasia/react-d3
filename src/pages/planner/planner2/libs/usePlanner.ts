import * as d3 from "d3";
import { useCallback, useRef } from "react";
import { creteScaleFunc } from "./createScale";
import { creteTaskFunc } from "./createTask";
import { CreateScaleType, CreateTaskType, IRef } from "./types";

export const usePlanner = () => {
  const ref = useRef<IRef>({
    scale: d3.scaleTime(),
  });

  const createScale = useCallback<CreateScaleType>((props) => {
    const res = creteScaleFunc(props);
    ref.current.scale = res.scale;
    return res;
  }, []);

  const createTask = useCallback<CreateTaskType>(
    (props) => creteTaskFunc({ ...props, scale: ref.current.scale }),
    []
  );

  return { createTask, createScale };
};
