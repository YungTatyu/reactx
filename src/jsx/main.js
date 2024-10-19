/ ** @jsx h */

function h(tag, props, ...children) {
  return {
    tag,
    props: props || {},
    children: children.flat()
  };
}

const element = (
  <div id="container">
    <h1>Hello, JSX outside React!</h1>
    <p>This is rendered using hyperscript and Babel.</p>
  </div>
);

