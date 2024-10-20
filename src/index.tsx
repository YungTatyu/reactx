
import { render } from "./jsx/hyperscript";
import { app } from "./app"

function main() {
  const root = document.getElementById("root");
  root?.appendChild(render(app));
  return 0
}

main();
