"use strict";
import * as vscode from "vscode";
import { ServiceCompletionsProvider } from "./services/service";
import { autoImporter, ImportType } from "./auto-import";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let autoImport = vscode.commands.registerCommand(
    "decorators.autoImport",
    (type: ImportType) => {
      autoImporter(type);
    }
  );

  let completionsProvider = vscode.languages.registerCompletionItemProvider(
    "typescript",
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
      ) {
        return [new ServiceCompletionsProvider()];
      }
    }
  );

  context.subscriptions.push(completionsProvider);
  context.subscriptions.push(autoImport);
}

// this method is called when your extension is deactivated
export function deactivate() {}