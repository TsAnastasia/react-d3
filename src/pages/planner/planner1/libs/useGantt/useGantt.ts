import * as d3 from "d3";
import { useCallback, useRef } from "react";
import { IPlannerTask } from "../types";
import { createSvgFunc } from "./createSvg";
import { layoutTasksFunc } from "./layoutTasks";
import { redrawContentFunc } from "./redrawContent";
import {
  ClassesEnum,
  CreateSvgType,
  IRef,
  RedrawContentType,
  SVGType,
  TimeScaleType,
} from "./types";
export const useGantt = () => {
  const ref = useRef<IRef>({
    svg: d3.create("div") as SVGType,
    scale: d3.scaleTime(),
  });

  const createSvg = useCallback<CreateSvgType>((props) => {
    const svg = createSvgFunc(props);
    ref.current.svg = svg;
    return svg;
  }, []);

  const _updateScale = useCallback((scale: TimeScaleType) => {
    ref.current.scale = scale;
  }, []);

  const redrawTask = useCallback((task: IPlannerTask) => {
    console.log("redrawTask", task);
    const gTask = ref.current.svg
      .selectAll<SVGGElement, IPlannerTask>(`.${ClassesEnum.TASKS} g`)
      .filter((t) => t.id === task.id);

    layoutTasksFunc({
      gTask: gTask,
      scale: ref.current.scale,
    });
  }, []);

  const redrawContent = useCallback<RedrawContentType>(
    (props) => {
      const { scale, clean } = redrawContentFunc({
        ...props,
        svg: ref.current.svg,
        updateScale: _updateScale,
      });
      _updateScale(scale);
      return { clean };
    },
    [_updateScale]
  );

  return {
    createSvg,
    redrawContent,
    redrawTask,
  };
};
