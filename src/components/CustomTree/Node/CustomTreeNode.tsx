import { FC, useEffect, useRef, useState } from "react";
import {
  CustomNodeElementProps,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/common";

import styles from "./customTreeNode.module.scss";

interface I {
  onAddChildren: (node: TreeNodeDatum) => void;
}

const CustomTreeNode: FC<CustomNodeElementProps & I> = ({
  nodeDatum,
  onAddChildren,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 200, h: 100 });

  useEffect(() => {
    setSize((state) => ({
      ...state,
      h: ref.current ? ref.current.clientHeight + 2 : state.h,
    }));
  }, [ref]);

  return (
    <foreignObject
      width={size.w}
      height={size.h}
      transform={`translate(-${size.w / 2}, -${size.h / 2})`}
    >
      <div ref={ref} className={styles.node}>
        <p style={{ margin: 0 }}>{nodeDatum.name}</p>
        <button type="button" onClick={() => onAddChildren(nodeDatum)}>
          add
        </button>
        <button type="button">delete</button>
        <button type="button">edit</button>
      </div>
    </foreignObject>
  );
};

export default CustomTreeNode;
