import { FC, useEffect, useRef, useState } from "react";
import Tree from "react-d3-tree";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";
import TreeGraphNode from "./node/TreeGraphNode";
import scss from "./treeGraph.module.scss";

const TreeGraph: FC<{
  data: RawNodeDatum;
  width?: string | number;
  height?: string | number;
}> = ({ data, width, height = 400 }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<
    { width: number | undefined; height: number | undefined } | undefined
  >(undefined);

  useEffect(() => {
    setContainerSize({
      height: containerRef.current?.clientHeight,
      width: containerRef.current?.clientWidth,
    });
  }, []);

  return (
    <div style={{ width, height }} ref={containerRef}>
      <Tree
        data={data}
        svgClassName={scss.graph}
        translate={{ x: 10, y: (containerSize?.height || 0) / 2 }}
        renderCustomNodeElement={(props) => <TreeGraphNode {...props} />}
      />
    </div>
  );
};

export default TreeGraph;
