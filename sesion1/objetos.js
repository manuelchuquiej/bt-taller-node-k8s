// desestructuracion de objetos
const objetos= {
    id:123,
    nombre: 'Cesar',
    edad: '20',
    listaNumeros:[1,2,3,4,5]
}

// por atributos
const {nombre,listaNumeros}=objetos;
console.log(nombre,listaNumeros);

//por posicion
const[var1,var2,,,var5]=listaNumeros;
console.log(var1,var2,var5);
