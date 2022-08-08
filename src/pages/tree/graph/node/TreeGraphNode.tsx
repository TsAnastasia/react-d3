import { FC, useEffect, useRef, useState } from "react";
import { CustomNodeElementProps } from "react-d3-tree/lib/types/common";

const TreeGraphNode: FC<CustomNodeElementProps> = ({ nodeDatum }) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [nodeSize, setNodeSize] = useState<
    { width: number | undefined; height: number | undefined } | undefined
  >(undefined);

  useEffect(() => {
    setNodeSize({
      height: nodeRef.current?.clientHeight,
      width: nodeRef.current?.clientWidth,
    });
  }, []);

  useEffect(() => {
    console.log("nodeSize", nodeSize);
  }, [nodeSize]);

  return (
    <foreignObject width={nodeSize?.width} height={nodeSize?.height}>
      <div ref={nodeRef} style={{ display: "inline-block" }}>
        <p>{nodeDatum.name}</p>
      </div>
    </foreignObject>
  );
};

export default TreeGraphNode;
