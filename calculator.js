function adder(a,b) {
return a + b;
}

function subtractor(a,b) {
    return a - b;
}

function multiplier(a,b) {
    return a * b;
}

function divider(a,b) {
    return a / b;
}

function operate(a,b, operator) {
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
    else (return "Incorrect operator!")
}