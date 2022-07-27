declare namespace HomeFontsModuleScssNamespace {
  export interface IHomeFontsModuleScss {
    black: string;
    bold: string;
    extrabold: string;
    extralight: string;
    light: string;
    medium: string;
    openSans: string;
    regular: string;
    roboto: string;
    semibold: string;
    thin: string;
  }
}

declare const HomeFontsModuleScssModule: HomeFontsModuleScssNamespace.IHomeFontsModuleScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HomeFontsModuleScssNamespace.IHomeFontsModuleScss;
};

export = HomeFontsModuleScssModule;
