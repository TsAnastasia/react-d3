declare namespace HeaderMenuModueScssNamespace {
  export interface IHeaderMenuModueScss {
    root: string;
  }
}

declare const HeaderMenuModueScssModule: HeaderMenuModueScssNamespace.IHeaderMenuModueScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderMenuModueScssNamespace.IHeaderMenuModueScss;
};

export = HeaderMenuModueScssModule;
