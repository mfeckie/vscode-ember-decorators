import { ImportType } from "./auto-import";
import { EmberCompletion } from "./ember-completion";

export const componentCompletions = [
  new EmberCompletion(
    "attribute",
    "insert @attribute decorator",
    "@attribute('$1') $2 = '$3';",
    ImportType.ComponentAttribute
  ),
  new EmberCompletion(
    "attributeComputed",
    "insert @attribute decorator",
    "@attribute\n@computed\nget $1() {\n$2\n}\n",
    ImportType.ComponentAttribute
  ),
  new EmberCompletion(
    "tagName",
    "insert @tagName decorator",
    "@tagName('$1')",
    ImportType.ComponentTagName
  ),
  new EmberCompletion(
    "className",
    "Insert @className decorator",
    "@className('$1', '$2') $3 = $4;",
    ImportType.ComponentClassName
  ),
  new EmberCompletion(
    "classNameComputed",
    "Insert @className decorator",
    "@className\n@computed\nget $1() {\n$2\n}\n",
    ImportType.ComponentClassName
  ),
  new EmberCompletion(
    "classNames",
    "Insert @classNames decorator",
    "@classNames('$1')",
    ImportType.ComponentClassNames
  ),
  new EmberCompletion(
    "layout",
    "Insert @layout decorator",
    "@layout($1)",
    ImportType.ComponentLayout
  )
];
