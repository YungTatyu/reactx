import { VNode, VNodeProps } from "./vnode.ts";

const STRING = "string";

// hypertext + javascript = hyperscript
function h(
  tag: string,
  props: VNodeProps,
  ...children: (VNode | string)[]
): VNode {
  return {
    tag,
    props: props || {},
    children: children.flat() as (VNode | string)[],
  };
}

// function render(vnode: VNode | string): VNode {
//   if (typeof vnode === STRING) {
//     return document.createTextNode(vnode);
//   }
//   const tag = document.createElement(vnode.tag);
//
// }
