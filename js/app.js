

// generate random 4 digit number 
function generateNumber() {
    const random = Math.round(Math.random() * 10000);
    return random;
}





// get valid 4 digit pin 
function getValidPin() {
    const pin = generateNumber();
    const pinString = pin + ""
    if (pinString.length === 4) {
        return pin;

    }
    else {
        return getValidPin();
    }

}


// connect pin generator with button 
document.getElementById('generate-button').addEventListener('click', function () {
    const randomPin = getValidPin();
    // display pin 
    const pinInputField = document.getElementById('pin-show-field');
    pinInputField.value = randomPin;
})


