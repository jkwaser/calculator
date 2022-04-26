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

const calculator = document.querySelector('.calculator') // Adding a selector
const keys = calculator.querySelector('.calc_grid') // Drilling down so we can select buttons

keys.addEventListener('click', e => {
    console.log("buttan");
    if (e.target.matches('button')) {
        const newkey = e.target;
        const operation = newkey.dataset.action;
        
        if (
            operation === 'add' ||
            operation === 'subtract' ||
            operation === 'multiply' ||
            operation === 'divide'
          ) {
            console.log('operator key!')
          }
      else if (operation == null) {
          console.log('number key!')
      }

      else if (operation == "equals") {
          console.log("equals")
      }
      else if (operation == "decimal") {
          console.log("decimal point")
      }
      else if (operation == "clear") {
        console.log("clear key")
    }
    }
   })
