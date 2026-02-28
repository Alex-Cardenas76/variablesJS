let heroe = "batman"
let vidaH = 100
let energiaH = 100

let villano = "joker"
let vidaV = 100
let energiaV = 100

function ataque() {
    vidaV = vidaV - 10
    energiaH = energiaH - 10
    console.log(heroe, " realizo un ataque")
    console.log("Vida del villano: ", vidaV)
    console.log("Energia del heroe : ", energiaH)
    console.log("*********************************")
}

function superAtaque() {
    vidaV = vidaV - 100
    energia = energiaH - 50
    console.log(heroe, " !realizo un super ataque¡")
    console.log("Vida del villano: ", vidaV)
    console.log("Energia del heroe:", energiaH)
    console.log("*********************************")
}



function defender() {
    console.log(heroe, " se defendio del ataque XD")
    console.log("*********************************")

}

function recargarEnergia() {
    energiaH = energiaH + 10
    console.log(heroe, " recargo energia + 10")
    console.log("Energia del heroe: ", energiaH)
    console.log("*********************************")

}


console.log("SE DA INICIO A LA BATALLA")
console.log("*********************************")
ataque()
superAtaque()
ataque()
defender()
recargarEnergia()
defender()
ataque()
recargarEnergia()
console.log("*********************************")

