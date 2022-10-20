declare namespace PlannerModuleScssNamespace {
  export interface IPlannerModuleScss {
    planner: string;
    root: string;
    title: string;
  }
}

declare const PlannerModuleScssModule: PlannerModuleScssNamespace.IPlannerModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlannerModuleScssNamespace.IPlannerModuleScss;
};

export = PlannerModuleScssModule;
