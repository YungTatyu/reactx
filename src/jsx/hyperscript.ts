import { VNode, VNodeProps } from "./vnode";

/** hypertext + javascript = hyperscript
 ex) jsx
 <div id="container">
    <h1>Hello, JSX!</h1>
    <p>This is a paragraph.</p>
  </div>

ex) VNode
{
  "tag": "div",
  "props": {
    "id": "container"
  },
  "children": [
    {
      "tag": "h1",
      "props": {},
      "children": ["Hello, JSX!"]
    },
    {
      "tag": "p",
      "props": {},
      "children": ["This is a paragraph."]
    }
  ]
}
 *
*/
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

function render(vnode: VNode | string): HTMLElement | Text {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const tag = document.createElement(vnode.tag);

  // set attribute to tag
  // ex) <div class="js-body">
  const props = vnode.props || {};
  Object.keys(props).forEach((key) => tag.setAttribute(key, props[key]));

  // add children tag to parent tag
  const children = vnode.children || [];
  children.forEach((child) => tag.appendChild(render(child)));
  return tag;
}
