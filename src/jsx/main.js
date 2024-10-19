/ ** @jsx h */
// hypertext + javascript = hyperscript
function h(tag, props, ...children) {
  return {
    tag,
    props: props || {},
    children: children.flat()
  };
}

function render(vnode) {
  // vnode is string, convert to text nodes
  if (vnode.split()) {
    return document.createTextNode(vnode);
  }

}
