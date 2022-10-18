declare namespace Planner2ModuleScssNamespace {
  export interface IPlanner2ModuleScss {
    content: string;
    head: string;
  }
}

declare const Planner2ModuleScssModule: Planner2ModuleScssNamespace.IPlanner2ModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: Planner2ModuleScssNamespace.IPlanner2ModuleScss;
};

export = Planner2ModuleScssModule;
