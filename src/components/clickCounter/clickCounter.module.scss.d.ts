declare namespace ClickCounterModuleScssNamespace {
  export interface IClickCounterModuleScss {
    test: string;
  }
}

declare const ClickCounterModuleScssModule: ClickCounterModuleScssNamespace.IClickCounterModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ClickCounterModuleScssNamespace.IClickCounterModuleScss;
};

export = ClickCounterModuleScssModule;
