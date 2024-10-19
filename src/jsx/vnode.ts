
/** virtual DOM node */
export interface VNode {
  tag: string;
  props: VNodeProps;
  children: (VNode | string)[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type VNodeProps = Record<string, any>;

