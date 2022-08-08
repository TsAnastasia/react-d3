declare namespace TreeGraphModuleScssNamespace {
  export interface ITreeGraphModuleScss {
    graph: string;
  }
}

declare const TreeGraphModuleScssModule: TreeGraphModuleScssNamespace.ITreeGraphModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TreeGraphModuleScssNamespace.ITreeGraphModuleScss;
};

export = TreeGraphModuleScssModule;
