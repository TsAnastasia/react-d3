declare namespace TreeGraphNodeModuleScssNamespace {
  export interface ITreeGraphNodeModuleScss {
    add: string;
    delete: string;
    edit: string;
    name: string;
    node: string;
    root: string;
  }
}

declare const TreeGraphNodeModuleScssModule: TreeGraphNodeModuleScssNamespace.ITreeGraphNodeModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TreeGraphNodeModuleScssNamespace.ITreeGraphNodeModuleScss;
};

export = TreeGraphNodeModuleScssModule;
