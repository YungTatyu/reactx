
/** virtual DOM node */
export interface VNode {
  tag: string;
  props: VNodeProps;
  children: (VNode | string)[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface VNodeProps {
  [key: string]: any;
}

