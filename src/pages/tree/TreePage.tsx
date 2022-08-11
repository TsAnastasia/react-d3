import TreeGraph from "./graph/TreeGraph";

const TreePage = () => (
  <main>
    <h1>Tree-graph</h1>
    <TreeGraph
      data={{
        name: "root",
        attributes: { id: Math.random() },
        children: [
          {
            name: "root",
            attributes: { id: Math.random() },
            children: [
              { name: "root", attributes: { id: Math.random() } },
              { name: "root", attributes: { id: Math.random() } },
            ],
          },
          { name: "root", attributes: { id: Math.random() } },
        ],
      }}
    />
  </main>
);

export default TreePage;
