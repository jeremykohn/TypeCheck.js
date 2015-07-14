/*

TypeCheck.js
Version 0.1

Copyright (c) 2015 Jeremy Kohn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

/*

Usage: 

typeCheck.getTypes(valueToCheck)
  valueToCheck: Any JavaScript value
  Returns an array of strings, that lists the types and subtypes of valueToCheck.
  
typeCheck.typeMatch(valueToCheck, typeOrSubtype)
  valueToCheck: Any JavaScript value
  typeOrSubtype: string
  Returns true if the string typeOrSubtype is present in the array returned by getTypes(valueToCheck).

Types and subtypes recognized by TypeCheck:

| Type        | Subtypes                              |
|-------------|---------------------------------------|
| 'number'    | 'infinite', 'finite', 'integer'       |
| 'string'    | 'numericString', 'integerString'      |
| 'object'    | 'array', 'function', 'date', 'regexp' |
| 'boolean'   |                                       |
| 'undefined' |                                       |
| 'null'      |                                       |
| 'NaN'       |                                       |

*/


var typeCheck = (function () {
    "use strict";

    function getTypes(value) {

        var typesAndSubtypes = [];
        var nativeType = typeof value;
        var objectType = Object.prototype.toString.call(value);

        // Native types from typeof are 'undefined', 'boolean', 'number', 'string', 'function', and 'object'.
        
        if (nativeType === 'undefined') {
            typesAndSubtypes = ['undefined'];

        } else if (nativeType === 'boolean') {
            typesAndSubtypes = ['boolean'];

        } else if (nativeType === 'number') {
            if (value !== value) {
                typesAndSubtypes = ['NaN'];
            } else {
                typesAndSubtypes.push('number');

                if (!isFinite(value)) {
                    typesAndSubtypes.push('infinite');
                } else {
                    typesAndSubtypes.push('finite');
                    if (parseInt(value, 10) === parseFloat(value)) {
                        typesAndSubtypes.push('integer');
                    }
                }
            }

        } else if (nativeType === 'string') {
            typesAndSubtypes.push('string');
            if (!isNaN(value)) {
                typesAndSubtypes.push('numericString');
                if (parseFloat(value) === parseInt(value, 10)) {
                    typesAndSubtypes.push('integerString');
                }
            }

        } else {
            if (value === null) {
                typesAndSubtypes = ['null'];
            } else {
                typesAndSubtypes.push('object');
                switch (objectType) {
                case '[object Function]':
                    typesAndSubtypes.push('function');
                    break;
                case '[object Array]':
                    typesAndSubtypes.push('array');
                    break;
                case '[object RegExp]':
                    typesAndSubtypes.push('regexp');
                    break;
                case '[object Date]':
                    typesAndSubtypes.push('date');
                    break;
                }
            }
        }

      console.log(typesAndSubtypes);
        return typesAndSubtypes;
    }

    function typeMatch(value, typeOrSubtype) {
        try {
            if (typeof typeOrSubtype === 'string') {
                return (getTypes(value)).indexOf(typeOrSubtype) > -1;
            } else {
                throw new Error('TypeCheck.js: Need a string as the second argument in typeCheck.typeMatch()');
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    return {
        getTypes: getTypes,
        typeMatch: typeMatch
    };

}());
