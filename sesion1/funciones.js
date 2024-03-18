function funcion1(){
    //console.log('esta es una funcion');
    return 'funcion1';
}

/*const funcion2=()=>{
    console.log('arrow funtion');
}*/

const funcion2=()=> (funcion1());
const funcion3=(param1 =0,param2=1)=> (param1+param2);
//funcion1();
console.log(funcion2(),funcion3(1,2));
