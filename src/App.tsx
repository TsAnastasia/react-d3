import { useState } from "react";
import { RawNodeDatum } from "react-d3-tree/lib/types/common";
import styles from "./app.module.scss";
import CustomTree from "./components/CustomTree/CustomTree";
import { transformTreeWithId } from "./utils/tree";

const defaultTree = {
  name: "root",
  children: [
    {
      name: "first",
      children: [],
    },
    {
      name: "second",
      children: [],
    },
  ],
};

const App = () => {
  const [tree, setTree] = useState<RawNodeDatum[]>(
    transformTreeWithId([defaultTree])
  );

  return (
    <main className={styles.main}>
      <CustomTree tree={tree} setTree={setTree} />
    </main>
  );
};

export default App;
