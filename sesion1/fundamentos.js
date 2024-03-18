// se pueden declarar las variables con const, let, var
console.log('Hola mundo');
const myConstante=123;
let var1='variable 1';
var var2='variable Global'
console.log(myConstante);
console.log(var1);
console.log(var2);
console.log(myConstante,var1,var2);

function fun1(){
    let var1='cambio de variable contexto';
    console.log(var1);
}

fun1();