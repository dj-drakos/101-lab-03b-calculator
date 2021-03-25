//addition
const addOneInput = document.getElementById('add-one');
const addTwoInput = document.getElementById('add-two');
const addButton = document.getElementById('add');
const sumDisplay = document.getElementById('sum');

addButton.addEventListener ('click', () => {
    sumDisplay.textContent = Number(addOneInput.value) + Number(addTwoInput.value);
});

//subtraction
const subOneInput = document.getElementById('sub-one');
const subTwoInput = document.getElementById('sub-two');
const subButton = document.getElementById('subtract');
const diffDisplay = document.getElementById('difference');

subButton.addEventListener ('click', () => {
    diffDisplay.textContent = Number(subOneInput.value) - Number(subTwoInput.value);
});

//multiplication
const multOneInput = document.getElementById('mult-one');
const multTwoInput = document.getElementById('mult-two');
const multButton = document.getElementById('multiply');
const prodDisplay = document.getElementById('product');

multButton.addEventListener ('click', () => {
    prodDisplay.textContent = Number(multOneInput.value) * Number(multTwoInput.value);
});

//division
const divOneInput = document.getElementById('div-one');
const divTwoInput = document.getElementById('div-two');
const divButton = document.getElementById('divide');
const quotDisplay = document.getElementById('quotient');

divButton.addEventListener ('click', () => {
    let quotient = Number(divOneInput.value) / Number(divTwoInput.value);
if (isNaN(quotient)) {
    quotient = 0;
} 
    quotDisplay.textContent = quotient;
});

//verify sum
const checkOneInput = document.getElementById('check-one');
const checkTwoInput = document.getElementById('check-two');
const checkSumButton = document.getElementById('check-sum');
const guessInput = document.getElementById('guess-input');
const verifySumButton = document.getElementById('verify-guess');


checkSumButton.addEventListener ('click', () => {
if (Number(guessInput.value) == Number(checkOneInput.value) + Number(checkTwoInput.value)) {
    verifySumButton.textContent = "Yes!";
    verifySumButton.style.background = 'darkseagreen';
} else {
    verifySumButton.textContent = "Try Again";
    verifySumButton.style.background = 'salmon';
}
});