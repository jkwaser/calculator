function adder(a,b) { // Adds numbers
return a + b;
}

function subtractor(a,b) { // Subtracts numbers
    return a - b;
}

function multiplier(a,b) { // Multiplies numbers
    return a * b;
}

function divider(a,b) { // Divides numbers
    return a / b;
}

function operate(a,b, operator) { // Takes in an operator and returns the two numbers with that operator applies
    if (operator == "+") {
        return adder(a,b);
    }
    if (operator == "-") {
        return subtractor(a,b);
    }
    if (operator == "*") {
        return multiplier(a,b);
    }
    if (operator == "/") {
        return divider(a,b);
    }
    else {return "Incorrect operator!"} // Can only accept the four basic operations. Should not be an issue as operands are input from buttons, this is here as a failsafe.
}

const calculator = document.querySelector(‘.calculator’) // Adding a selector
const keys = calculator.querySelector(‘.calc_grid’) // Drilling down so we can select buttons

keys.addEventListener(‘click’, e => {
    if (e.target.matches(‘button’)) {
      // This is where the magic is going to happen
    }
   })
