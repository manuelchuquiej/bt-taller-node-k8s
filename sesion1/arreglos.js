const listaEnteros=[1,2,3,4,5,6];
// primera forma
/*listaEnteros.forEach(
    (value,indice)=>{
        console.log('indice '+indice,'valor '+value);
    }
)*/

//segunda forma callback
const callbackFn=(value,indice)=>{
    console.log('indice '+indice,'valor '+value);
}

listaEnteros.forEach(callbackFn);