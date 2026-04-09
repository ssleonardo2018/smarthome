let bombaLigada = false;

function toggleBomba() {
    const botao = document.getElementById("btnBomba");
    const icone = document.getElementById("icone");

    bombaLigada = !bombaLigada;

    if (bombaLigada) {
        botao.innerHTML = '<span id="icone">💧</span> LIGADO';
        botao.classList.remove("desligado");
        botao.classList.add("ligado");
    } else {
        botao.innerHTML = '<span id="icone">🔌</span> DESLIGADO';
        botao.classList.remove("ligado");
        botao.classList.add("desligado");
    }
}