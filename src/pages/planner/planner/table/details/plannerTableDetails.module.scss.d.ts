declare namespace PlannerTableDetailsModuleScssNamespace {
  export interface IPlannerTableDetailsModuleScss {
    details: string;
  }
}

declare const PlannerTableDetailsModuleScssModule: PlannerTableDetailsModuleScssNamespace.IPlannerTableDetailsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlannerTableDetailsModuleScssNamespace.IPlannerTableDetailsModuleScss;
};

export = PlannerTableDetailsModuleScssModule;
