import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";

export const addTreeChildrenNode = (
  tree: RawNodeDatum[],
  parent: TreeNodeDatum,
  newNode?: { name: string }
): RawNodeDatum[] => {
  const queue: RawNodeDatum[] = [];

  queue.unshift(tree[0]);

  while (queue.length > 0) {
    const curNode = queue.pop();

    if (curNode?.attributes?.id === parent.attributes?.id) {
      curNode?.children?.push({
        name: newNode?.name || "new node",
        attributes: {
          id: Math.random(),
        },
        children: [],
      });
      return [...tree];
    }

    if (curNode?.children) {
      const len = curNode?.children?.length;

      for (let i = 0; i < len; i++) {
        queue.unshift(curNode.children[i]);
      }
    }
  }

  return [...tree];
};
