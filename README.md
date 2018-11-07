# ember-decorators README

Provides snippets and auto-imports for using `ember-decorators` with typescript files

## Features

- Provides decorators snippets and auto import for all of the decrators provided by http://ember-decorators.github.io/ember-decorators/latest/docs/
- Convert attr to @attr for ember data contexts!

Take your object based attr's and convert them to decorated class attrs. Currently doesn't attempt to move them to the class portion of this declaration, but will do the majority of the grunt work for you.

consider the following

```ts
export default class Foo extends Model.extend({
  thing: attr(),
  foo: attr('string'),
  baz: attr('number')
}) {}
```

Step 1, move your `attr`s into the class body (which will cause lots of underlined errors! )  

```ts
export default class Foo extends Model.extend({}) {
  thing: attr(),
  foo: attr('string'),
  baz: attr('number')
}
```

Then run `Ember Decorators: Convert attr to @attr`, which will then do a best attempt at converting attrs.  

```ts
export default class Foo extends Model.extend({

}) {
	attr() thing;
	attr('string') foo;
  attr('number') baz;
}
```

## Known Issues

Does not provide support for javascript currently, only TypeScript is supported.
