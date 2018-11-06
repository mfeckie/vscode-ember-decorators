import { ImportType } from "./auto-import";

export function commandBuilder(argument: ImportType) {
  return {
    title: "AutoImport",
    command: "decorators.autoImport",
    arguments: [argument]
  };
}
