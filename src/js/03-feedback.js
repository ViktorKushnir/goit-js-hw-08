import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const userInfo = {};
populateSettings();

form.addEventListener('input',throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

function onInput(evt) {
    // evt.preventDefault();
    userInfo[evt.target.name] = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userInfo));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(userInfo);
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function populateSettings() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    
    if (savedData) {
        const { email, message } = savedData;
        form.email.value = email;
        form.message.value = message;
        console.log(savedData);
    }
}
