declare namespace ModalModuleScssNamespace {
  export interface IModalModuleScss {
    btns: string;
    head: string;
    modal: string;
  }
}

declare const ModalModuleScssModule: ModalModuleScssNamespace.IModalModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ModalModuleScssNamespace.IModalModuleScss;
};

export = ModalModuleScssModule;
