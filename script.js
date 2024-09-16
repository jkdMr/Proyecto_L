//Inicializar
let tarjetasDestapadas = 0;
let tarjeta1=null;
let tarjeta2=null;
let Presultado = null;
let Sresultado = null;
let movimientos = 0;
let acierto = 0;
let tempo=false;
//let timer=30;
//let tiempoRegresivo = null;
//let timerInicial = timer;

//ver documento HTML
let MostrarMov = document.getElementById('movimientos');
let MostrarAci = document.getElementById('acierto');
//let mostrarTiempo = document.getElementById('t-restante');

//generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

/* Funcion restar tiempo
function contarTiempo(){
    tiempoRegresivo=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML=`Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivo);
            bloquearTarjeta();
        }
    }, 1000);
}
*/

function bloquearTarjeta(){
    for (let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled=true;
    }
}

//funcion principal
function destapar(id){

    /*
    if(tempo==false){
         contarTiempo();
        tempo=true;
    }
    */

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas==1){
        //Mostrar el 1er numero
        tarjeta1=document.getElementById(id);
        Presultado = numeros[id];
        tarjeta1.innerHTML = `<img class="imagen_memoria" src="./imagen_memoria/${Presultado}.png">`;

        //deshabilitar primer boton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas == 2){
        //Mostrar el 2do numero
        tarjeta2=document.getElementById(id);
        Sresultado=numeros[id];
        tarjeta2.innerHTML=`<img class="imagen_memoria" src="./imagen_memoria/${Sresultado}.png">`;

        //deshabilitar segundo boton
        tarjeta2.disabled=true;
        
        //incrementar movimientos
        movimientos++;
        MostrarMov.innerHTML = `Movimientos: ${movimientos} `;

        if (Presultado == Sresultado){
            //Reiniciar contador tar-desta
            tarjetasDestapadas=0;

            //Aumento aciertos
            acierto++;
            MostrarAci.innerHTML=`Aciertos: ${acierto}`;

            if(acierto == 6 ){
                MostrarAci.innerHTML=`Aciertos: ${acierto} 😁😎`;
                //deter tiempo
                //clearInterval(tiempoRegresivo);

                if(movimientos <= 10){
                    MostrarMov.innerHTML = `Movimientos: ${movimientos} 🤯🥳` ;
                }else{
                    MostrarMov.innerHTML = `Movimientos: ${movimientos} 🥴🥱`;
                }
                //mostrarTiempo.innerHTML = `Fantastico! solo demoraste ${timerInicial - timer} segundos`
            }
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML= '';
                tarjeta2.innerHTML='';
                tarjeta1.disabled=false;
                tarjeta2.disabled=false;
                tarjetasDestapadas=0;
            },800);
        }
    }
}
