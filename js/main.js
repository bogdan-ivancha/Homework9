var form = document.querySelector('form');
var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var buttonsContainer = document.querySelector('#buttons-container');
var resultField = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
})

buttonsContainer.addEventListener('click', function(e) {
    var result;
    var selectedButton = e.target.id;
    if (selectedButton === 'plus') {
        result = +number1.value + +number2.value;
    }
    if (selectedButton === 'minus') {
        result = +number1.value - +number2.value;
    }
    if (selectedButton === 'multiply') {
        result = +number1.value * +number2.value;
    }
    if (selectedButton === 'division') {
        result = +number1.value / +number2.value;
    }
    if (selectedButton === 'exponent') {
        result = Math.pow(+number1.value , +number2.value);
    }
    return resultField.innerText = result;
})
