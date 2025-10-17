import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Game from './Game';
import Swal from 'sweetalert2';

let player1;
let player2;
let personaje1="";
let personaje2="";

// Botones aceptar
let btn_py1 = document.getElementById("btn_py1");
let btn_py2 = document.getElementById("btn_py2");

// Selección de personajes
let seleccion1 = document.getElementById("seleccion_personaje_py1");
let seleccion2 = document.getElementById("seleccion_personaje_py2");

const accionesPersonaje={
    "Cell":{
        "basico":{
            img:"Cell/basico.png",
            msj:"Mondongo"
        },
        "especial":{
            img:"Cell/especial.png",
            msj:"Mondongo Especial"
        },
        "semilla":{
            img:"Cell/energia.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Cell/curar.png",
            msj:"Tiren paroooo"
        }
    },
    "Gohan":{
        "basico":{
            img:"Gohan/basico.png",
            msj:"Kame Hame Ha"
        },
        "especial":{
            img:"Gohan/especial.png",
            msj:"Mas Kame Hame Ha"
        },
        "semilla":{
            img:"Gohan/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Gohan/energia.png",
            msj:"Cargar Ki"
        }
    },
    "Veguito":{
        "basico":{
            img:"Veguito/basico.png",
            msj:"Kame Hame Ha"
        },
        "especial":{
            img:"Veguito/especial.png",
            msj:"Mas Kame Hame Ha"
        },
        "semilla":{
            img:"Veguito/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Veguito/energia.png",
            msj:"Cargar Ki"
        }
    },
    "Gogueta":{
        "basico":{
            img:"Gogueta/basico.png",
            msj:"Kame Hame Ha"
        },
        "especial":{
            img:"Gogueta/especial.png",
            msj:"Mas Kame Hame Ha"
        },
        "semilla":{
            img:"Gogueta/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Gogueta/energia.png",
            msj:"Cargar Ki"
        }
    },
    "Goku":{
        "basico":{
            img:"Goku/basico.png",
            msj:"Kame Hame Ha"
        },
        "especial":{
            img:"Goku/especial.png",
            msj:"Mas Kame Hame Ha"
        },
        "semilla":{
            img:"Goku/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Goku/energia.png",
            msj:"Cargar Ki"
        }
    },
    "Pikoro":{
        "basico":{
            img:"Pikoro/basico.png",
            msj:"Makankosappo"
        },
        "especial":{
            img:"Pikoro/especial.png",
            msj:"Makankosappo Especial"
        },
        "semilla":{
            img:"Pikoro/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Pikoro/energia.png",
            msj:"Cargar Ki"
        }
    },
    "Trunks":{
        "basico":{
            img:"Trunks/basico.png",
            msj:"Quemarropa"
        },
        "especial":{
            img:"Trunks/especial.png",
            msj:"Quemarropa Especial"
        },
        "semilla":{
            img:"Trunks/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Trunks/energia.png",
            msj:"Tiren paroooo"
        }
    },
    "Veguetta":{
        "basico":{
            img:"Veguetta/basico.png",
            msj:"Big Bang Attack"
        },
        "especial":{
            img:"Veguetta/especial.png",
            msj:"Final Flash"
        },
        "semilla":{
            img:"Veguetta/curacion.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"Veguetta/energia.png",
            msj:"Yo Tiro paro"
        }
    },
    "Freezer":{
        "basico":{
            img:"freezer/basico.png",
            msj:"Golpe serio"
        },
        "especial":{
            img:"freezer/especial.png",
            msj:"Rayo congelante"
        },
        "semilla":{
            img:"freezer/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"freezer/energia.png",
            msj:"Cargar Ki"
        }
    },
    "Black":{
        "basico":{
            img:"black/basico.png",
            msj:"Kame Hame Ha"
        },
        "especial":{
            img:"black/especial.png",
            msj:"Mas Kame Hame Ha"
        },
        "semilla":{
            img:"black/curar.png",
            msj:"Curacion maxima"
        },
        "ki":{
            img:"black/energia.png",
            msj:"Cargar Ki"
        }
    }
}

