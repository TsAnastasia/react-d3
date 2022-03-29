import { useState } from "react";
import Tree from "react-d3-tree";
import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";
import styles from "./app.module.scss";
import AddTreeMember from "./components/addTreeMember/AddTreeMember";
import Modal from "./components/ui/modal/Modal";

const App = () => {
  const [tree, setTree] = useState<RawNodeDatum>({
    name: "root",
    children: [],
  });

  const [node, setNode] = useState<undefined | TreeNodeDatum>(undefined);

  const handleAddmemberClose = () => setNode(undefined);

  const handleAddTreeMember = (name: string) => {
    if (!node) return;

    // setTree((s) =>
    // s.map((n) => {
    //   console.log(n);
    //   if (n.name === node.name) {
    //     const children: RawNodeDatum[] = [{ name, children: [] }];
    //     return {
    //       ...n,
    //       children,
    //     };
    //   }
    //   return n;
    // })
    // );

    setNode(undefined);
  };

  return (
    <main className={styles.main}>
      <Tree
        data={tree}
        onNodeClick={(node) => setNode(node.data)}
        translate={{ x: 30, y: 30 }}
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
