

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




// Pin typing section 
document.getElementById('number-parent').addEventListener('click', function (event) {
    const numbers = event.target.innerText;

    const typedNumField = document.getElementById('typed-numbers');
    const previousTypedNum = typedNumField.value;

    if (isNaN(numbers)) {
        if (numbers == 'C') {
            typedNumField.value = '';
        }
        else if (numbers == '<') {
            const digits = previousTypedNum.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumField.value = remainingDigits;
        }
    }

    else {
        const currentTypedNum = previousTypedNum + numbers;
        typedNumField.value = currentTypedNum;
    }
})




// add event handler in submit button 
document.getElementById('submit-btn').addEventListener('click', function () {
    const pinInputField = document.getElementById('pin-show-field');

    const typedNumField = document.getElementById('typed-numbers');

    const successPinMessage = document.getElementById('pin-success');

    const errorMessage = document.getElementById('pin-wrong');

    if (pinInputField.value == typedNumField.value) {
        successPinMessage.style.display = 'block';
        errorMessage.style.display = 'none';
    }

    else {
        errorMessage.style.display = 'block';
        successPinMessage.style.display = 'none';
    }
    pinInputField.value = '';
    typedNumField.value = '';

})



