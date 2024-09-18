const form = document.getElementById('form')
const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const senha = document.getElementById('senha')
const confsenha = document.getElementById('confsenha')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
})

function checkInputs() {
    const usuarioValue = usuario.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const senhaValue = senha.value.trim()
    const confsenhaValue = confsenha.value.trim()

    if(usuarioValue === "") {
        errorValidation(usuario, "Este campo é obrigatório")
    } else {
        sucessValidation(usuario, "")
    }
    
    if(emailValue === "") {
        errorValidation(email, "Este campo é obrigatório");
    } else if (!emailValue.includes("@")) { 
        errorValidation(email, "E-mail inválido");
    }else {
        sucessValidation(email, "")
    }

    if(telefoneValue === "") {
        errorValidation(telefone, "Este campo é obrigatório");
    } else if (telefoneValue.length !== 10 && telefoneValue.length !== 11){ 
        errorValidation(telefone, "Telefone inválido. Deve haver 10 ou 11 caracteres");
    } else {
        sucessValidation(telefone, "")
    }

    if (senhaValue === "") {
        errorValidation(senha, "Este campo é obrigatório");
    } else if (senhaValue.length !== 8){ 
        errorValidation(senha, "A senha deve conter no mínimo 8 caracteres");
    } else {
        sucessValidation(senha, "")
    }

    if (confsenhaValue=== "") {
        errorValidation(confsenha, "Este campo é obrigatório");
    } else if (confsenhaValue !== senhaValue){ 
        errorValidation(confsenha, "As senhas devem ser iguais");
    } else {
        sucessValidation(confsenha, "")}
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector ('small')
    small.innerText = message
    formControl.className = 'form-control error'
}

function sucessValidation(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control sucess'
}

