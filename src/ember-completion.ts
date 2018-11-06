import { CompletionItem, CompletionItemKind, SnippetString } from "vscode";
import { ImportType } from "./auto-import";
import { commandBuilder } from "./utils";

export class EmberCompletion implements CompletionItem {
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
