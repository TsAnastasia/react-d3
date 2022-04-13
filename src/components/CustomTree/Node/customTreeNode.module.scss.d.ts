declare namespace CustomTreeNodeModuleScssNamespace {
  export interface ICustomTreeNodeModuleScss {
    node: string;
  }
}

declare const CustomTreeNodeModuleScssModule: CustomTreeNodeModuleScssNamespace.ICustomTreeNodeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CustomTreeNodeModuleScssNamespace.ICustomTreeNodeModuleScss;
};

export = CustomTreeNodeModuleScssModule;
