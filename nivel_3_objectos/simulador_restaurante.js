let cliente = {
    nombre: "Alex",
    dinero: 50,
    hambre: 80
};
function ordenarComida(sujeto) {
    sujeto.hambre = sujeto.hambre - 20
    console.log("El cliente ha pedido una amburguesa")
    console.log("El cliente consume la amburguesa: ")
    console.log("nivel de hambre: ", sujeto.hambre)
    console.log("*********************************")
}

function pagar(sujeto) {
    sujeto.dinero -= 10
    console.log("El cliente paga la hamburguesa")
    console.log("Dinero restante: S/.", sujeto.dinero)
    console.log("*********************************")
}

function mostrarEstado(sujeto) {
    console.log("Nombre: ", sujeto.nombre)
    console.log("Dinero: S/.", sujeto.dinero)
    console.log("Nivel de hambre: ", sujeto.hambre)
    console.log("*********************************")
}
ordenarComida(cliente)
ordenarComida(cliente)
pagar(cliente)
mostrarEstado(cliente)

