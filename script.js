const musica = document.getElementById("musica");
const botao = document.getElementById("startBtn");
musica.volume = 0.5;

botao.addEventListener("click", () => {

    musica.volume = 0.1;
    
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
