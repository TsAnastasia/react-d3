import { useState } from "react";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";
import styles from "./app.module.scss";
import CustomTree from "./components/CustomTree/CustomTree";

const defaultTree = {
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
  ],
};

const App = () => {
  const [tree, setTree] = useState<RawNodeDatum[]>([defaultTree]);
  return (
    <main className={styles.main}>
      <CustomTree tree={tree} setTree={setTree} />
    </main>
  );
};

export default App;
