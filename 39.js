// Não é permitido atribuir a uma nova propriedade em um objeto não extensível.

'use strict';

let obj = {};
Object.preventExtensions(obj);

// Assignment to a new property on a non-extensible object
obj.newValue = 'new value'; // throws an error

console.log(obj.newValue);