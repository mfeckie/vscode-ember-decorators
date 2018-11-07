import * as vscode from "vscode";

const attrRegex = /^\s+(\w+):.*(attr\(.*\)).*$/gm;

export function convertAttrs() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const document = editor.document;

  const text = document.getText();
  const replaced = text.replace(attrRegex, "  @$2 $1;");

  editor.edit(edit => {
    const range = new vscode.Range(0, 0, document.lineCount, 0);
    edit.replace(range, replaced);
  });
}
