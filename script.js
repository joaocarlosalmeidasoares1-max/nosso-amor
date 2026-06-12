const musica = document.getElementById("musica");
const botao = document.getElementById("startBtn");

botao.addEventListener("click", () => {

    musica.play();

    document
    .getElementById("capitulos")
    .scrollIntoView({
        behavior:"smooth"
    });

});
