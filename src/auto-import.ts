import * as vscode from "vscode";

export enum ImportType {
  ComponentAttribute,
  ComponentClassName,
  ComponentClassNames,
  ComponentLayout,
  ComponentTagName,
  Controller,
  EmberDataAttr,
  EmberDataBelongsTo,
  EmberDataHasMany,
  ObjectAction,
  ObjectComputed,
  ObjectObserves,
  ObjectOff,
  ObjectOn,
  ObjectReadOnly,
  ObjectUnObserves,
  ObjectVolatile,
  Service,
}

export function autoImporter(type: ImportType) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const document = editor.document;
  const text = document.getText();

  const decoratorImport = edits[type];

  const replacer = new Replacer(decoratorImport);
  const replacement = replacer.updateImport(text);

  if (replacement && replacement.replace) {
    return editor.edit(edit => {
      const range = new vscode.Range(0, 0, document.lineCount, 0);
      edit.replace(range, replacement.text);
    });
  }

  return editor.edit(edit => {
    editor.edit(editn => {
      edit.insert(new vscode.Position(0, 0), replacement!.text);
    });
  });
}

interface ImportEdit {
  importName: string;
  importModule: string;
}

const edits: {
  [key: string]: ImportEdit;
} = {
  [ImportType.Service]: {
    importName: "service",
    importModule: "service"
  },
  [ImportType.EmberDataAttr]: {
    importName: "attr",
    importModule: "data"
  },
  [ImportType.EmberDataHasMany]: {
    importName: "hasMany",
    importModule: "data"
  },
  [ImportType.EmberDataBelongsTo]: {
    importName: "belongsTo",
    importModule: "data"
  },
  [ImportType.ComponentTagName]: {
    importName: "tagName",
    importModule: "component"
  },
  [ImportType.ComponentAttribute]: {
    importName: "attribute",
    importModule: "component"
  },
  [ImportType.ComponentClassName]: {
    importName: "className",
    importModule: "component"
  },
  [ImportType.ComponentClassNames]: {
    importName: "classNames",
    importModule: "component"
  },
  [ImportType.ComponentLayout]: {
    importName: "layout",
    importModule: "component"
  },
  [ImportType.ObjectAction]: {
    importName: "action",
    importModule: "object"
  },
  [ImportType.ObjectComputed]: {
    importName: "computed",
    importModule: "object"
  },
  [ImportType.ObjectObserves]: {
    importName: "observes",
    importModule: "object"
  },
  [ImportType.ObjectUnObserves]: {
    importName: "unobserves",
    importModule: "object"
  },
  [ImportType.ObjectOn]: {
    importName: "on",
    importModule: "object"
  },
  [ImportType.ObjectOff]: {
    importName: "off",
    importModule: "object"
  },
  [ImportType.ObjectVolatile]: {
    importName: "volatile",
    importModule: "object"
  },
  [ImportType.Controller]: {
    importName: "controller",
    importModule: "controller"
  }
};

export class Replacer {
  finder: RegExp;
  importName: string;
  importModule: string;
  constructor(importer: ImportEdit) {
    this.importModule = importer.importModule;
    this.importName = importer.importName;
    const regex = new RegExp(
      `import \{(.*)\} from ['"]@ember-decorators/${this.importModule}['"];`
    );

    this.finder = regex;
  }

  updateImport(searchString: string) {
    const matches = this.finder.exec(searchString);

    if (!matches) {
      return {
        replace: false,
        text: `import { ${this.importName} } from '@ember-decorators/${
          this.importModule
        }';\n`
      };
    }

    const [, importNames] = matches;
    const withImport = importNames.split(",").map(item => item.trim());

    if (withImport.includes(this.importName)) {
      return;
    }

    withImport.push(this.importName);

    const newImports = withImport.sort().join(", ");

    const newImport = `import { ${newImports} } from '@ember-decorators/${
      this.importModule
    }';`;

    return {
      replace: true,
      text: searchString.replace(matches[0], newImport)
    };
  }
}
