import { CompletionItem, CompletionItemKind, SnippetString } from "vscode";
import { ImportType } from "./auto-import";
import { commandBuilder } from "./utils";

class Item implements CompletionItem {
  label: string;
  kind = CompletionItemKind.Snippet;
  detail: string;
  insertText: SnippetString;
  command?: import("vscode").Command | undefined;
  constructor(
    label: string,
    detail: string,
    snippet: string,
    argument: ImportType
  ) {
    this.label = label;
    this.detail = detail;
    this.insertText = new SnippetString(snippet);
    this.command = commandBuilder(argument);
  }
}

export const componentCompletions = [
  new Item(
    "attribute",
    "insert @attribute decorator",
    "@attribute('$1') $2 = '$3';",
    ImportType.ComponentAttribute
  ),
  new Item(
    "attributeComputed",
    "insert @attribute decorator",
    "@attribute\n@computed\nget $1() {\n$2\n}\n",
    ImportType.ComponentAttribute
  ),
  new Item(
    "tagName",
    "insert @tagName decorator",
    "@tagName('$1')",
    ImportType.ComponentTagName
  ),
  new Item(
    "className",
    "Insert @className decorator",
    "@className('$1', '$2') $3 = $4;",
    ImportType.ComponentClassName
  ),
  new Item(
    "classNameComputed",
    "Insert @className decorator",
    "@className\n@computed\nget $1() {\n$2\n}\n",
    ImportType.ComponentClassName
  ),
  new Item(
    "classNames",
    "Insert @classNames decorator",
    "@classNames('$1')",
    ImportType.ComponentClassNames
  ),
  new Item(
    "layout",
    "Insert @layout decorator",
    "@layout($1)",
    ImportType.ComponentLayout
  )
];
