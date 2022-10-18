import * as d3 from "d3";
import { useCallback, useRef } from "react";
import { createSvgFunc } from "./createSvg";
import { redrawContentFunc } from "./redrawContent";
import {
  CreateSvg,
  IRef,
  RedrawContent,
  SVGType,
  TimeScaleType,
} from "./types";
export const useGantt = () => {
  const ref = useRef<IRef>({
    svg: d3.create("div") as SVGType,
    scale: d3.scaleTime(),
  });

  const createSvg = useCallback<CreateSvg>((props) => {
    const svg = createSvgFunc(props);
    ref.current.svg = svg;
    return svg;
  }, []);

  const _updateScale = useCallback((scale: TimeScaleType) => {
    ref.current.scale = scale;
  }, []);

  const redrawContent = useCallback<RedrawContent>(
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
  };
};
