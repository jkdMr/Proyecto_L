// Inicializar
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let Presultado = null;
let Sresultado = null;
let movimientos = 0;
let acierto = 0;
let tempo = false;
let numeros = [];

// Ver documento HTML
let MostrarMov = document.getElementById('movimientos');
let MostrarAci = document.getElementById('acierto');
let botonReiniciar = document.getElementById('reiniciar');

// Función para inicializar el juego
function inicializarJuego() {
    tarjetasDestapadas = 0;
    tarjeta1 = null;
    tarjeta2 = null;
    Presultado = null;
    Sresultado = null;
    movimientos = 0;
    acierto = 0;
    tempo = false;
    
    // Actualizar las vistas
    MostrarMov.innerHTML = `Movimientos: ${movimientos}`;
    MostrarAci.innerHTML = `Aciertos: ${acierto}`;

    // Generar y mezclar números
    numeros = [1,1,2,2,3,3,4,4,5,5,6,6];
    numeros = numeros.sort(() => Math.random() - 0.5);
    console.log(numeros);

    // Limpiar las tarjetas
    for (let i = 0; i <= 11; i++) {
        let tarjeta = document.getElementById(i);
        tarjeta.innerHTML = '';  // Limpiar el contenido de la tarjeta
        tarjeta.disabled = false; // Habilitar nuevamente las tarjetas
    }

    // Deshabilitar el botón de reiniciar
    botonReiniciar.setAttribute('disabled', 'true');
}

// Función para bloquear las tarjetas (por si el juego termina o se acaba el tiempo)
function bloquearTarjeta() {
    for (let i = 0; i <= 11; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}

// Función principal para destapar tarjetas
function destapar(id) {
    tarjetasDestapadas++;
    
    if (tarjetasDestapadas == 1) {
        // Mostrar el primer número
        tarjeta1 = document.getElementById(id);
        Presultado = numeros[id];
        tarjeta1.innerHTML = `<img class="imagen_memoria" src="./imagen_memoria/${Presultado}.png">`;
        tarjeta1.disabled = true;
    } else if (tarjetasDestapadas == 2) {
        // Mostrar el segundo número
        tarjeta2 = document.getElementById(id);
        Sresultado = numeros[id];
        tarjeta2.innerHTML = `<img class="imagen_memoria" src="./imagen_memoria/${Sresultado}.png">`;
        tarjeta2.disabled = true;

        // Incrementar movimientos
        movimientos++;
        MostrarMov.innerHTML = `Movimientos: ${movimientos}`;

        // Comprobar si son iguales
        if (Presultado === Sresultado) {
            tarjetasDestapadas = 0;
            acierto++;
            MostrarAci.innerHTML = `Aciertos: ${acierto}`;
            
            // Comprobar si el juego ha terminado
            if (acierto == 6) {
                MostrarAci.innerHTML = `Aciertos: ${acierto} 😁😎`;

                // Activar el botón de reiniciar
                botonReiniciar.removeAttribute('disabled');

                if (movimientos<=10){
                    MostrarMov.innerHTML=`Movimientos: ${movimientos} 🐇🎊`
                }else{
                    MostrarMov.innerHTML=`Movimientos: ${movimientos} 🐢🧨`
                }
            }
        } else {
            // Volver a ocultar las tarjetas después de un pequeño retraso
            setTimeout(() => {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }
    }
}

// Función para reiniciar el juego cuando se presione el botón
botonReiniciar.addEventListener('click', inicializarJuego);

// Inicializar el juego al principio
inicializarJuego();



//----------------------------------------------burbujas-------------------------------------------//
// Función para generar las burbujas según el tamaño de la ventana
function generarBurbujas() {
    const anchoPantalla = window.innerWidth;
    const totalBubbles = anchoPantalla <= 375 ? 15 : anchoPantalla <= 768 ? 30 : anchoPantalla <= 1500 ? 31: 40; // 15 para móviles, 30 para tablets, 50 para pantallas grandes
    const bubbleContainer = document.getElementById('bubble-container');
    
    // Limpia el contenedor de burbujas si ya hay burbujas previas
    bubbleContainer.innerHTML = '';

    // Generar los span dinámicamente
    for (let i = 0; i < totalBubbles; i++) {
        const bubble = document.createElement('span');
        bubble.style.setProperty('--i', Math.floor(Math.random() * 40 + 10)); // Valor aleatorio para animación
        bubbleContainer.appendChild(bubble);
    }
}

// Llama a la función cuando cargue la página
window.onload = generarBurbujas;

// También puedes volver a generar burbujas si la ventana cambia de tamaño
window.onresize = generarBurbujas;
