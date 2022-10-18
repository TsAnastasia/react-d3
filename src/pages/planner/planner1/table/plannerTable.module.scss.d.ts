declare namespace PlannerTableModuleScssNamespace {
  export interface IPlannerTableModuleScss {
    head: string;
    root: string;
    table: string;
  }
}

declare const PlannerTableModuleScssModule: PlannerTableModuleScssNamespace.IPlannerTableModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlannerTableModuleScssNamespace.IPlannerTableModuleScss;
};

export = PlannerTableModuleScssModule;
