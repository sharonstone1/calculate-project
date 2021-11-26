
// declare variable

let lhs = 0
let operator = null
let resultDisplay = false

// create a function display value
const displayValue = (value) => {
    if (resultDisplay) { 
        resultDisplay = false
        document.getElementById('result').value = value;
    } else {
        document.getElementById('result').value += value;        
    }
}

// create a clear function for all values
const clearScreen = ()=>{
    lhs = 0
    operator = null
    resultDisplay = false
    document.getElementById('result').value='';
}

// create an operator function for all key_operator and key_equal

const applyOperator = (newOperator) => {
    let rhs = parseFloat(document.getElementById('result').value);

    switch(operator) { 
        case '+':
            lhs = lhs + rhs
            break
        case '-':
            lhs = lhs - rhs            
            break
        case '*':
            lhs = lhs * rhs            
            break
        case '/':
            lhs = lhs / rhs       
            break
        default:
            lhs = rhs
    }

    if (newOperator !== '=') { 
        operator = newOperator
    } else {
        operator = null
    }

    resultDisplay = true
    document.getElementById('result').value = lhs;
}


