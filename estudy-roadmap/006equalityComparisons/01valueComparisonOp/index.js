let v1 = "11";
let v2 = 11;

console.log(v1==v2);
console.log(v1===v2);
console.log(Object.is(v1, v2));
console.log(Object.is(NaN, NaN));
console.log(NaN === NaN)