declare namespace FormButtonsModuleScssNamespace {
  export interface IFormButtonsModuleScss {
    root: string;
  }
}

declare const FormButtonsModuleScssModule: FormButtonsModuleScssNamespace.IFormButtonsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: FormButtonsModuleScssNamespace.IFormButtonsModuleScss;
};

export = FormButtonsModuleScssModule;
