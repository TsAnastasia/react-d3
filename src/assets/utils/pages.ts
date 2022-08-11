import { AppRoutes } from "../../router/routers";

export const pages: { route: string; name?: string; description?: string }[] = [
  { route: AppRoutes.TREE, name: "Tree" },
  { route: AppRoutes.TIMELINE, name: "Timelines" },
];
