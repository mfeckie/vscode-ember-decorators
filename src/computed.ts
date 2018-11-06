import { EmberCompletion } from "./ember-completion";
import { ImportType } from "./auto-import";

function buildSimpleCompletion(label: string, importType: ImportType) {
  return new EmberCompletion(
    label,
    `Inserts an @${label} decorator`,
    `@${label}('\${1:property}') \${2:name}: \${3:Type};`,
    importType
  );
}

function complexCompletion(
  label: string,
  snippet: string,
  importType: ImportType
) {
  return new EmberCompletion(
    label,
    `Inserts an @${label} decorator`,
    snippet,
    importType
  );
}

export const computedCompletions = [
  new EmberCompletion(
    "macro",
    "Creates a decorator from a computed macro",
    "const  $1 = macro($2);",
    ImportType.ComputedMacro
  ),
  buildSimpleCompletion("alias", ImportType.ComputedAlias),
  buildSimpleCompletion("and", ImportType.ComputedAnd),
  buildSimpleCompletion("collect", ImportType.ComputedCollect),
  new EmberCompletion(
    "deprecatingAlias",
    "Inserts a @deprecatingAlias decorator",
    `@deprecatingAlias('$1', {
      id: '$2',
      until: "$3",
      url: "$4"
    }) $5;`,
    ImportType.ComputedDeprecatingAlias
  ),
  buildSimpleCompletion("empty", ImportType.ComputedEmpty),
  complexCompletion(
    "equal",
    "@equal('$1', '$2') $3: boolean;",
    ImportType.ComputedEqual
  ),
  complexCompletion(
    "filter",
    `@filter('$1')
  $2($1, index, array) {
    $3
  }`,
    ImportType.ComputedFilter
  ),
  complexCompletion(
    "filterBy",
    "@filterBy('${1:collection}', '${2:property}', ${3:value}) ${4:name}: ${5:Type};",
    ImportType.ComputedFilterBy
  ),
  complexCompletion(
    "gt",
    "@gt('${1:property}', ${2:value}) ${3:name}: boolean;",
    ImportType.ComputedGt
  ),
  complexCompletion(
    "gte",
    "@gte('${1:property}', ${2:value}) ${3:name}: boolean;",
    ImportType.ComputedGte
  ),
  complexCompletion(
    "intersect",
    "@intersect('${1:collection1}', '${2:collection2}') ${3:name}: ${4:Type};",
    ImportType.ComputedIntersect
  ),
  complexCompletion(
    "lt",
    "@lt('${1:property}', ${2:value}) ${3:name}: boolean;",
    ImportType.ComputedLt
  ),
  complexCompletion(
    "lte",
    "@lte('${1:property}', ${2:value}) ${3:name}: boolean;",
    ImportType.ComputedLte
  ),
  complexCompletion(
    "map",
    "@map('$1')\n${2:name}($1, index) {\n\n}",
    ImportType.ComputedMap
  ),
  complexCompletion(
    "mapBy",
    "@mapBy('${1:collection}', '${2:property}') ${3:name}: ${4:Type};",
    ImportType.ComputedMapBy
  ),
  complexCompletion(
    "match",
    "@match('${1:property}', /${2:regex}/) ${3:name}: ${4:Type};",
    ImportType.ComputedMatch
  ),
  buildSimpleCompletion("max", ImportType.ComputedMax),
  buildSimpleCompletion("min", ImportType.ComputedMin),
  buildSimpleCompletion("none", ImportType.ComputedNone),
  buildSimpleCompletion("not", ImportType.ComputedNot),
  buildSimpleCompletion("notEmpty", ImportType.ComputedNotEmpty),
  complexCompletion(
    "or",
    "@or('${1:property1}', '${2:property2}') ${3:name};",
    ImportType.ComputedOr
  ),
  buildSimpleCompletion(
    "overridableReads",
    ImportType.ComputedOverridableReads
  ),
  buildSimpleCompletion("reads", ImportType.ComputedReads),
  buildSimpleCompletion("setDiff", ImportType.ComputedSetDiff),
  complexCompletion(
    "sort",
    `@sort('\${1:collection}')
  \${2:name}(a, b) {
    $3
  }`,
    ImportType.ComputedSort
  ),
  buildSimpleCompletion("sum", ImportType.ComputedSum),
  buildSimpleCompletion("union", ImportType.ComputedUnion),
  buildSimpleCompletion("uniq", ImportType.ComputedUniq),
  complexCompletion(
    "uniqBy",
    "@uniqBy('${1:collection}', '${2:property}') ${3:name};",
    ImportType.ComputedUniqBy
  )
];
