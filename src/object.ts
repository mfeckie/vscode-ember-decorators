import { EmberCompletion } from "./ember-completion";
import { ImportType } from "./auto-import";

export const objectCompletions = [
  new EmberCompletion(
    "action",
    "Adds an @action decorator",
    "@action\n$1() {\n$2\n}\n",
    ImportType.ObjectAction
  ),
  new EmberCompletion(
    "computed",
    "Adds an @computed decorator",
    "@computed('$1')\nget $2() {\n$3\n}\n",
    ImportType.ObjectComputed
  ),
  new EmberCompletion(
    "computedSet",
    "Adds an @computed decorator with setter",
    "@computed('$1')\nget $2() {\n$3\n}\nset $2(value) {}",
    ImportType.ObjectComputed
  ),
  new EmberCompletion(
    "observes",
    "Adds an @observes decorator",
    "@observes('$1')\n$2() { $3 }",
    ImportType.ObjectObserves
  ),
  new EmberCompletion(
    "unobserves",
    "Adds an @unobserves decorator",
    "@unobserves('$1') $2;",
    ImportType.ObjectUnObserves
  ),
  new EmberCompletion(
    "on",
    "Add an @on decorator",
    "@on('$1')\n$2() { $3 }",
    ImportType.ObjectOn
  ),
  new EmberCompletion(
    "off",
    "Adds an @off decorator",
    "@off('$1') $2;",
    ImportType.ObjectOff
  ),
  new EmberCompletion(
    "volatile",
    "Adds a @volatile decorator",
    "@volatile",
    ImportType.ObjectVolatile
  )
];
