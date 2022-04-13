import { FC } from "react";
import Tree from "react-d3-tree";
import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";
import { addTreeChildrenNode } from "../../utils/tree";
import CustomTreeNode from "./Node/CustomTreeNode";

const translateData = {
  x: window.innerWidth / 2 - 170,
  y: window.innerHeight / 2 - 15,
};

const sizeData = { x: 380, y: 140 };

const CustomTree: FC<{
  tree: RawNodeDatum[];
  setTree: React.Dispatch<React.SetStateAction<RawNodeDatum[]>>;
}> = ({ tree, setTree }) => {
  const handleAddTreeMember = (node: TreeNodeDatum) => {
    setTree((state) => addTreeChildrenNode(state, node));
  };

  return (
    <Tree
      data={tree}
      nodeSize={sizeData}
      translate={translateData}
      orientation="horizontal"
      pathFunc="diagonal"
      collapsible={false}
      renderCustomNodeElement={(n) => (
        <CustomTreeNode onAddChildren={handleAddTreeMember} {...n} />
      )}
    />
  );
};

export default CustomTree;
