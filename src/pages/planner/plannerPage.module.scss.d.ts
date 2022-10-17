declare namespace PlannerPageModuleScssNamespace {
  export interface IPlannerPageModuleScss {
    planner: string;
    root: string;
  }
}

declare const PlannerPageModuleScssModule: PlannerPageModuleScssNamespace.IPlannerPageModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlannerPageModuleScssNamespace.IPlannerPageModuleScss;
};

export = PlannerPageModuleScssModule;
