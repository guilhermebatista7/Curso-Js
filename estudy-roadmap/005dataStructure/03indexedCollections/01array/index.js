var arr = [5, "Olá", true, {teste: 1, teste: 2}];
console.log(arr);

var arr2 = [2,3,4,5];
arr2[2] = 9;
console.log(arr2[1]);


var nums = [1, 2, -3, 5, 4];
console.log(nums.length);
console.log(nums.sort())

const cars = new Array("Fusca", "Bmw", "Celta");
cars.push("Corsa");
console.log(cars.toString());
console.log(cars[cars.length-1]);

let months = ['Jan', 'Mar', 'April'];
months.splice(1,0,'Feb');
console.log(months);
months.splice(1,1,'Sept');
console.log(months);

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuersday', 'Friday', 'Saturday'];
console.log(days.slice(1, 4));
console.log(days.slice(-1));
console.log(days.slice(1, -1));