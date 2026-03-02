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

function ordenarComida(cliente){
    cliente.hambre=cliente.hambre-50;
    console.log(cliente.nombre,"ordeno un chaufa de pollo")
    cuenta=cuenta+12;
    console.log("cuenta S/"+cuenta)
    console.log("#######################")
}
ordenarComida(cliente);


function pagar(cliente){
    cliente.dinero=cliente.dinero-cuenta;
    console.log(cliente.nombre,"recibe la cuenta de",cuenta,"soles")
    console.log(cliente.nombre,"paga la cuenta de su comida")
    console.log("#######################")
}
pagar(cliente);


mostrarEstado(cliente);
