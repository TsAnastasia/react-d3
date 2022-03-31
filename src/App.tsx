import { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";
import styles from "./app.module.scss";
import AddTreeMember from "./components/addTreeMember/AddTreeMember";
import Modal from "./components/ui/modal/Modal";

const translateData = {
  x: window.innerWidth / 2 - 170,
  y: window.innerHeight / 2 - 15,
};

const addChildrenTreeNode = (
  tree: RawNodeDatum[],
  node: TreeNodeDatum,
  name: string
): RawNodeDatum[] => {
  const test = new Array(10)
    .fill("b")
    .map(() => {
      const t = Math.random();
      console.log(t);
      return t;
    })
    .join("-");
  console.log("node", test);
  const queue: RawNodeDatum[] = [];

  queue.unshift(tree[0]);

  while (queue.length > 0) {
    const curNode = queue.pop();

    // console.log("curNode?.attributes?.id === node.__rd3t.id", curNode, node);

    if (curNode?.attributes?.id === node.attributes?.id) {
      curNode?.children?.push({
        name,
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

const App = () => {
  const [tree, setTree] = useState<RawNodeDatum[]>([
    {
      name: "root",
      attributes: {
        id: "3434",
      },
      children: [
        {
          name: "first",
          attributes: {
            id: "46163",
          },
          children: [],
        },
        {
          name: "second",
          attributes: {
            id: "34",
          },
          children: [],
        },
        // {
        //   name: "third",
        //   attributes: {
        //     id: "3434",
        //   },
        //   children: [],
        // },
      ],
    },
  ]);

  const [node, setNode] = useState<undefined | TreeNodeDatum>(undefined);

  const handleAddmemberClose = () => setNode(undefined);

  const handleNodeClick = (node: { data: TreeNodeDatum }) => setNode(node.data);

  const handleAddTreeMember = (name: string) => {
    if (!node) return;

    setTree((state) => {
      // console.log("state", state);
      return addChildrenTreeNode(state, node, name);
    });

    setNode(undefined);
  };

  useEffect(() => {
    // console.log("tree", tree);
  }, [node]);

  return (
    <main className={styles.main}>
      <Tree
        data={tree}
        onNodeClick={handleNodeClick}
        translate={translateData}
        orientation="horizontal"
        pathFunc="elbow"
        collapsible={false}
      />
      <Modal isOpen={!!node} onClose={handleAddmemberClose}>
        <AddTreeMember
          onSubmit={(newMember: string) => {
            handleAddTreeMember(newMember);
          }}
        />
      </Modal>
    </main>
  );
};

export default App;
