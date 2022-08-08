import TreeGraph from "./graph/TreeGraph";

const TreePage = () => (
  <main>
    <h1>Tree-graph</h1>
    <TreeGraph
      data={{ name: "root", attributes: { id: Math.random() }, children: [] }}
    />
  </main>
);

export default TreePage;
