let cliente ={
    nombre:"Jaime",
    dinero: 150,
    hambre: 95
}


let cuenta=0;


function mostrarEstado(cliente){
    console.log(cliente.nombre,"tiene",cliente.dinero,"soles")
    console.log(cliente.nombre,"tiene",cliente.hambre,"de hambre")
    console.log("#######################")
}
mostrarEstado(cliente);


