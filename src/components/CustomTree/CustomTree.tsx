import { FC, useEffect, useRef, useState } from "react";
import Tree from "react-d3-tree";
import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";
import { addTreeChildrenNode, deleteTreeNode } from "../../utils/tree";
import CustomTreeNode from "./Node/CustomTreeNode";
import styles from "./customTree.module.scss";

const nodeSize = { x: 250, y: 100 };

const CustomTree: FC<{
  tree: RawNodeDatum[];
  setTree: React.Dispatch<React.SetStateAction<RawNodeDatum[]>>;
  width?: string | number;
  height?: string | number;
}> = ({ tree, setTree, width, height = 400 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<{ w: number; h: number } | undefined>(
    undefined
  );

  const handleAddTreeMember = (node: TreeNodeDatum) => {
    setTree((state) => addTreeChildrenNode(state, node));
  };

  const handleEditNode = (node: TreeNodeDatum) => {
    alert(`edit node ${node.name}`);
  };

  const handleDeleteTreeNode = (node: TreeNodeDatum) => {
    setTree((state) => deleteTreeNode(state, node));
  };

  useEffect(() => {
    setSize((state) =>
      ref.current
        ? { ...state, h: ref.current.clientHeight, w: ref.current.clientWidth }
        : state
    );
  }, [ref]);

  return (
    <div ref={ref} className={styles.root} style={{ width, height }}>
      <Tree
        data={tree}
        nodeSize={nodeSize}
        translate={{ x: nodeSize.x / 4 + 20, y: size ? size.h / 2 : 0 }}
        orientation="horizontal"
        pathFunc="diagonal"
        collapsible={false}
        renderCustomNodeElement={(n) => (
          <CustomTreeNode
            onAddChildren={handleAddTreeMember}
            onEditNode={handleEditNode}
            onDeleteNode={handleDeleteTreeNode}
            {...n}
          />
        )}
      />
    </div>
  );
};

export default CustomTree;