const alertAtk = (personaje,accion) =>{
    let timerInterval;
    Swal.fire({
        title: accionesPersonaje[personaje][accion].msj,
        imageUrl: `./public/img/${accionesPersonaje[personaje][accion].img}`,
        imageWidth: 200,
        imageHeight: 200,
        showCancelButton: false,
        showConfirmButton: false,
        background: "none",
        html: "<b></b>",
        backdrop:"rgba(255, 140, 0, 1)",
        timer: 2000,
        willClose: () => {
            clearInterval(timerInterval);
   }
   });
}

const cambiarSeleccion = (botones,seleccionado,color) => {
    botones.forEach(btn=>{
        if(seleccionado===btn.querySelector("img").title){
          btn.classList.remove(color);
          btn.classList.add("btn-warning"); 
        }else{
          btn.classList.remove("btn-warning");
          btn.classList.add(color); 
        }
    });
}

// Agregar eventos a botones de selección del Player 1
if(seleccion1){
    seleccion1.querySelectorAll("button").forEach(btn=>{
        btn.addEventListener("click",(evento)=>{
            cambiarSeleccion(seleccion1.querySelectorAll("button"), evento.target.title,"btn-danger");
            personaje1 = evento.target.title;
        });
    });
}

// Agregar eventos a botones de selección del Player 2
if(seleccion2){
    seleccion2.querySelectorAll("button").forEach(btn=>{
        btn.addEventListener("click",(evento)=>{
        cambiarSeleccion(seleccion2.querySelectorAll("button"), evento.target.title,"btn-primary");
        personaje2 = evento.target.title;
        });
    });
}
const ocultarSeleccion1 = () => {
  if(player1 !="" && personaje1 !=""){
    document.getElementById("jugador1").classList.add("d-none");
    document.getElementById("nombre_personaje1").innerText = personaje1;
    }
     mostrarBatallaSiListos();
}
const ocultarSeleccion2 = () => {
  if(player2 !="" && personaje2 !=""){
    document.getElementById("jugador2").classList.add("d-none");
    document.getElementById("nombre_personaje2").innerText = personaje2;
    }
     mostrarBatallaSiListos();
}
const mostrarBatallaSiListos = () => {
  if (player1 !== "" && personaje1 !== "" && player2 !== "" && personaje2 !== "") {
    const batallaDiv = document.getElementById("batalla");
    batallaDiv.classList.remove("d-none");
  }
};
// Botón aceptar Player 1
btn_py1.addEventListener("click",()=>{
    let user_py1 = document.getElementById("username_py1").value;
    if(user_py1!==""){
        player1 = new Game(user_py1);
        document.getElementById("username1").innerText = user_py1;
        document.getElementById("img_personaje1").src = `./public/img/${personaje1}/base.png`;

    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre no puede estar vacío',
     });
}
if(personaje1 =="") Swal.fire( {
  icon:'error',
  title:'Oops...',
  text:'Debe seleccionar un personaje'
});
ocultarSeleccion1();
mostrarBatallaSiListos();
});

// Botón aceptar Player 2
btn_py2.addEventListener("click",()=>{
    let user_py2 = document.getElementById("username_py2").value;
    if(user_py2!==""){
        player2 = new Game(user_py2);
        document.getElementById("username2").innerText = user_py2;
        document.getElementById("img_personaje2").src = `./public/img/${personaje2}/base.png`;       
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El nombre no puede estar vacío',
     });
}
if(personaje2=="") Swal.fire( {
  icon:'error',
  title:'Oops...',
  text:'Debe seleccionar un personaje'
});
ocultarSeleccion2();
mostrarBatallaSiListos();
});

