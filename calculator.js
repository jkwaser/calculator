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

/*
Temporary notes to help figure this out. There are basically two cases.
Case one is easy - I get a number, an operator, a second number, and the equals sign.
Just evaluate as per the operate function and store the result as the first number.
Case two is trickier - I get a number, and operator, a second number, and a second operator.
I then need to evaluate the number/operator/number triad, use it as the new first number,
and add the new operator to await the second number.

If I can resolve both of those cases functionally I can hook them up to the 
buttons and the rest is pretty straightforward.
*/