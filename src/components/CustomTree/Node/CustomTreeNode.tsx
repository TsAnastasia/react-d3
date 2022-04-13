import { FC } from "react";
import {
  CustomNodeElementProps,
  TreeNodeDatum,
} from "react-d3-tree/lib/types/common";

interface I {
  onAddChildren: (node: TreeNodeDatum) => void;
}

const CustomTreeNode: FC<CustomNodeElementProps & I> = ({
  nodeDatum,
  onAddChildren,
}) => (
  <g onClick={() => onAddChildren(nodeDatum)}>
    <text>{nodeDatum.name}</text>
    <circle r={5} fill="#ccc"></circle>
  </g>
);

export default CustomTreeNode;