document.getElementById("btn_atk_basico1").addEventListener("click", () => {
    alertAtk(personaje1,"basico");
    player1.atk_bascic(player2);
    document.getElementById("vida2").style.width = `${(player2.vida / 10)}%`;
    document.getElementById("vida2").innerText = `${player2.vida}`;

    document.getElementById("energia1").style.width = `${(player1.energia / 10)}%`;
    document.getElementById("energia1").innerText = `${player1.energia}`;

    document.getElementById("ki1").style.width = `${(player1.ki / 10)}%`;
    document.getElementById("ki1").innerText = `${player1.ki}`;
    actualizarTurno(); 
    verificarVida();

});
document.getElementById("btn_atk_basico2").addEventListener("click", () => {
    alertAtk(personaje2,"basico");
    player2.atk_bascic(player1);
    document.getElementById("vida1").style.width = `${(player1.vida / 10)}%`;
    document.getElementById("vida1").innerText = `${player1.vida}`;

    document.getElementById("energia2").style.width = `${(player2.energia / 10)}%`;
    document.getElementById("energia2").innerText = `${player2.energia}`;

    document.getElementById("ki2").style.width = `${(player2.ki / 10)}%`;
    document.getElementById("ki2").innerText = `${player2.ki}`;
    actualizarTurno(); 
    verificarVida();

});

