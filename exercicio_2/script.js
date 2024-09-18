const jogador_atual = document.querySelector(".jogador_atual")

let selected;
let jogador = "X";

let positions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [7,5,3],
    [1,4,7],
    [2,5,8],
    [3,6,9],
];

function init() {
    selected = [];

    jogador_atual.innerHTML = `Jogador atual: ${jogador}`;

    document.querySelectorAll (".jogo button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
}

init();

function newMove(e) {
    const index = e.target.getAttribute("data-cell");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", newMove);
    selected[index] = jogador;

    setTimeout(() => {
        check();
    }, [100]);

    jogador = jogador === "X" ? "O" : "X";
    jogador_atual.innerHTML = `
    Jogador atual: ${jogador}`;
}

function check () {
    let playerLastMove = jogador === "X" ? "O" : "X";

    const items = selected
        .map((item, i) => [item, i])
        .filter((item) => item[0] === playerLastMove)
        .map((item) => item[1]);
    
    for (pos of positions) {
        if (pos.every((item) => items.includes(item))) {
           alert("O JOGADOR"+ " '"+ playerLastMove + "' " +"GANHOU");
            init();
            return;
        }
    }
    if (selected.filter((item) => item).length === 9) {
        alert("DEU EMPATE!")
        init();
        return;
    }
}



