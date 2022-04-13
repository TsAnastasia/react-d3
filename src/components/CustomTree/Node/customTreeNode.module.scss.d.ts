declare namespace CustomTreeNodeModuleScssNamespace {
  export interface ICustomTreeNodeModuleScss {
    buton_add: string;
    buton_delete: string;
    buton_edit: string;
    button: string;
    node: string;
    node_blue: string;
    root: string;
  }
}

declare const CustomTreeNodeModuleScssModule: CustomTreeNodeModuleScssNamespace.ICustomTreeNodeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CustomTreeNodeModuleScssNamespace.ICustomTreeNodeModuleScss;
};

export = CustomTreeNodeModuleScssModule;
