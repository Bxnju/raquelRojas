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

const miAudioPoema = document.getElementById("miAudioPoema");
const btnAudioPoema = document.getElementById("btnAudioPoema");
let cont2 = 0;

function playAndPausePoem() {
    
    if(cont2 == 0){

        miAudioPoema.play();
        cont2++;

    }else if(cont2 % 2 == 0){
        btnAudioPoema.textContent = "volume_up";
        miAudioPoema.play();
        cont2++;
    }else{
        btnAudioPoema.textContent = "volume_off";
        miAudioPoema.pause();
        cont2++;
    }

}