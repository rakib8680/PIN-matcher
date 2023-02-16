

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
        console.log('not valid pin');
        return generateNumber();
    }

}