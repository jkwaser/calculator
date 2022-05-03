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
    const calculatorDisp = document.querySelector('.calc_display') // We want this so we know what's on the calculator.

    if (e.target.matches('button')) { // Checking to see if the thing we clicked is a button, otherwise why do anything?
        const newkey = e.target;  // That's our button!
        const operation = newkey.dataset.action; // Take the data-action info and put it in this constant
        const keyContent = newkey.textContent // What is this key? Let's get the text content.
        const displayedNum = calculatorDisp.textContent // Get the text content of the calculator display so we know what to do next.
        
        if (
            operation === 'add' ||
            operation === 'subtract' ||
            operation === 'multiply' ||
            operation === 'divide' // These should all be self-explanatory.
          ) {
            key.classList.add('is-depressed')
          }
      else if (operation == null) { // Checks for a number key as these have no operation variable attached.
          if (displayedNum === '0') {
              calculatorDisp.textContent = keyContent; // This checks for an empty display and then turns the key clicked into the display if the display is empty
          }
          else { 
            calculatorDisp.textContent = displayedNum + keyContent;
          }
          
      }

      else if (operation == "equals") {
          console.log("equals")
      }
      else if (operation == "decimal") {
        calculatorDisp.textContent = displayedNum + "."; // Just appends the decimal point. Need to figure out how to stop this happening twice.
      }
      else if (operation == "clear") {
        calculatorDisp.textContent = "0";
    }
    }
   })
