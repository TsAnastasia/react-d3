import React, { FC, useEffect, useRef, useState } from "react";
import { CustomNodeElementProps } from "react-d3-tree/lib/types/common";
import scss from "./treeGraphNode.module.scss";

const TreeGraphNode: FC<CustomNodeElementProps> = ({ nodeDatum }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [nodeSize, setNodeSize] = useState<
    { width: number | undefined; height: number | undefined } | undefined
  >(undefined);

  useEffect(() => {
    setNodeSize({
      height: nodeRef.current?.offsetHeight,
      width: nodeRef.current?.offsetWidth,
    });
  }, []);

  return (
    <foreignObject
      width={nodeSize?.width}
      height={nodeSize?.height}
      transform={`translate(-${(nodeSize?.width || 0) / 2}, -${
        (nodeSize?.height || 0) / 2
      })`}
    >
      <div ref={nodeRef} className={scss.root}>
        <div className={scss.node}>
          <p className={scss.name}>{nodeDatum.name}</p>
          <button type="button" className={scss.edit}>
            edit
          </button>
          <button type="button" className={scss.delete}>
            x
          </button>
          <button type="button" className={scss.add}>
            +
          </button>
        </div>
      </div>
    </foreignObject>
  );
};

export default TreeGraphNode;
