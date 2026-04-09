let estado = false; // false = desligado | true = ligado

const botao = document.getElementById("btnBomba");

botao.addEventListener("click", () => {
    estado = !estado;

    if (estado) {
        botao.classList.remove("desligado");
        botao.classList.add("ligado");
        botao.innerText = "Ligado";
    } else {
        botao.classList.remove("ligado");
        botao.classList.add("desligado");
        botao.innerText = "Desligado";
    }

    console.log("Bomba:", estado ? "Ligada" : "Desligada");
});