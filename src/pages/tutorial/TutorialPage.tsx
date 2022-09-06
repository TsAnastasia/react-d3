import TutorialChart from "./chart/TutorialChart";
import TutorialCluster from "./cluster/TutorialCluster";
import TutorialPie from "./pie/TutorialPie";
import TutorialShapes from "./shapes/TutorialShapes";
import TutorialTree from "./tree/TutorialTree";

enum SectionsEnum {
  SHAPES = "shapes",
  CHART = "chart",
  PIE = "pie",
  TREE = "tree",
  CLASTER = "claster",
}

const DATA = {
  name: "Max",
  children: [
    { name: "Mr X" },
    {
      name: "Sylvia",
      children: [{ name: "Craig" }, { name: "Robin" }, { name: "Anna" }],
    },
    {
      name: "David",
      children: [{ name: "Jeff" }, { name: "Buffy" }],
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

      <section id={SectionsEnum.CLASTER}>
        <h2>Cluster</h2>
        <TutorialCluster />
      </section>

      <section id={SectionsEnum.SHAPES}>
        <h2>Shapes</h2>
        <TutorialShapes />
      </section>

      <section id={SectionsEnum.CHART}>
        <h2>Visualizing data</h2>
        <TutorialChart data={[20, 40, 50, 70, 120]} />
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
    </main>
  );
};

export default TutorialPage;
