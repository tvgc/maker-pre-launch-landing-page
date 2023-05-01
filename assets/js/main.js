const emailInput = document.querySelector('.js-input');
const submitButton = document.querySelector('.js-button');
const form = document.querySelector('.js-form');

form.addEventListener('submit', event=>{
    event.preventDefault()

    validateEmail(emailInput)
})

submitButton.addEventListener('click', event=>{
    event.preventDefault()

    validateEmail(emailInput)
})

const validateEmail = (emailInput) => {
    if(isValidEmail(emailInput.value)){
        setSuccess(emailInput);        
    } else  {
        setError(emailInput);
    }    
}

const isValidEmail = emailInput => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
}

const setSuccess = (element) => {
    element.parentElement.classList.remove('error');
}

const setError = (element) => {
    const inputControl = element.parentElement;
    inputControl.classList.add('error');
}