import {
  CompletionItem,
  CompletionItemKind,
  SnippetString,
  MarkdownString
} from "vscode";

import { ImportType } from "./auto-import";

export class ServiceCompletionsProvider implements CompletionItem {
  label = "service";
  kind = CompletionItemKind.Snippet;
  documentation = new MarkdownString(`
  Adds a decorated service to your class in the form

  \`\`\`
  @service {name}: {Type};
  \`\`\`

  Will automatically add an import to the top of your file if it doesn't already exist
  `);
  insertText = new SnippetString("@service $1: $2;");
  command = {
    title: "AutoImport",
    command: "decorators.autoImport",
    arguments: [ImportType.Service]
  };
}
