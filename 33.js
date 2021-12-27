// new Proxy(target, handler);

let student1 = {
    age: 24,
    name: "Felix"
}

const handler = {
    morada: 'talatona',
    get: function(obj, prop) {
        return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(student1, handler);
console.log(proxy.name); // Felix
console.log(proxy.age); // 24
console.log(proxy.morada);
console.log(proxy.class); // property does not exist
