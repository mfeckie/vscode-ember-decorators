import * as vscode from "vscode";

export enum ImportType {
  Service = "service"
}

export function autoImporter(type: ImportType) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const document = editor.document;
  const text = document.getText();

  const decoratorImport = edits[type];
  const found = decoratorImport.regex.test(text); 

  if (!found) {
    editor.edit( (edit) => {
      edit.insert(
        new vscode.Position(0, 0),
        decoratorImport.insertText
      );
    });
  }
}

interface ImportEdit {
  regex: RegExp;
  insertText: string;
}

const edits: {
  [key: string]: ImportEdit;
} = {
  service: {
    regex: /import .*(service).*@ember-decorators/,
    insertText: "import { service } from '@ember-decorators/service';\n"
  }
};
