
import { VNode, VNodeProps } from "./vnode.ts";

// hypertext + javascript = hyperscript
function h(tag: string, props: VNodeProps, ...children: VNode | string[]): VNode {
  return {
    tag,
    props: props || {},
    children: children.flat()
  };
}

// function h(tag: string, props, ...children) {
//   return {
//     tag,
//     props: props || {},
//     children: children.flat()
//   };
// }

// function render(vnode) {
//   // vnode is string, convert to text nodes
//   if (vnode.split()) {
//     return document.createTextNode(vnode);
//   }
//
// }
