import {
  CompletionItem,
  CompletionItemKind,
  MarkdownString,
  SnippetString
} from "vscode";
import { ImportType } from "./auto-import";
import { commandBuilder } from "./utils";

export class EmberDataAttrCompletionsProvider implements CompletionItem {
  label = "attr";
  kind = CompletionItemKind.Snippet;
  documentation = new MarkdownString(`
  Adds a decorated attr to your class in the form

  \`\`\`
  @attr('{type}') {name}: {Type};
  \`\`\`

  Will automatically add an import to the top of your file if it doesn't already exist
  `);
  insertText = new SnippetString("@attr('$1') $2: $3;");
  command = commandBuilder(ImportType.EmberDataAttr);
}

export class EmberDataHasManyCompletionsProvider implements CompletionItem {
  label = "hasMany";
  kind = CompletionItemKind.Snippet;
  documentation = new MarkdownString(`
  Adds a decorated hasMany to your class in the form

  \`\`\`
  @hasMany('{type}') {name}: {Type};
  \`\`\`

  Will automatically add an import to the top of your file if it doesn't already exist
  `);
  insertText = new SnippetString("@hasMany('$1') $2: $3;");
  command = commandBuilder(ImportType.EmberDataHasMany);
}

export class EmberDataBelongsToCompletionsProvider implements CompletionItem {
  label = "belongsTo";
  kind = CompletionItemKind.Snippet;
  documentation = new MarkdownString(`
  Adds a decorated belongsTo to your class in the form

  \`\`\`
  @belongsTo('{type}') {name}: {Type};
  \`\`\`

  Will automatically add an import to the top of your file if it doesn't already exist
  `);
  insertText = new SnippetString("@belongsTo('$1') $2: $3;");
  command = commandBuilder(ImportType.EmberDataBelongsTo);
}
