const btnSubmit = document.querySelector('.subscribe_btn');
const btnDismiss = document.querySelector('.btn_dismiss');
const formContainer = document.querySelector('.form_container');
const successEl = document.querySelector('.success_message');
const inputEl = document.querySelector('form input');

btnSubmit.addEventListener('click', () => {
    if (inputEl.value === '') {
        formContainer.classList.add('hide');
        successEl.classList.remove('hide');
        document.querySelector('.error p').innerHTML = '';
    } else {
        document.querySelector('.error p').innerHTML = "Valid Email Required";
        inputEl.classList.add('active');
    }
});

btnDismiss.addEventListener('click', () => {
    formContainer.classList.remove('hide');
    successEl.classList.add('hide');
    inputEl.value = '';
    inputEl.classList.remove('active');
});