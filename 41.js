const arr = [1, 2 ,3];

// calling the Symbol.iterator() method
const arrIterator = arr[Symbol.iterator]();

// gives Array Iterator
console.log(arrIterator);

const str = 'hello';

// calling the Symbol.iterator() method
const strIterator = str[Symbol.iterator]();

// gives String Iterator
console.log(strIterator);
console.log('------------------------------');

const number4 = [ 1, 2, 3];

for (let n of  number4[Symbol.iterator]()) {
    console.log(n);
}

console.log('------------------------------');

const arr2 = ['h', 'e', 'l', 'l', 'o'];

let arrIterator2 = arr2[Symbol.iterator]();

console.log(arrIterator2.next()); // {value: "h", done: false}
console.log(arrIterator2.next()); // {value: "e", done: false}
console.log(arrIterator2.next()); // {value: "l", done: false}
console.log(arrIterator2.next()); // {value: "l", done: false}
console.log(arrIterator2.next()); // {value: "o", done: false}
console.log(arrIterator2.next()); // {value: undefined, done: true}