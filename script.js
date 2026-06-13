const musica = document.getElementById("musica");
const botaoInicio = document.getElementById("startBtn");
const botaoMusica = document.getElementById("toggleMusic");

// Volume inicial
musica.volume = 0.15;

// Botão "Começar a Jornada"
botaoInicio.addEventListener("click", () => {

    // Inicia a música
    musica.play();

    // Vai para a seção dos capítulos
    document.getElementById("capitulos").scrollIntoView({
        behavior: "smooth"
    });

});

// Botão de música
botaoMusica.addEventListener("click", () => {

    if (musica.paused) {

        musica.play();
        botaoMusica.innerHTML = "🎵";

    } else {

        musica.pause();
        botaoMusica.innerHTML = "🔇";

    }

});

// Modal
function abrirModal(imagem, titulo, texto){

    document.getElementById("modal")
    .style.display = "flex";

    document.getElementById("modal-img")
    .src = imagem;

    document.getElementById("modal-titulo")
    .innerText = titulo;

    document.getElementById("modal-texto")
    .innerText = texto;
}

function fecharModal() {

    document.getElementById("modal").style.display = "none";

}
