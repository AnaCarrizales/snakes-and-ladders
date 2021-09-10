import Tablero from './tablero.js';
import Dado from './dado.js';
import Jugadores from './jugadores.js';

let tablero1 = new Tablero();
let dado1 = new Dado();
let jugador1 = new Jugadores("Evan", 0);
let jugador2 = new Jugadores("Sarah", 0);
let vuelta = 1;

for (let ganador = 0; ganador < 100; ganador++)
{
    console.log(`**********************`);
    let turno1 = dado1.lanzar();
    jugador1.setPlace(tablero1.comprobar(jugador1.actPlace(turno1)));
    console.log(`${jugador1.getName()} esta en el cuadro ${jugador1.getPlace()}`);

    let turno2 = dado1.lanzar();
    jugador2.setPlace(tablero1.comprobar(jugador2.actPlace(turno2)));
    console.log(`${jugador2.getName()} esta en el cuadro ${jugador2.getPlace()}`);

    vuelta++;

    if(jugador1.getPlace() > jugador2.getPlace())
    {
        ganador = jugador1.getPlace();
    } 
    else 
    {
        ganador = jugador2.getPlace();
    }
}

console.log("//////////////////////////");
if(jugador1.getPlace() >= 100 && jugador2.getPlace() < 100)
{
    console.log("Evan ganó la carrera");
}
else 
{
    console.log("Sarah ganó la carrera");
}