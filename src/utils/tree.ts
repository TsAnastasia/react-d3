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
        name: newNode?.name || `new node ${Math.floor(1000 * Math.random())}`,
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

export const deleteTreeNode = (
  tree: RawNodeDatum[],
  node: TreeNodeDatum
): RawNodeDatum[] => {
  const queue: {
    parent: RawNodeDatum | null;
    node: RawNodeDatum;
    index: number;
  }[] = [];

  queue.unshift({ parent: null, node: tree[0], index: 0 });

  while (queue.length > 0) {
    const cur = queue.pop();

    if (cur?.node.attributes?.id === node.attributes?.id) {
      if (cur?.parent) {
        cur?.parent?.children?.splice(cur.index, 1);
      } else alert("root node");
    }

    if (cur?.node.children) {
      const len = cur.node.children.length;

      for (let i = 0; i < len; i++) {
        queue.unshift({
          parent: cur.node,
          node: cur.node.children[i],
          index: i,
        });
      }
    }
  }

  return [...tree];
};
