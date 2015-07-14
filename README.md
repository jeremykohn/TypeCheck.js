# TypeCheck.js

TypeCheck is an improved version of JavaScript's `typeof` operator. 

For example, `typeof 12.0` simply returns 'number'. `TypeCheck.getType(12.0)` provides more detailed information as well: `['number', 'finite', 'integer']`.

And for an array, `typeof []` in plain JavaScript just returns `'object'`. JavaScript arrays are also objects, so `TypeCheck.getType([])` returns both: `['object', 'array']`.

Here are the types, and subtypes of each type, that TypeCheck recognizes:

| Type        | Subtypes                              |
|-------------|---------------------------------------|
| 'number'    | 'infinite', 'finite', 'integer'       |
| 'string'    | 'numericString', 'integerString'      |
| 'object'    | 'array', 'function', 'date', 'regexp' |
| 'boolean'   |                                       |
| 'undefined' |                                       |
| 'null'      |                                       |
| 'NaN'       |                                       |

These are mostly consistent with the types returned by the `typeof` operator.

However, unlike `typeof` in plain JavaScript:

- TypeCheck has separate types for `null` and `NaN`, whereas `typeof` considers `null` to be an 'object' and `NaN` (Not A Number) to be a 'number'.
- TypeCheck classifies 'function' as a subtype of 'object', whereas `typeof` considers it a 'function' only.
- TypeCheck also classifies 'regexp' as a subtype of 'object', whereas `typeof` in some older browsers considers a regexp to be a 'function' instead.

### Usage

TypeCheck provides the following methods:

```
TypeCheck.getTypes(valueToCheck);
```

getTypes returns an array of strings, which lists all of `valueToCheck`'s types and subtypes.

```
TypeCheck.typeMatch(valueToCheck, typeOrSubtype)
```

typeMatch returns `true` if the array returned by `TypeCheck.getTypes(valueToCheck)` includes `typeOrSubtype`.
