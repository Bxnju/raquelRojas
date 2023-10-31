const miAudioAlicia = document.getElementById("miAudioAlicia");
miAudioAlicia.volume = "0.01";

const miAudioTexto = document.getElementById("miAudioTexto");
const btnAudioTexto = document.getElementById("btnAudioTexto");
let cont1 = 0;

function playAndPauseText() {
    
    if(cont1 == 0){

        miAudioTexto.play();
        cont1++;

    }else if(cont1 % 2 == 0){
        btnAudioTexto.textContent = "volume_up";
        miAudioTexto.play();
        cont1++;
    }else{
        btnAudioTexto.textContent = "volume_off";
        miAudioTexto.pause();
        cont1++;
    }

}

const miAudioDialogo = document.getElementById("miAudioDialogo");
const btnAudioDialogo = document.getElementById("btnAudioDialogo");
let cont2 = 0;

function playAndPauseDialog() {
    
    if(cont2 == 0){

        miAudioDialogo.play();
        cont2++;

    }else if(cont2 % 2 == 0){
        btnAudioDialogo.textContent = "volume_up";
        miAudioDialogo.play();
        cont2++;
    }else{
        btnAudioDialogo.textContent = "volume_off";
        miAudioDialogo.pause();
        cont2++;
    }

}