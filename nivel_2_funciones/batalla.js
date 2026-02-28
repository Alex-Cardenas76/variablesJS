let heroe="loki";
let v1=150;
let v2=150;
let enemigo="khan";
let energia1=150;
let energia2=150;

function ataque(){
    v2=v2-15;
    energia1=energia1-15;
    console.log(heroe,"ataca a",enemigo)
    console.log(enemigo,"tiene",v2,"puntos de vida")
    console.log(heroe,"tiene",energia1,"puntos de energia")
    console.log("*************************")

}
ataque();
function defender(){
    energia2=energia2-15;
    energia1=energia1-10;
    console.log(enemigo,"ataca a",heroe)
    console.log(heroe,"se defiende del ataque de",enemigo)
    console.log(heroe,"tiene",energia1,"puntos de energia")
    console.log(enemigo,"tiene",energia2,"puntos de energia")
    console.log("*************************")
    
}
defender();

function recargarEnergia(energia,nombre){
    energia=energia+10;
    console.log("se recarga la energia de ",nombre,"a",energia+25)
    console.log("*************************")
}
recargarEnergia(energia1,heroe);
recargarEnergia(energia2,enemigo);

function  escudoMagico(){
    energia1=energia1-20;
    v1=v1+40;
    console.log("khan ataca a loki")
    console.log(heroe,"usa escudo magico")
    console.log(heroe,"tiene",energia1,"puntos de energia")
    console.log(heroe,"tiene",v1,"puntos de vida")
    console.log("*************************")
    
}
escudoMagico();