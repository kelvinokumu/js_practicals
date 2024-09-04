
function calculate() {

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(number1) || isNaN(number2)) {
        alert('Please enter valid numbers');
        return;
    }


    let result;
    if (operation === 'add') {
        result = number1 + number2;
    } else if (operation === 'subtract') {
        result = number1 - number2;
    } else if (operation === 'multiply') {
        result = number1 * number2;
    } else if (operation === 'divide') {
        if (number2 === 0) {
            alert('Cannot divide by zero');
            return;
        }
        result = number1 / number2;
    }

    // Display the result
    document.getElementById('resultValue').textContent = result;
}
