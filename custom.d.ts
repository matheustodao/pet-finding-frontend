declare module '*.png';

declare module '*.svg' {
  export const MSVGs: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}
