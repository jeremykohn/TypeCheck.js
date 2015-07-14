# TypeCheck.js

TypeCheck is an improved version of JavaScript's `typeof` operator. It takes any value and returns an array of strings that describe the value's type and subtypes.

For example, `typeof 12.3` in plain JavaScript simply returns `'number'`. TypeCheck provides more detailed information as well: `['number', 'finite', 'float']`.

And for an array, `typeof` returns `'object'` rather than `'array'`. It's true that JavaScript arrays are also objects, so TypeCheck returns both: `['object', 'array']`.

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

However, unlike in plain JavaScript:

- TypeCheck does not consider `null` to be an 'object' or `NaN` (Not A Number) to be a 'number'.
- Typecheck classifies 'function' as a subtype of 'object', although `typeof` considers it a 'function' only.
- TypeCheck also classifies 'regexp' as a subtype of 'object', although `typeof` in some older browsers consider a regexp to be a 'function' instead.

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
