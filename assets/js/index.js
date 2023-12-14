//DOM Declarations
const usernameInput = $('#username');
const submitBtns = $('.submit-btn');
const loginPrompt = $('#login-link');
const signupPrompt = $('#signup-prompt');
const signupArea = $('#signup-area');
const loginArea = $('#login-area');

//Event listener on form buttons
submitBtns.on('click', event => {
    event.preventDefault();
    console.log('hi mum');
});

//Function to toggle signup/login area view
const toggleDisplay = (showThis, hideThis) => {
    showThis.addClass('show');
    
    if(showThis.hasClass('hide')){
        showThis.removeClass('hide')
    }

    hideThis.addClass('hide');

    if(showThis.hasClass('show')){
        showThis.removeClass('show');
    }
}

//Event listeners to toggle signup/login area view
loginPrompt.on('click', () => toggleDisplay(loginArea, signupArea));
signupPrompt.on('click', () => toggleDisplay(signupArea, loginArea))








