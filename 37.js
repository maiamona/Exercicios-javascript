// Não é permitido atribuir a uma propriedade não gravável.

'use strict';

let obj1 = {};

Object.defineProperty(obj1, 'x', { 
    value: 42,
     writable: false 
    });

// assignment to a non-writable property
obj1.x = 9; // throws an error

console.log(obj1.x);