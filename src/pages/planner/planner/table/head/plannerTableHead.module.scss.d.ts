declare namespace PlannerTableHeadModuleScssNamespace {
  export interface IPlannerTableHeadModuleScss {
    root: string;
  }
}

declare const PlannerTableHeadModuleScssModule: PlannerTableHeadModuleScssNamespace.IPlannerTableHeadModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: PlannerTableHeadModuleScssNamespace.IPlannerTableHeadModuleScss;
};

export = PlannerTableHeadModuleScssModule;
