const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("menu-visible");
        menuToggle.classList.toggle("open");
    });

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