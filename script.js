const musica = document.getElementById("musica");
musica.volume = 0.5;
const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {

    musica.play();

    document
    .getElementById("capitulos")
    .scrollIntoView({
        behavior:"smooth"
    });

});
function abrirModal(imagem,titulo,texto){

    document.getElementById("modal")
    .style.display = "flex";

    document.getElementById("modal-img")
    .src = imagem;

    document.getElementById("modal-titulo")
    .innerText = titulo;

    document.getElementById("modal-texto")
    .innerText = texto;
}

function fecharModal(){

    document.getElementById("modal")
    .style.display = "none";
}
