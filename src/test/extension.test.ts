//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from "assert";
import { Replacer } from "../auto-import";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
const existingDataImport = `
import { service } from "@ember-decorators/service";
import { attr } from '@ember-decorators/data';
`;

const withAddedImport = `
import { service } from "@ember-decorators/service";
import { attr, hasMany } from '@ember-decorators/data';
`;

const noExistingDataImport = `
import { service } from "@ember-decorators/service";
`;

const withNewImport = `import { hasMany } from '@ember-decorators/data';
`;

suite("Extension Tests", function() {
  test("Adding import to ember-data", function() {
    const finder = new Replacer({
      importName: "hasMany",
      importModule: "data"
    });
    const replacement = finder.updateImport(existingDataImport)!;
    assert.ok(replacement.replace);
    assert.equal(replacement.text, withAddedImport);
  });

  test("with no existing import", function() {
    const finder = new Replacer({
      importName: "hasMany",
      importModule: "data"
    });
    const replacement = finder.updateImport(noExistingDataImport)!;

    assert.ok(!replacement.replace);
    assert.equal(replacement.text, withNewImport);
  });

  test("with same import", function() {
    const finder = new Replacer({
      importName: "service",
      importModule: "service"
    });
    const replacement = finder.updateImport(noExistingDataImport);

    assert.ok(!replacement);
  });
});
