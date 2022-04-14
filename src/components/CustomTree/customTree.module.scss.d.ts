declare namespace CustomTreeModuleScssNamespace {
  export interface ICustomTreeModuleScss {
    root: string;
  }
}

declare const CustomTreeModuleScssModule: CustomTreeModuleScssNamespace.ICustomTreeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CustomTreeModuleScssNamespace.ICustomTreeModuleScss;
};

export = CustomTreeModuleScssModule;
