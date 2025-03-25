const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown"); // Referencia al div del contador

const newYear = '25 Mar 2025';

function countTimer() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    if (totalSeconds <= 0) {
        // Cuando el contador llega a 0, mostrar mensaje en lugar del contador
        countdown.innerHTML = "<h1>🎉 ¡El tiempo ha llegado! 🎉</h1> <h1>🎉 Feliz Cumpleaños 🎉</h1> ";
        clearInterval(timerInterval); // Detiene la actualización del contador
        return;
    }

    const daysCalc = Math.floor(totalSeconds / 3600 / 24);
    const hoursCalc = Math.floor(totalSeconds / 3600) % 24;
    const minsCalc = Math.floor(totalSeconds / 60) % 60;
    const secondsCalc = Math.floor(totalSeconds % 60);
    
    // Actualizar los elementos del contador
    days.innerHTML = daysCalc.toString().padStart(2, '0');
    hours.innerHTML = hoursCalc.toString().padStart(2, '0');
    mins.innerHTML = minsCalc.toString().padStart(2, '0');
    seconds.innerHTML = secondsCalc.toString().padStart(2, '0');
}

countTimer();
const timerInterval = setInterval(countTimer, 1000);
