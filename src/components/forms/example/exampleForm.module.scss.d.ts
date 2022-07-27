declare namespace ExampleFormModuleScssNamespace {
  export interface IExampleFormModuleScss {
    content: string;
    root: string;
  }
}

declare const ExampleFormModuleScssModule: ExampleFormModuleScssNamespace.IExampleFormModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ExampleFormModuleScssNamespace.IExampleFormModuleScss;
};

export = ExampleFormModuleScssModule;
