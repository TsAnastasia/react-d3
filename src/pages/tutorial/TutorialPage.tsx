import TutorialChart from "./chart/TutorialChart";
import TutorialCluster from "./cluster/TutorialCluster";
import TutorialHistogram from "./histogram/TutorialHistogram";
import TutorialMap from "./map/TutorialMap";
import TutorialPie from "./pie/TutorialPie";
import TutorialShapes from "./shapes/TutorialShapes";
import TutorialTree from "./tree/TutorialTree";
import TutorialTreemap from "./treemap/TutorialTreemap";

enum SectionsEnum {
  SHAPES = "shapes",
  CHART = "chart",
  PIE = "pie",
  TREE = "tree",
  CLASTER = "claster",
  HISTOGRAM = "histogram",
  TREEMAP = "treemap",
  MAP = "map",
}

const DATA = {
  name: "Max",
  children: [
    { name: "Mr X", value: 200 },
    {
      name: "Sylvia",
      children: [
        { name: "Craig", value: 75 },
        { name: "Robin", value: 65 },
        { name: "Anna", value: 50 },
      ],
    },
    {
      name: "David",
      children: [
        { name: "Jeff", value: 80 },
        { name: "Buffy", value: 45 },
      ],
    },
  ],
};

const TutorialPage = () => {
  return (
    <main>
      <h1>Tutorial</h1>

      <nav>
        <ul>
          {Object.values(SectionsEnum).map((section) => (
            <li key={section}>
              <a href={`#${section}`}>{section}</a>
            </li>
          ))}
        </ul>
      </nav>

      <section id={SectionsEnum.SHAPES}>
        <h2>Shapes</h2>
        <TutorialShapes />
      </section>

      <section id={SectionsEnum.CHART}>
        <h2>Visualizing data</h2>
        <TutorialChart data={[20, 40, 32, 70, 55, 120]} />
      </section>

      <section id={SectionsEnum.CHART}>
        <h2>Pie chart</h2>
        <TutorialPie
          data={[10, 42, 25, 36]}
          // labels={Array(4)
          //   .fill("")
          //   .map((_, i) => i + 1)}
        />
      </section>

      <section id={SectionsEnum.TREE}>
        <h2>Tree</h2>
        <TutorialTree data={DATA} />
      </section>

      <section id={SectionsEnum.CLASTER}>
        <h2>Cluster (pack) layout</h2>
        <TutorialCluster data={DATA} />
      </section>

      <section id={SectionsEnum.HISTOGRAM}>
        <h2>Histogram</h2>
        <TutorialHistogram
          data={Array(200)
            .fill("")
            .map(() => Math.floor(Math.random() * 80))}
          between={2}
          thresholds={40}
        />
      </section>

      <section id={SectionsEnum.TREEMAP}>
        <h2>Treemap</h2>
        <TutorialTreemap data={DATA} />
      </section>

      <section id={SectionsEnum.MAP}>
        <h2>Italy map</h2>
        <TutorialMap />
      </section>
    </main>
  );
};

export default TutorialPage;
