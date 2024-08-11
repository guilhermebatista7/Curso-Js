let num  = [5, 1, 3, 2 ,4];
let it = num[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next().value);
let v = it.next();
console.log(v);