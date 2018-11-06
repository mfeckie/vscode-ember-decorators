import { EmberCompletion } from "./ember-completion";
import { ImportType } from "./auto-import";

export const controllerCompletions = [
  new EmberCompletion(
    "controller",
    "Adds a @controller decorator",
    "@controller $1;",
    ImportType.Controller
  )
];