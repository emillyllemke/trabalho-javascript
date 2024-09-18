const getElement = (...queries) => document.querySelector(...queries);

const button = getElement('.open-modal-button');
const container = getElement('.modal-container');
const modal = getElement('.modal');
const emailInput = getElement('input[type="email"]');
const passwordInput = getElement('input[type="password"]');
const form = getElement('form');

const activeModalClass = 'modal-show';

const openModal = () => container.classList.add(activeModalClass);
const closeModal = () => container.classList.remove(activeModalClass);

button.addEventListener('click', openModal);
container.addEventListener('click', (event) => {
  if (modal.contains(event.target)) return;
  closeModal();
});

const validatePassword = (password) => {
  const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{5,}$/;
  return regex.test(password);
};

form.addEventListener('submit', (event) => {
  	event.preventDefault();

  	let isValid = true;

  	if (!emailInput.value || !emailInput.checkValidity()) {
    	emailInput.style.borderColor = 'red';
    	isValid = false;
		alert('O email deve estar correto.');
   	} else {
    	emailInput.style.borderColor = 'green';
  	}

  	if (!validatePassword(passwordInput.value)) {
    	passwordInput.style.borderColor = 'red';
    	isValid = false;
    	alert('A senha deve ter pelo menos 5 caracteres, uma letra, um número e um caractere especial.');
  	} else {
    	passwordInput.style.borderColor = 'green';
  	}

	if (isValid) {
		alert('Login efetuado!');
    	window.location.href = 'logado.html';
	}
});