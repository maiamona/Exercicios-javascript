// Não é permitido atribuir a uma propriedade somente getter.

'use strict';

let obj2 = { get x() { return 17; } };

// assignment to a getter-only property
obj2.x = 5; // throws an error

console.log(obj2.x);