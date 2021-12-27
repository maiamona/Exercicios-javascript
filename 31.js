// perform difference operation
// elements of set a that are not in set b
function difference(setA, setB) {
    let differenceSet = new Set(setA)
    for (let i of setB) {
        differenceSet.delete(i)
    }
    return differenceSet
}

// two sets of fruits
let setE = new Set(['apple', 'mango', 'orange']);
let setF = new Set(['grapes', 'apple', 'banana']);

let result6 = difference(setE, setF);

console.log(result6);