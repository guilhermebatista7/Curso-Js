//Strings para numbers
var x, y, z;
x = '10';
y = 2;
z = "Jhon"
console.log(Number(x)+y); //Diferente de x + y apenas, que retorna 102
console.log(Number(z)); // Retorna NaN

//Numbers para Strings
var a = 10;
var b = 20;
console.log(typeof(a.toString()), String(b))

//Dates para Strings
var d = new Date();
console.log(d.toString())