document.getElementById("btn_atk_especial1").addEventListener("click", () => {
    alertAtk(personaje1,"especial");
    player1.atk_especial(player2);
    document.getElementById("vida2").style.width = `${(player2.vida / 10)}%`;
    document.getElementById("vida2").innerText = `${player2.vida}`;

    document.getElementById("energia1").style.width = `${(player1.energia / 10)}%`;
    document.getElementById("energia1").innerText = `${player1.energia}`;

    document.getElementById("ki1").style.width = `${(player1.ki / 10)}%`;
    document.getElementById("ki1").innerText = `${player1.ki}`;
    actualizarTurno();
    verificarVida();

});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn_atk_especial2").addEventListener("click", () => {
        console.log("Ataque especial 2 presionado");
        alertAtk(personaje2,"especial");
        player2.atk_especial(player1);

        document.getElementById("vida1").style.width = `${player1.vida / 10}%`;
        document.getElementById("vida1").innerText = player1.vida;

        document.getElementById("energia2").style.width = `${player2.energia / 10}%`;
        document.getElementById("energia2").innerText = player2.energia;

        document.getElementById("ki2").style.width = `${player2.ki / 10}%`;
        document.getElementById("ki2").innerText = player2.ki;
        actualizarTurno();
        verificarVida();

    });
  });
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btn_semilla1").addEventListener("click", () => {
        console.log("Semilla del ermitaño 1 presionado");
        alertAtk(personaje1, "semilla");

        // 👇 Lógica: intentar curar
        const curado = player1.semilla();

        // 🧠 Mostrar alerta según resultado
        if (!curado) {
            Swal.fire({
                icon: "warning",
                title: "¡Tu vida está completa!",
                text: "No puedes usar la semilla del ermitaño ahora.",
                confirmButtonColor: "#3085d6",
            });
            return; // 🚫 No hacer más si no curó
        }

        // ✅ Si curó correctamente
        Swal.fire({
            icon: "success",
            title: "¡Has usado la Semilla del Ermitaño!",
            text: "Tu vida, energía y ki han sido restaurados.",
            confirmButtonColor: "#3085d6",
        });

        // 🔄 Actualizar las barras en pantalla
        document.getElementById("energia1").style.width = `${(player1.energia / 10)}%`;
        document.getElementById("energia1").innerText = `${player1.energia}`;

        document.getElementById("ki1").style.width = `${(player1.ki / 10)}%`;
        document.getElementById("ki1").innerText = `${player1.ki}`;

        document.getElementById("vida1").style.width = `${(player1.vida / 10)}%`;
        document.getElementById("vida1").innerText = `${player1.vida}`;

        actualizarTurno();
        verificarVida();
    });


    document.getElementById("btn_semilla2").addEventListener("click", () => {
        console.log("Semilla del ermitaño 2 presionado");
        alertAtk(personaje2, "semilla");

        const curado = player2.semilla();

        if (!curado) {
            Swal.fire({
                icon: "warning",
                title: "¡Tu vida está completa!",
                text: "No puedes usar la semilla del ermitaño ahora.",
                confirmButtonColor: "#3085d6",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "¡Has usado la Semilla del Ermitaño!",
            text: "Tu vida, energía y ki han sido restaurados.",
            confirmButtonColor: "#3085d6",
        });

        document.getElementById("energia2").style.width = `${(player2.energia / 10)}%`;
        document.getElementById("energia2").innerText = `${player2.energia}`;

        document.getElementById("ki2").style.width = `${(player2.ki / 10)}%`;
        document.getElementById("ki2").innerText = `${player2.ki}`;

        document.getElementById("vida2").style.width = `${(player2.vida / 10)}%`;
        document.getElementById("vida2").innerText = `${player2.vida}`;

        actualizarTurno();
        verificarVida();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btn_cargar1 = document.getElementById("btn_cargar1");

    btn_cargar1.addEventListener("click", () => {
        const usado = player1.cargarKi(); // llama al método de Game.js

        if (!usado) {
            // ⚠️ Solo alerta, no afecta la lógica interna
            Swal.fire({
                icon: "warning",
                title: "¡Todo está completo!",
                text: "No puedes usar el botón de cargar ahora.",
                confirmButtonColor: "#3085d6",
            });
            return;
        }

        // ✅ Actualizar DOM después de usar
        document.getElementById("energia1").style.width = `${player1.energia / 10}%`;
        document.getElementById("energia1").innerText = player1.energia;

        document.getElementById("ki1").style.width = `${player1.ki / 10}%`;
        document.getElementById("ki1").innerText = player1.ki;
        actualizarTurno();

        // ⚠️ Alerta de éxito (opcional)
        Swal.fire({
            icon: "success",
            title: "¡Energía y Ki restaurados!",
            confirmButtonColor: "#3085d6",
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const btn_cargar2 = document.getElementById("btn_cargar2"); // tu botón de cargar jugador 2

    btn_cargar2.addEventListener("click", () => {
        const usado = player2.cargarKi(); // llama al método de Game.js

        if (!usado) {
            // ⚠️ Alerta si no hay necesidad de cargar
            Swal.fire({
                icon: "warning",
                title: "¡Todo está completo!",
                text: "No puedes usar el botón de cargar ahora.",
                confirmButtonColor: "#3085d6",
            });
            return;
        }

        // ✅ Actualizar DOM después de usar
        document.getElementById("energia2").style.width = `${player2.energia / 10}%`;
        document.getElementById("energia2").innerText = player2.energia;

        document.getElementById("ki2").style.width = `${player2.ki / 10}%`;
        document.getElementById("ki2").innerText = player2.ki;
        actualizarTurno();

        // ⚠️ Alerta de éxito
        Swal.fire({
            icon: "success",
            title: "¡Energía y Ki restaurados!",
            confirmButtonColor: "#3085d6",
        });
    });

});

let turno = 1; // 1 para jugador 1, 2 para jugador 2
function actualizarTurno() {
  if (turno === 1) {
    // 🔁 Cambiar a jugador 2
    document.querySelectorAll(".botones-j1").forEach(btn => btn.disabled = true);
    document.querySelectorAll(".botones-j2").forEach(btn => btn.disabled = false);
    turno = 2;
  } else {
    // 🔁 Cambiar a jugador 1
    document.querySelectorAll(".botones-j2").forEach(btn => btn.disabled = true);
    document.querySelectorAll(".botones-j1").forEach(btn => btn.disabled = false);
    turno = 1;
  }
}
function verificarVida() {
  if (player1.vida <= 0) {
    player1.vida = 0;
    document.getElementById("vida1").style.width = "0%";
    document.getElementById("vida1").innerText = "0";
     registrarVictoria(player2.username);
    Swal.fire({
      title: `💀 ¡${player1.username} ha perdido!`,
      text: `${player2.username} es el ganador 🎉`,
      icon: 'error',
      confirmButtonText: 'Reiniciar juego',
      confirmButtonColor: '#3085d6',
    }).then(() => {
        cambiarFondoAleatorio();
      // Aquí puedes reiniciar el juego, recargar la página o hacer algo más
      location.reload();
    });

    deshabilitarBotonesJugador(1);
  } else if (player2.vida <= 0) {
    player2.vida = 0;
    document.getElementById("vida2").style.width = "0%";
    document.getElementById("vida2").innerText = "0";
    registrarVictoria(player1.username);
    Swal.fire({
      title: `💀 ¡${player2.username} ha perdido!`,
      text: `${player1.username} es el ganador 🎉`,
      icon: 'error',
      confirmButtonText: 'Reiniciar juego',
      confirmButtonColor: '#3085d6',
    }).then(() => {
      cambiarFondoAleatorio();  
      location.reload();
    });

    deshabilitarBotonesJugador(2);
  }
}
function deshabilitarBotonesJugador(numJugador) {
  const botones = document.querySelectorAll(
    `btn_atk_basico${numJugador}`,
    `btn_atk_especial${numJugador}`,
    `btn_semilla${numJugador}`,
    `btn_cargar${numJugador}`
  );

  botones.forEach(btn => btn.disabled = true);
}
// Al cargar la página: solo el jugador 1 puede jugar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".botones-j2").forEach(btn => btn.disabled = true);
});

function cambiarFondoAleatorio() {
  const fondos = [
    "./public/img/Fondos/fondo_1.jpg",
    "./public/img/Fondos/fondo_2.jpg",
    "./public/img/Fondos/fondo_3.jpg",
    "./public/img/Fondos/fondo_4.jpg",
    "./public/img/Fondos/fondo_5.jpg",
  ];

  const indice = Math.floor(Math.random() * fondos.length);
  const fondoSeleccionado = fondos[indice];
  localStorage.setItem("fondoActual", fondoSeleccionado); // 👈 guarda el fondo
  document.body.style.background = `url('${fondoSeleccionado}') no-repeat center center fixed`;
  document.body.style.backgroundSize = "cover";
}

// Al cargar la página, usa el último fondo elegido
window.addEventListener("load", () => {
  const fondoGuardado = localStorage.getItem("fondoActual");
  if (fondoGuardado) {
    document.body.style.background = `url('${fondoGuardado}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
  } else {
    cambiarFondoAleatorio(); // primera vez
  }
});
// --- CONTADOR DE VICTORIAS ---
let historialVictorias = JSON.parse(localStorage.getItem('historialVictorias')) || {};

// Registra una victoria
function registrarVictoria(nombreGanador) {
  if (!historialVictorias[nombreGanador]) {
    historialVictorias[nombreGanador] = 0;
  }
  historialVictorias[nombreGanador]++;

  localStorage.setItem('historialVictorias', JSON.stringify(historialVictorias));
  mostrarVictorias();
}

// Muestra el historial en el HTML
function mostrarVictorias() {
  const victoriasList = document.getElementById('victorias-list');
  if (!victoriasList) return;

  victoriasList.innerHTML = '';
  for (const [nombre, cantidad] of Object.entries(historialVictorias)) {
    victoriasList.innerHTML += `<div>${nombre}: ${cantidad} 🏅</div>`;
  }
}

// Botón para reiniciar el historial
const resetBtn = document.getElementById('reset-historial');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    localStorage.removeItem('historialVictorias');
    historialVictorias = {};
    mostrarVictorias();
  });
}

// Llama una vez al iniciar el juego
mostrarVictorias();
