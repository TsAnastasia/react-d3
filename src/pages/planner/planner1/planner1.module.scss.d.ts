declare namespace Planner1ModuleScssNamespace {
  export interface IPlanner1ModuleScss {
    gantt: string;
    planner: string;
  }
}

declare const Planner1ModuleScssModule: Planner1ModuleScssNamespace.IPlanner1ModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Planner1ModuleScssNamespace.IPlanner1ModuleScss;
};

export = Planner1ModuleScssModule;
