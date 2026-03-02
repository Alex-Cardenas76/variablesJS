let jugador={
    nombre:"luis",
    vida:100,
    fuerza:50,
    nivel:20
}

let jugador2={
    nombre:"Sebastian",
    vida:100,
    fuerza:65,
    nivel:19
}

function mostrarEstado(jugador){
    console.log(jugador.nombre,"tiene",jugador.vida,"puntos de vida")
    console.log(jugador.nombre,"tiene",jugador.fuerza,"puntos de fuerza")
    console.log(jugador.nombre,"tiene",jugador.nivel,"puntos de nivel")
    console.log("#######################")
}
mostrarEstado(jugador);
mostrarEstado(jugador2);