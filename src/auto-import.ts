import * as vscode from "vscode";

export enum ImportType {
  ComponentAttribute,
  ComponentClassName,
  ComponentClassNames,
  ComponentLayout,
  ComponentTagName,
  ComputedMacro,
  ComputedAlias,
  ComputedAnd,
  ComputedBool,
  ComputedCollect,
  ComputedDeprecatingAlias,
  ComputedEmpty,
  ComputedEqual,
  ComputedFilter,
  ComputedFilterBy,
  ComputedGt,
  ComputedGte,
  ComputedIntersect,
  ComputedLt,
  ComputedLte,
  ComputedMap,
  ComputedMapBy,
  ComputedMatch,
  ComputedMax,
  ComputedMin,
  ComputedNone,
  ComputedNot,
  ComputedNotEmpty,
  ComputedOr,
  ComputedOverridableReads,
  ComputedReads,
  ComputedSetDiff,
  ComputedSort,
  ComputedSum,
  ComputedUnion,
  ComputedUniq,
  ComputedUniqBy,
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
  Service
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
    importName: "inject as service",
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
  },
  [ImportType.ComputedMacro]: {
    importName: "macro",
    importModule: "object/computed"
  },
  [ImportType.ComputedAlias]: {
    importName: "alias",
    importModule: "object/computed"
  },
  [ImportType.ComputedAnd]: {
    importName: "and",
    importModule: "object/computed"
  },
  [ImportType.ComputedBool]: {
    importName: "bool",
    importModule: "object/computed"
  },
  [ImportType.ComputedCollect]: {
    importName: "collect",
    importModule: "object/computed"
  },
  [ImportType.ComputedDeprecatingAlias]: {
    importName: "deprecatingAlias",
    importModule: "object/computed"
  },
  [ImportType.ComputedEmpty]: {
    importName: "empty",
    importModule: "object/computed"
  },
  [ImportType.ComputedEqual]: {
    importName: "equal",
    importModule: "object/computed"
  },
  [ImportType.ComputedFilter]: {
    importName: "filter",
    importModule: "object/computed"
  },
  [ImportType.ComputedFilterBy]: {
    importName: "filterBy",
    importModule: "object/computed"
  },
  [ImportType.ComputedGt]: {
    importName: "gt",
    importModule: "object/computed"
  },
  [ImportType.ComputedGte]: {
    importName: "gte",
    importModule: "object/computed"
  },
  [ImportType.ComputedIntersect]: {
    importName: "intersect",
    importModule: "object/computed"
  },
  [ImportType.ComputedLt]: {
    importName: "lt",
    importModule: "object/computed"
  },
  [ImportType.ComputedLte]: {
    importName: "lte",
    importModule: "object/computed"
  },
  [ImportType.ComputedMap]: {
    importName: "map",
    importModule: "object/computed"
  },
  [ImportType.ComputedMapBy]: {
    importName: "mapBy",
    importModule: "object/computed"
  },
  [ImportType.ComputedMatch]: {
    importName: "match",
    importModule: "object/computed"
  },
  [ImportType.ComputedMax]: {
    importName: "max",
    importModule: "object/computed"
  },
  [ImportType.ComputedMin]: {
    importName: "min",
    importModule: "object/computed"
  },
  [ImportType.ComputedNone]: {
    importName: "none",
    importModule: "object/computed"
  },
  [ImportType.ComputedNot]: {
    importName: "not",
    importModule: "object/computed"
  },
  [ImportType.ComputedNotEmpty]: {
    importName: "notEmpty",
    importModule: "object/computed"
  },
  [ImportType.ComputedOr]: {
    importName: "or",
    importModule: "object/computed"
  },
  [ImportType.ComputedOverridableReads]: {
    importName: "overridableReads",
    importModule: "object/computed"
  },
  [ImportType.ComputedReads]: {
    importName: "reads",
    importModule: "object/computed"
  },
  [ImportType.ComputedSetDiff]: {
    importName: "setDiff",
    importModule: "object/computed"
  },
  [ImportType.ComputedSort]: {
    importName: "sort",
    importModule: "object/computed"
  },
  [ImportType.ComputedSum]: {
    importName: "sum",
    importModule: "object/computed"
  },
  [ImportType.ComputedUnion]: {
    importName: "union",
    importModule: "object/computed"
  },
  [ImportType.ComputedUniq]: {
    importName: "uniq",
    importModule: "object/computed"
  },
  [ImportType.ComputedUniqBy]: {
    importName: "uniqBy",
    importModule: "object/computed"
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
