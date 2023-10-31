const miAudioAlicia = document.getElementById("miAudioAlicia");
miAudioAlicia.volume = "0.01";

const miAudio = document.getElementById("miAudio");
const btnAudio = document.getElementById("btnAudio");
let cont = 0;

function playAndPause() {
    
    if(cont == 0){

        miAudio.play();
        cont++;

    }else if(cont % 2 == 0){
        btnAudio.textContent = "volume_up";
        miAudio.play();
        cont++;
    }else{
        btnAudio.textContent = "volume_off";
        miAudio.pause();
        cont++;
    }

}