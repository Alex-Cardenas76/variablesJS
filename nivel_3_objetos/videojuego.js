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
    console.log("ESTADO DEL JUGADOR",jugador.nombre,"***********************")
    console.log(jugador.nombre,"tiene",jugador.vida,"puntos de vida")
    console.log(jugador.nombre,"tiene",jugador.fuerza,"puntos de fuerza")
    console.log(jugador.nombre,"tiene",jugador.nivel,"puntos de nivel")
    console.log("#######################")
}
mostrarEstado(jugador)
mostrarEstado(jugador2);

function ataque(atacante,atacado){
    atacado.vida=atacado.vida-atacante.fuerza;
    console.log(atacante.nombre,"ataca a",atacado.nombre)
    console.log(atacado.nombre,"tiene",atacado.vida,"puntos de vida")
    console.log("#######################")
}


function maxfuerza(jugador){
    console.log(jugador.nombre,"tiene",jugador.fuerza,"puntos de fuerza")
    jugador.fuerza += 25
    console.log(jugador.nombre,"usa max fuerza y aumenta su fuerza a",jugador.fuerza,"puntos de fuerza")
    console.log("#######################")

}



function nivelA(jugador){
    console.log(jugador.nombre,"tiene",jugador.nivel,"puntos de nivel")
    jugador.nivel += 1
    console.log(jugador.nombre,"sube de nivel a",jugador.nivel)
    console.log("#######################")
}

ataque(jugador,jugador2);
maxfuerza(jugador2);
ataque(jugador2,jugador);
nivelA(jugador);


mostrarEstado(jugador);
mostrarEstado(jugador2);
