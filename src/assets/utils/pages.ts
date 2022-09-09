import { AppRoutes } from "../../router/routers";

export const pages: { route: string; name?: string; description?: string }[] = [
  {
    route: AppRoutes.TUTORIAL,
    name: "Tutorial",
    description:
      "Different examples of using d3 to build charts, graphs, trees, maps and e.t.",
  },
  { route: AppRoutes.TREE, name: "Tree" },
  { route: AppRoutes.TIMELINE, name: "Timelines" },
];
