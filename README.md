# TypeCheck.js

TypeCheck is an improved version of JavaScript's `typeof` operator.

For example, `typeof 12.3` in plain JavaScript returns `'number'`. TypeCheck detects not just the type of `12.3`, but also its subtypes: `['number', 'finite', 'float']`.

And for an array, `typeof` returns `'object'` rather than `'array'`. It's true that arrays in JavaScript are a type of object, so TypeCheck returns both: `['object', 'array']`.

Here are the types and subtypes that TypeCheck recognizes:

| Type      | Subtypes of that type            |
|-----------|----------------------------------|
| object    | array, function, date, regexp    |
| number    | infinite, finite, integer, float |
| string    | decimalString, anyNumericString  |
| boolean   |                                  |
| undefined |                                  |
| null      |                                  |
| NaN       |                                  |

These are mostly consistent with the types returned by the `typeof` operator.

However, unlike `typeof` in plain JavaScript:

- TypeCheck does not consider `null` to be an object or `NaN` (Not A Number) to be a number.
- TypeCheck considers any function to be both a function and an object, not just a function.

### Usage

TypeCheck provides the following methods:

```
TypeCheck.getTypes(valueToCheck);
```

getTypes returns an array (of strings) that includes all of `valueToCheck`'s types and subtypes.

```
TypeCheck.typeMatch(valueToCheck, typeOrSubtype)
```

typeMatch returns `true` if the array returned by `TypeCheck.getTypes(valueToCheck)` includes `typeOrSubtype`.
