declare namespace PlannerTableTaskModuleScssNamespace {
  export interface IPlannerTableTaskModuleScss {
    details: string;
    row: string;
  }
}

declare const PlannerTableTaskModuleScssModule: PlannerTableTaskModuleScssNamespace.IPlannerTableTaskModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlannerTableTaskModuleScssNamespace.IPlannerTableTaskModuleScss;
};

export = PlannerTableTaskModuleScssModule;
