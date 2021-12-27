// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

// two sets of fruits
let setG = new Set(['apple', 'mango', 'orange']);
let setH = new Set(['apple', 'orange']);

let result7 = subset(setG, setH);

console.log(result7);