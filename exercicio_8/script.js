const abas = document.querySelectorAll(".aba");

abas.forEach(aba => aba.addEventListener("click", () => abaClicked(aba)));

const abaClicked = (aba) => {
    abas.forEach(aba => aba.classList.remove("ativo"));
    aba.classList.add("ativo");

    const conteudos = document.querySelectorAll(".conteudo");
    conteudos.forEach(conteudo => conteudo.classList.remove("ativo"));

    const conteudoId = aba.getAttribute("content-id");
    const conteudo =  document.getElementById(conteudoId);
    
    conteudo.classList.add("ativo");
}

const currentActiveTab = document.querySelector(".aba.ativo");
abaClicked(currentActiveTab);