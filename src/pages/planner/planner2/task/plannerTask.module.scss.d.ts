declare namespace PlannerTaskModuleScssNamespace {
  export interface IPlannerTaskModuleScss {
    data: string;
    root: string;
  }
}

declare const PlannerTaskModuleScssModule: PlannerTaskModuleScssNamespace.IPlannerTaskModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlannerTaskModuleScssNamespace.IPlannerTaskModuleScss;
};

export = PlannerTaskModuleScssModule;
