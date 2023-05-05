import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const formEmail = document.querySelector('form input');
const formMessage = document.querySelector('form textarea');
const STORAGE_KEY = 'feedback-form-state';
let userInfo = {
    email: '',
    message: '',
};

populateSettings();



form.addEventListener('input',throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

function onInput(e) {
     userInfo[e.target.name] = e.target.value;
    
    localStorage.setItem(STORAGE_KEY,
        JSON.stringify({...userInfo,
        email: formEmail.value,
        message: formMessage.value}));
}

function onFormSubmit(e) {
    e.preventDefault();
    if (formEmail.value && formMessage.value){
        form.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(userInfo);
        userInfo.email = '';
        userInfo.message = '';             
    } else {
        alert("Всі поля форми мають бути заповнені!")
    }
   
}

function populateSettings() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    
    if (savedData) {
        const { email, message } = savedData;
        form.email.value = email;
        form.message.value = message;
        console.log(savedData);
    } else {
        form.email.value = '';
        form.message.value = '';

    }
}
