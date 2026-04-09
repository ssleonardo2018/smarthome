let bombaLigada = false;

function toggleBomba() {
    const botao = document.getElementById("btnBomba");

    bombaLigada = !bombaLigada;

    if (bombaLigada) {
        botao.innerText = "LIGADO";
        botao.classList.remove("desligado");
        botao.classList.add("ligado");
    } else {
        botao.innerText = "DESLIGADO";
        botao.classList.remove("ligado");
        botao.classList.add("desligado");
    }
}