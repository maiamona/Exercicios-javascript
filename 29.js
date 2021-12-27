let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');

// looping through Map
for (let [key, value] of map1) {
    console.log(key + ' - ' + value);
}
console.log('------------------------------');
let map2 = new Map();
map2.set('name', 'Jack');
map2.set('age', '27');

// looping through the Map
for (let key of map2.keys()) {
  console.log(key)
}
console.log('------------------------------');

let map3 = new Map();
map3.set('name', 'Jack');
map3.set('age', '27');

// looping through the Map
for (let values of map3.values()) {
    console.log(values);
}
console.log('------------------------------');
let map4 = new Map();
map4.set('name', 'Jack');
map4.set('age', '27');

// looping through the Map
for (let elem of map4.entries()) {
    console.log(`${elem[0]}: ${elem[1]}`);
}