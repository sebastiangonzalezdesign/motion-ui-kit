declare module '*?component' {
  import * as React from 'react';
  const Component: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
  export default Component;
}

declare module '*.svg' {
  import * as React from 'react';
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}
