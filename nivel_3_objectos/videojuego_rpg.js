let jugador = {
    nombre: "Alex",
    vida: 100,
    ataque: 20,
    experiencia: 0,
    nivel: 1
}
let enemigo = {
    nombre: "evil",
    vida: 100,
    ataque: 10,
    experiencia: 0,
    nivel: 1
}
function entrenar(usuario) {
    usuario.experiencia = usuario.experiencia + 10
    if (usuario.experiencia >= 30) {
        usuario.nivel = usuario.nivel + 1
        console.log("Experiencia : ", usuario.experiencia)
        console.log(usuario.nombre, "¡ha subido de nivel¡")
        console.log("Nivel actual: ", usuario.nivel)
        usuario.ataque += 10
        usuario.vida += 10
        console.log("*********************************")

        usuario.experiencia = 0

    } else {
        console.log(usuario.nombre, "ha entrenado y gano 10 puntos de experiencia")
        console.log("Experiencia actual: ", usuario.experiencia)
        console.log("*********************************")
    }
}

function estado(usuario) {
    console.log("Nombre: ", usuario.nombre)
    console.log("Vida: ", usuario.vida)
    console.log("Ataque: ", usuario.ataque)
    console.log("Experiencia: ", usuario.experiencia)
    console.log("Nivel: ", usuario.nivel)
    console.log("*********************************")
}

function recibioDisparo(usuario, QnDisparo) {
    usuario.vida -= QnDisparo.ataque
    console.log(usuario.nombre, "Recibio un disparo")
    console.log("Vida restante: ", usuario.vida)
    console.log("*********************************")

}
recibioDisparo(jugador, enemigo)
recibioDisparo(enemigo, jugador)
entrenar(jugador)
entrenar(jugador)
entrenar(jugador)
estado(jugador)
recibioDisparo(jugador, enemigo)
recibioDisparo(jugador, enemigo)
recibioDisparo(jugador, enemigo)


entrenar(jugador)
entrenar(jugador)
entrenar(jugador)
entrenar(jugador)
entrenar(jugador)

entrenar(jugador)
estado(jugador)
entrenar(jugador)
