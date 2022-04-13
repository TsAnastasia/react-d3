import { FC, useEffect, useRef, useState } from "react";
import {
  CustomNodeElementProps,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/common";

import styles from "./customTreeNode.module.scss";

interface I {
  onAddChildren?: (node: TreeNodeDatum) => void;
  onEditNode?: (node: TreeNodeDatum) => void;
  onDeleteNode?: (node: TreeNodeDatum) => void;
}

const CustomTreeNode: FC<CustomNodeElementProps & I> = ({
  nodeDatum,
  onAddChildren,
  onEditNode,
  onDeleteNode,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ w: 150, h: 100 });

  useEffect(() => {
    setSize((state) => ({
      ...state,
      h: ref.current ? ref.current.clientHeight : state.h,
    }));
  }, [ref]);

  return (
    <foreignObject
      width={size.w}
      height={size.h}
      transform={`translate(-${size.w / 2}, -${size.h / 2})`}
    >
      <div ref={ref} className={styles.root}>
        <div className={`${styles.node} ${styles.node_blue}`}>
          <p className={styles.name}>{nodeDatum.name}</p>
          {onAddChildren && (
            <button
              type="button"
              className={`${styles.button} ${styles.buton_add}`}
              onClick={() => onAddChildren(nodeDatum)}
            >
              a
            </button>
          )}
          {onDeleteNode && (
            <button
              type="button"
              className={`${styles.button} ${styles.buton_delete}`}
              onClick={() => onDeleteNode(nodeDatum)}
            >
              d
            </button>
          )}
          {onEditNode && (
            <button
              type="button"
              className={`${styles.button} ${styles.buton_edit}`}
              onClick={() => onEditNode(nodeDatum)}
            >
              e
            </button>
          )}
        </div>
      </div>
    </foreignObject>
  );
};

export default CustomTreeNode;
